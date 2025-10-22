import { useParams, Link } from "react-router-dom";
import { AppSidebar } from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Menu } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Calendar, MessageCircle, Heart, Share2, Droplet, Thermometer, Sun } from "lucide-react";

import diary1 from "@/assets/diary-1.jpg";

const DiaryDetail = () => {
  const { id } = useParams();

  const weeks = [
    { week: 1, date: "Jan 15", height: "5cm", notes: "Seedling emerged, looking healthy" },
    { week: 2, date: "Jan 22", height: "12cm", notes: "First true leaves developing" },
    { week: 3, date: "Jan 29", height: "18cm", notes: "Vegetative growth strong" },
    { week: 4, date: "Feb 5", height: "25cm", notes: "Started LST training" },
    { week: 5, date: "Feb 12", height: "32cm", notes: "Pre-flowering signs visible" },
    { week: 6, date: "Feb 19", height: "40cm", notes: "Flowering stage initiated" },
    { week: 7, date: "Feb 26", height: "45cm", notes: "Buds developing nicely" },
    { week: 8, date: "Mar 5", height: "48cm", notes: "Trichomes getting milky" },
  ];

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
                <Link to="/">
                  <Button variant="ghost" className="gap-2">
                    <ArrowLeft className="w-4 h-4" />
                    <span className="hidden sm:inline">Back to Diaries</span>
                    <span className="sm:inline md:hidden">Back</span>
                  </Button>
                </Link>
              </div>
            <div className="flex gap-2">
              <Button variant="outline" size="icon">
                <Heart className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Share2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="p-4 md:p-8 max-w-7xl mx-auto">
          {/* Diary Header */}
          <div className="space-y-6">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold text-foreground">Sunset Sherbet Auto</h1>
                <div className="flex items-center gap-4">
                  <Link to="/grower/greenthumbmaster">
                    <div className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                      <Avatar className="w-8 h-8">
                        <AvatarImage src="" />
                        <AvatarFallback className="bg-primary text-primary-foreground">GT</AvatarFallback>
                      </Avatar>
                      <span className="text-sm font-medium text-foreground">GreenThumbMaster</span>
                    </div>
                  </Link>
                  <span className="text-sm text-muted-foreground">Started 2 months ago</span>
                </div>
              </div>
              <div className="flex gap-2">
                <Badge variant="secondary" className="text-sm">Week 8</Badge>
                <Badge variant="outline" className="text-sm">Flowering</Badge>
              </div>
            </div>

            {/* Main Image */}
            <div className="rounded-lg overflow-hidden">
              <img src={diary1} alt="Diary" className="w-full h-[500px] object-cover" />
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                    <Sun className="w-4 h-4" />
                    Light Schedule
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-foreground">18/6</p>
                  <p className="text-xs text-muted-foreground">hours on/off</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                    <Thermometer className="w-4 h-4" />
                    Temperature
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-foreground">24°C</p>
                  <p className="text-xs text-muted-foreground">average</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                    <Droplet className="w-4 h-4" />
                    Humidity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-foreground">55%</p>
                  <p className="text-xs text-muted-foreground">relative</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                    <MessageCircle className="w-4 h-4" />
                    Engagement
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-foreground">127</p>
                  <p className="text-xs text-muted-foreground">likes & comments</p>
                </CardContent>
              </Card>
            </div>

            {/* Description */}
            <Card>
              <CardHeader>
                <CardTitle>About this grow</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Strain</p>
                    <p className="font-medium text-foreground">Sunset Sherbet Automatic</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Breeder</p>
                    <p className="font-medium text-foreground">FastBuds</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Medium</p>
                    <p className="font-medium text-foreground">Soil - Organic</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Environment</p>
                    <p className="font-medium text-foreground">Indoor - Tent</p>
                  </div>
                </div>
                <Separator />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  This is my second autoflower grow. Using organic soil mix with added perlite for better drainage. 
                  Light schedule is 18/6 throughout the entire grow. Applied LST techniques from week 4 to maximize 
                  light exposure to all bud sites.
                </p>
              </CardContent>
            </Card>

            {/* Weekly Progress */}
            <Card>
              <CardHeader>
                <CardTitle>Weekly Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {weeks.map((week) => (
                    <div key={week.week} className="flex gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary font-bold">
                        W{week.week}
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{week.date}</span>
                          <Badge variant="outline" className="ml-auto">{week.height}</Badge>
                        </div>
                        <p className="text-sm text-foreground">{week.notes}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Comments Section */}
            <Card>
              <CardHeader>
                <CardTitle>Comments (7)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-3">
                  <Avatar className="w-8 h-8">
                    <AvatarFallback className="bg-secondary text-secondary-foreground">PH</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">PurpleHaze420</p>
                    <p className="text-sm text-muted-foreground">Looking amazing! What nutrients are you using?</p>
                    <p className="text-xs text-muted-foreground mt-1">2 days ago</p>
                  </div>
                </div>
                <Separator />
                <div className="flex gap-3">
                  <Avatar className="w-8 h-8">
                    <AvatarFallback className="bg-secondary text-secondary-foreground">NF</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">NatureFarmer</p>
                    <p className="text-sm text-muted-foreground">Great LST work! Very even canopy.</p>
                    <p className="text-xs text-muted-foreground mt-1">3 days ago</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
    </SidebarProvider>
  );
};

export default DiaryDetail;
