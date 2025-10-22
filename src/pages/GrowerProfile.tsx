import { Link } from "react-router-dom";
import { AppSidebar } from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Menu } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DiaryCard } from "@/components/DiaryCard";
import { ArrowLeft, MapPin, Calendar, Award, Users, BookOpen } from "lucide-react";

import diary1 from "@/assets/diary-1.jpg";
import diary2 from "@/assets/diary-2.jpg";
import diary5 from "@/assets/diary-5.jpg";

const GrowerProfile = () => {
  const growerDiaries = [
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
      title: "Blue Dream Grow",
      grower: "GreenThumbMaster",
      strain: "Blue Dream",
      weeks: 11,
      comments: 14,
      time: "4mo ago",
    },
    {
      image: diary5,
      title: "OG Kush Training",
      grower: "GreenThumbMaster",
      strain: "OG Kush",
      weeks: 6,
      comments: 12,
      time: "6mo ago",
    },
  ];

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background">
        <AppSidebar />

        <main className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm border-b border-border px-4 md:px-8 py-4">
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
        </header>

        {/* Content */}
        <div className="p-4 md:p-8 max-w-7xl mx-auto">
          {/* Profile Header */}
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <Avatar className="w-24 h-24">
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-primary text-primary-foreground text-3xl">GT</AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1 space-y-4">
                    <div>
                      <h1 className="text-3xl font-bold text-foreground">GreenThumbMaster</h1>
                      <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>California, USA</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>Joined Jan 2023</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Passionate organic grower with 5+ years of experience. Love experimenting with 
                      different training techniques and sharing knowledge with the community. 
                      Specializing in autoflowers and LST methods.
                    </p>

                    <div className="flex gap-2">
                      <Button variant="default">Follow</Button>
                      <Button variant="outline">Message</Button>
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4 md:w-64">
                    <Card>
                      <CardContent className="p-4 text-center">
                        <BookOpen className="w-5 h-5 mx-auto mb-2 text-primary" />
                        <p className="text-2xl font-bold text-foreground">12</p>
                        <p className="text-xs text-muted-foreground">Diaries</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4 text-center">
                        <Users className="w-5 h-5 mx-auto mb-2 text-primary" />
                        <p className="text-2xl font-bold text-foreground">1.2k</p>
                        <p className="text-xs text-muted-foreground">Followers</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4 text-center">
                        <Award className="w-5 h-5 mx-auto mb-2 text-primary" />
                        <p className="text-2xl font-bold text-foreground">48</p>
                        <p className="text-xs text-muted-foreground">Awards</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4 text-center">
                        <Calendar className="w-5 h-5 mx-auto mb-2 text-primary" />
                        <p className="text-2xl font-bold text-foreground">156</p>
                        <p className="text-xs text-muted-foreground">Weeks</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tabs Section */}
            <Tabs defaultValue="diaries" className="w-full">
              <TabsList className="grid w-full grid-cols-3 max-w-md">
                <TabsTrigger value="diaries">Diaries</TabsTrigger>
                <TabsTrigger value="strains">Strains</TabsTrigger>
                <TabsTrigger value="activity">Activity</TabsTrigger>
              </TabsList>

              <TabsContent value="diaries" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {growerDiaries.map((diary, index) => (
                    <DiaryCard key={index} {...diary} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="strains" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Sunset Sherbet</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Grows</span>
                          <span className="font-medium text-foreground">3</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Avg. Yield</span>
                          <span className="font-medium text-foreground">85g</span>
                        </div>
                        <Badge variant="secondary" className="w-full justify-center">
                          Indica Hybrid
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Blue Dream</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Grows</span>
                          <span className="font-medium text-foreground">2</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Avg. Yield</span>
                          <span className="font-medium text-foreground">92g</span>
                        </div>
                        <Badge variant="secondary" className="w-full justify-center">
                          Sativa Hybrid
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">OG Kush</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Grows</span>
                          <span className="font-medium text-foreground">4</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Avg. Yield</span>
                          <span className="font-medium text-foreground">78g</span>
                        </div>
                        <Badge variant="secondary" className="w-full justify-center">
                          Indica Hybrid
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="activity" className="mt-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="flex gap-3 p-4 rounded-lg bg-muted/30">
                        <Calendar className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-foreground">Started new diary</p>
                          <p className="text-sm text-muted-foreground">Sunset Sherbet Auto - Week 1</p>
                          <p className="text-xs text-muted-foreground mt-1">2 months ago</p>
                        </div>
                      </div>
                      
                      <div className="flex gap-3 p-4 rounded-lg bg-muted/30">
                        <Award className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-foreground">Received award</p>
                          <p className="text-sm text-muted-foreground">Diary of the Month</p>
                          <p className="text-xs text-muted-foreground mt-1">3 months ago</p>
                        </div>
                      </div>

                      <div className="flex gap-3 p-4 rounded-lg bg-muted/30">
                        <Users className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-foreground">Milestone reached</p>
                          <p className="text-sm text-muted-foreground">1000 followers</p>
                          <p className="text-xs text-muted-foreground mt-1">4 months ago</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
    </SidebarProvider>
  );
};

export default GrowerProfile;
