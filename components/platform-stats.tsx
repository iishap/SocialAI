"use client"

import { Instagram, Twitter, Linkedin, Facebook } from "lucide-react"
import { Progress } from "@/components/ui/progress"

const platformStats = [
  {
    name: "Instagram",
    icon: Instagram,
    engagement: 68,
    followers: "12.5K",
    growth: "+5.2%",
  },
  {
    name: "Twitter",
    icon: Twitter,
    engagement: 42,
    followers: "8.3K",
    growth: "+3.1%",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    engagement: 57,
    followers: "5.7K",
    growth: "+7.8%",
  },
  {
    name: "Facebook",
    icon: Facebook,
    engagement: 35,
    followers: "15.2K",
    growth: "+1.5%",
  },
]

export function PlatformStats() {
  return (
    <div className="space-y-6">
      {platformStats.map((platform) => (
        <div key={platform.name} className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <platform.icon className="h-5 w-5" />
              <span className="font-medium">{platform.name}</span>
            </div>
            <div className="text-sm text-muted-foreground">
              {platform.followers} <span className="text-green-500">{platform.growth}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Progress value={platform.engagement} className="h-2" />
            <span className="text-sm font-medium">{platform.engagement}%</span>
          </div>
        </div>
      ))}
    </div>
  )
}

