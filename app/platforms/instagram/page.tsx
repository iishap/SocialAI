import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PlatformConnect } from "@/components/platform-connect"
import { Button } from "@/components/ui/button"
import { Instagram, Settings, BarChart3, Image, Calendar } from "lucide-react"

export default function InstagramPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Instagram className="h-8 w-8 text-[#E1306C]" />
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Instagram</h1>
              <p className="text-muted-foreground">Manage your Instagram content and analytics</p>
            </div>
          </div>
          <Button variant="outline">
            <Settings className="mr-2 h-4 w-4" />
            Platform Settings
          </Button>
        </div>

        <Tabs defaultValue="connect" className="space-y-4">
          <TabsList>
            <TabsTrigger value="connect">Connect</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
          </TabsList>

          <TabsContent value="connect" className="space-y-4">
            <PlatformConnect />
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Followers</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12.5K</div>
                  <p className="text-xs text-muted-foreground">+5.2% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Engagement Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">4.3%</div>
                  <p className="text-xs text-muted-foreground">+0.8% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Reach</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">45.2K</div>
                  <p className="text-xs text-muted-foreground">+12.3% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Profile Visits</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">8.7K</div>
                  <p className="text-xs text-muted-foreground">+3.1% from last month</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Instagram Insights</CardTitle>
                <CardDescription>Performance metrics for your Instagram account</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px] flex items-center justify-center">
                <div className="flex flex-col items-center text-center">
                  <BarChart3 className="h-16 w-16 text-muted-foreground/50" />
                  <h3 className="mt-4 text-lg font-medium">Connect Instagram to view insights</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Connect your Instagram account to view detailed analytics and insights
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="content" className="space-y-4">
            <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
              <Card className="col-span-1 md:col-span-3">
                <CardHeader>
                  <CardTitle>Content Strategy</CardTitle>
                  <CardDescription>Optimize your Instagram content strategy</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1 space-y-4">
                    <div className="flex items-center gap-3">
                      <Calendar className="h-8 w-8 text-primary" />
                      <div>
                        <h3 className="font-medium">Best Time to Post</h3>
                        <p className="text-sm text-muted-foreground">Tuesday and Thursday between 1-3 PM</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Image className="h-8 w-8 text-primary" />
                      <div>
                        <h3 className="font-medium">Top Performing Content</h3>
                        <p className="text-sm text-muted-foreground">Carousel posts with educational content</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <BarChart3 className="h-8 w-8 text-primary" />
                      <div>
                        <h3 className="font-medium">Hashtag Performance</h3>
                        <p className="text-sm text-muted-foreground">
                          5-7 niche hashtags perform better than generic ones
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 space-y-4">
                    <Button className="w-full">Schedule Instagram Post</Button>
                    <Button variant="outline" className="w-full">
                      View Content Calendar
                    </Button>
                    <Button variant="outline" className="w-full">
                      Generate Content Ideas
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

