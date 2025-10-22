import { Link } from "react-router-dom";
import { AppSidebar } from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Menu } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Upload, Plus } from "lucide-react";

const CreateDiary = () => {
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
              <Button variant="outline">Save as Draft</Button>
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold">
                Publish Diary
              </Button>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="p-4 md:p-8 max-w-4xl mx-auto">
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Start Your Grow Diary</h1>
              <p className="text-muted-foreground mt-2">Share your growing journey with the community</p>
            </div>

            {/* Basic Information */}
            <Card>
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
                <CardDescription>Tell us about your grow</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="diary-name">Diary Name *</Label>
                  <Input id="diary-name" placeholder="e.g., My First Autoflower Grow" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="strain">Strain *</Label>
                    <Input id="strain" placeholder="e.g., Blue Dream" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="breeder">Breeder</Label>
                    <Input id="breeder" placeholder="e.g., FastBuds" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea 
                    id="description" 
                    placeholder="Share details about your grow setup, goals, and what makes this grow special..."
                    rows={4}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Growing Environment */}
            <Card>
              <CardHeader>
                <CardTitle>Growing Environment</CardTitle>
                <CardDescription>Setup and conditions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="environment">Environment *</Label>
                    <Select>
                      <SelectTrigger id="environment">
                        <SelectValue placeholder="Select environment" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="indoor-tent">Indoor - Tent</SelectItem>
                        <SelectItem value="indoor-room">Indoor - Room</SelectItem>
                        <SelectItem value="outdoor">Outdoor</SelectItem>
                        <SelectItem value="greenhouse">Greenhouse</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="medium">Growing Medium *</Label>
                    <Select>
                      <SelectTrigger id="medium">
                        <SelectValue placeholder="Select medium" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="soil">Soil</SelectItem>
                        <SelectItem value="coco">Coco Coir</SelectItem>
                        <SelectItem value="hydro">Hydroponics</SelectItem>
                        <SelectItem value="aero">Aeroponics</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="light-schedule">Light Schedule</Label>
                    <Input id="light-schedule" placeholder="e.g., 18/6" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="light-type">Light Type</Label>
                    <Select>
                      <SelectTrigger id="light-type">
                        <SelectValue placeholder="Select light type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="led">LED</SelectItem>
                        <SelectItem value="hps">HPS</SelectItem>
                        <SelectItem value="cmh">CMH</SelectItem>
                        <SelectItem value="cfl">CFL</SelectItem>
                        <SelectItem value="natural">Natural Sunlight</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="temperature">Temperature (°C)</Label>
                    <Input id="temperature" type="number" placeholder="e.g., 24" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="humidity">Humidity (%)</Label>
                    <Input id="humidity" type="number" placeholder="e.g., 55" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Nutrients & Additives */}
            <Card>
              <CardHeader>
                <CardTitle>Nutrients & Additives</CardTitle>
                <CardDescription>What are you feeding your plants?</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="nutrients">Nutrient Line</Label>
                  <Input id="nutrients" placeholder="e.g., General Hydroponics Flora Series" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="additives">Additional Supplements</Label>
                  <Textarea 
                    id="additives" 
                    placeholder="List any additional supplements, boosters, or amendments..."
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Cover Image */}
            <Card>
              <CardHeader>
                <CardTitle>Cover Image</CardTitle>
                <CardDescription>Upload a photo of your plant</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                  <Upload className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                  <p className="text-sm text-muted-foreground mb-2">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-xs text-muted-foreground">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex gap-4 justify-end pt-4">
              <Link to="/">
                <Button variant="outline">Cancel</Button>
              </Link>
              <Button variant="outline">Save as Draft</Button>
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold gap-2">
                <Plus className="w-4 h-4" />
                Publish Diary
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
    </SidebarProvider>
  );
};

export default CreateDiary;
