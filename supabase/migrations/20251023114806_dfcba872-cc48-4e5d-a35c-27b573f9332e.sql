-- Create profiles table
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL UNIQUE,
  display_name TEXT,
  avatar_url TEXT,
  bio TEXT,
  location TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Create diaries table
CREATE TABLE public.diaries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  title TEXT NOT NULL,
  strain TEXT NOT NULL,
  breeder TEXT,
  description TEXT,
  environment_type TEXT,
  medium TEXT,
  light_schedule TEXT,
  light_type TEXT,
  temperature TEXT,
  humidity TEXT,
  nutrients TEXT,
  supplements TEXT,
  cover_image_url TEXT,
  status TEXT DEFAULT 'draft',
  weeks INTEGER DEFAULT 0,
  likes_count INTEGER DEFAULT 0,
  comments_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Create diary_updates table
CREATE TABLE public.diary_updates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  diary_id UUID REFERENCES public.diaries(id) ON DELETE CASCADE NOT NULL,
  week INTEGER NOT NULL,
  height TEXT,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Create comments table
CREATE TABLE public.comments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  diary_id UUID REFERENCES public.diaries(id) ON DELETE CASCADE NOT NULL,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Create likes table
CREATE TABLE public.likes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  diary_id UUID REFERENCES public.diaries(id) ON DELETE CASCADE NOT NULL,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  UNIQUE(diary_id, user_id)
);

-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.diaries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.diary_updates ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.likes ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Profiles are viewable by everyone"
  ON public.profiles FOR SELECT
  USING (true);

CREATE POLICY "Users can update their own profile"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own profile"
  ON public.profiles FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Diaries policies
CREATE POLICY "Published diaries are viewable by everyone"
  ON public.diaries FOR SELECT
  USING (status = 'published' OR auth.uid() = user_id);

CREATE POLICY "Users can create their own diaries"
  ON public.diaries FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own diaries"
  ON public.diaries FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own diaries"
  ON public.diaries FOR DELETE
  USING (auth.uid() = user_id);

-- Diary updates policies
CREATE POLICY "Diary updates are viewable by everyone"
  ON public.diary_updates FOR SELECT
  USING (EXISTS (
    SELECT 1 FROM public.diaries
    WHERE diaries.id = diary_updates.diary_id
    AND (diaries.status = 'published' OR diaries.user_id = auth.uid())
  ));

CREATE POLICY "Users can create updates for their diaries"
  ON public.diary_updates FOR INSERT
  WITH CHECK (EXISTS (
    SELECT 1 FROM public.diaries
    WHERE diaries.id = diary_updates.diary_id
    AND diaries.user_id = auth.uid()
  ));

CREATE POLICY "Users can update their diary updates"
  ON public.diary_updates FOR UPDATE
  USING (EXISTS (
    SELECT 1 FROM public.diaries
    WHERE diaries.id = diary_updates.diary_id
    AND diaries.user_id = auth.uid()
  ));

CREATE POLICY "Users can delete their diary updates"
  ON public.diary_updates FOR DELETE
  USING (EXISTS (
    SELECT 1 FROM public.diaries
    WHERE diaries.id = diary_updates.diary_id
    AND diaries.user_id = auth.uid()
  ));

-- Comments policies
CREATE POLICY "Comments are viewable by everyone"
  ON public.comments FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can create comments"
  ON public.comments FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own comments"
  ON public.comments FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own comments"
  ON public.comments FOR DELETE
  USING (auth.uid() = user_id);

-- Likes policies
CREATE POLICY "Likes are viewable by everyone"
  ON public.likes FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can like diaries"
  ON public.likes FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can unlike diaries"
  ON public.likes FOR DELETE
  USING (auth.uid() = user_id);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for updated_at
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_diaries_updated_at
  BEFORE UPDATE ON public.diaries
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Create function to handle new user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (user_id, display_name)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'display_name', split_part(NEW.email, '@', 1))
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Create trigger for new user signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();

-- Create function to update likes count
CREATE OR REPLACE FUNCTION public.update_likes_count()
RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    UPDATE public.diaries
    SET likes_count = likes_count + 1
    WHERE id = NEW.diary_id;
  ELSIF TG_OP = 'DELETE' THEN
    UPDATE public.diaries
    SET likes_count = likes_count - 1
    WHERE id = OLD.diary_id;
  END IF;
  RETURN NULL;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for likes count
CREATE TRIGGER update_diary_likes_count
  AFTER INSERT OR DELETE ON public.likes
  FOR EACH ROW
  EXECUTE FUNCTION public.update_likes_count();

-- Create function to update comments count
CREATE OR REPLACE FUNCTION public.update_comments_count()
RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    UPDATE public.diaries
    SET comments_count = comments_count + 1
    WHERE id = NEW.diary_id;
  ELSIF TG_OP = 'DELETE' THEN
    UPDATE public.diaries
    SET comments_count = comments_count - 1
    WHERE id = OLD.diary_id;
  END IF;
  RETURN NULL;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for comments count
CREATE TRIGGER update_diary_comments_count
  AFTER INSERT OR DELETE ON public.comments
  FOR EACH ROW
  EXECUTE FUNCTION public.update_comments_count();