import { Link } from "react-router-dom";
import { AppSidebar } from "@/components/Sidebar";
import { Hero } from "@/components/Hero";
import { FilterBar } from "@/components/FilterBar";
import { DiaryCard } from "@/components/DiaryCard";
import { UserMenu } from "@/components/UserMenu";
import { Button } from "@/components/ui/button";
import { Plus, Menu } from "lucide-react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { useAuth } from "@/hooks/useAuth";

import diary1 from "@/assets/diary-1.jpg";
import diary2 from "@/assets/diary-2.jpg";
import diary3 from "@/assets/diary-3.jpg";
import diary4 from "@/assets/diary-4.jpg";
import diary5 from "@/assets/diary-5.jpg";
import diary6 from "@/assets/diary-6.jpg";

const diaries = [
  {
    image: diary1,
    title: "Sunset Sherbet Auto",
    grower: "GreenThumbMaster",
    strain: "Sunset Sherbet Automatic",
    weeks: 8,
    comments: 7,
    time: "2mo ago",
  },
  {
    image: diary2,
    title: "Purple Dream Flowering",
    grower: "PurpleHaze420",
    strain: "Purple Dream",
    weeks: 11,
    comments: 14,
    time: "1mo ago",
  },
  {
    image: diary3,
    title: "Outdoor Organic Grow",
    grower: "NatureFarmer",
    strain: "Outdoor Mix",
    weeks: 12,
    comments: 23,
    time: "4mo ago",
  },
  {
    image: diary4,
    title: "Frosty Buds Close-up",
    grower: "FrostKing",
    strain: "White Widow",
    weeks: 9,
    comments: 31,
    time: "5d ago",
  },
  {
    image: diary5,
    title: "LST Training Progress",
    grower: "TrainingPro",
    strain: "Gorilla Glue",
    weeks: 6,
    comments: 12,
    time: "1mo ago",
  },
  {
    image: diary6,
    title: "Harvest Day Success",
    grower: "HarvestMaster",
    strain: "Multiple Strains",
    weeks: 13,
    comments: 45,
    time: "4mo ago",
  },
];

const Index = () => {
  const { user } = useAuth();

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background">
        <AppSidebar />

        <main className="flex-1 overflow-y-auto">
          {/* Header */}
          <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm border-b border-border px-4 md:px-8 py-4">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <SidebarTrigger className="lg:hidden">
                  <Menu className="w-5 h-5" />
                </SidebarTrigger>
                <div>
                  <h1 className="text-xl md:text-2xl font-bold text-foreground">Grow Diaries</h1>
                  <p className="text-xs md:text-sm text-muted-foreground hidden sm:block">Community growing knowledge</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                {user && (
                  <Link to="/create">
                    <Button className="gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-bold shadow-lg">
                      <Plus className="w-4 h-4 md:w-5 md:h-5" />
                      <span className="hidden sm:inline">Start My Diary</span>
                      <span className="sm:hidden">New</span>
                    </Button>
                  </Link>
                )}
                <UserMenu />
              </div>
            </div>
          </header>

          {/* Content */}
          <div className="p-4 md:p-8 space-y-8">
            {/* Hero Section */}
            <Hero />

            {/* Filter Bar */}
            <FilterBar />

            {/* Diaries Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {diaries.map((diary, index) => (
                <DiaryCard key={index} {...diary} />
              ))}
            </div>

            {/* Load More */}
            <div className="flex justify-center pt-8">
              <Button variant="outline" size="lg" className="font-semibold">
                Show more
              </Button>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
