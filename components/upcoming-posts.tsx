"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Instagram, Twitter, Linkedin, Facebook, MoreHorizontal, Edit, Trash2 } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const posts = [
  {
    id: 1,
    content: "Excited to announce our new product launch! Stay tuned for more details. #ProductLaunch #Innovation",
    image: "/placeholder.svg?height=300&width=400",
    scheduledFor: "Today, 2:00 PM",
    platforms: ["instagram", "twitter", "linkedin"],
    status: "scheduled",
  },
  {
    id: 2,
    content:
      "Check out our latest blog post on digital marketing trends for 2025! Link in bio. #DigitalMarketing #Trends2025",
    image: "/placeholder.svg?height=300&width=400",
    scheduledFor: "Tomorrow, 10:00 AM",
    platforms: ["facebook", "linkedin"],
    status: "scheduled",
  },
  {
    id: 3,
    content:
      "We're hiring! Join our team of passionate marketers and help us grow. Apply now! #JobOpening #Marketing #Careers",
    image: "/placeholder.svg?height=300&width=400",
    scheduledFor: "Mar 12, 3:30 PM",
    platforms: ["instagram", "linkedin", "facebook"],
    status: "draft",
  },
]

export function UpcomingPosts() {
  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case "instagram":
        return <Instagram className="h-4 w-4" />
      case "twitter":
        return <Twitter className="h-4 w-4" />
      case "linkedin":
        return <Linkedin className="h-4 w-4" />
      case "facebook":
        return <Facebook className="h-4 w-4" />
      default:
        return null
    }
  }

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <Card key={post.id} className="overflow-hidden">
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/4 h-48 md:h-auto">
                <img src={post.image || "/placeholder.svg"} alt="Post preview" className="h-full w-full object-cover" />
              </div>
              <div className="flex-1 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    {post.platforms.map((platform) => (
                      <div key={platform} className="text-muted-foreground">
                        {getPlatformIcon(platform)}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant={post.status === "scheduled" ? "default" : "secondary"}>
                      {post.status === "scheduled" ? "Scheduled" : "Draft"}
                    </Badge>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">More options</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Edit className="mr-2 h-4 w-4" />
                          <span>Edit</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">
                          <Trash2 className="mr-2 h-4 w-4" />
                          <span>Delete</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
                <p className="text-sm mb-4">{post.content}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src="/placeholder.svg?height=24&width=24" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <span className="text-xs text-muted-foreground">Jane Doe</span>
                  </div>
                  <div className="text-xs text-muted-foreground">{post.scheduledFor}</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

