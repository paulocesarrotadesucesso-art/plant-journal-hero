-- Fix search_path for update_updated_at_column function
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

-- Fix search_path for update_likes_count function
CREATE OR REPLACE FUNCTION public.update_likes_count()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
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
$$;

-- Fix search_path for update_comments_count function
CREATE OR REPLACE FUNCTION public.update_comments_count()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
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
$$;