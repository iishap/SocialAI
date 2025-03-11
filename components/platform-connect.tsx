"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Instagram, Twitter, Linkedin, Facebook, Link2, Check, AlertCircle } from "lucide-react"

interface PlatformProps {
  name: string
  icon: React.ElementType
  color: string
  connected: boolean
  accountName?: string
}

export function PlatformConnect() {
  const [platforms, setPlatforms] = useState<PlatformProps[]>([
    {
      name: "Instagram",
      icon: Instagram,
      color: "#E1306C",
      connected: true,
      accountName: "@yourbrand",
    },
    {
      name: "Twitter",
      icon: Twitter,
      color: "#1DA1F2",
      connected: true,
      accountName: "@yourbrand",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      color: "#0077B5",
      connected: false,
    },
    {
      name: "Facebook",
      icon: Facebook,
      color: "#4267B2",
      connected: false,
    },
  ])

  const toggleConnection = (index: number) => {
    const updatedPlatforms = [...platforms]
    updatedPlatforms[index].connected = !updatedPlatforms[index].connected

    // In a real app, this would trigger an OAuth flow or API connection
    if (updatedPlatforms[index].connected) {
      updatedPlatforms[index].accountName = "@yourbrand"
    } else {
      updatedPlatforms[index].accountName = undefined
    }

    setPlatforms(updatedPlatforms)
  }

  return (
    <div className="space-y-6">
      {platforms.map((platform, index) => (
        <Card key={platform.name}>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <platform.icon style={{ color: platform.color }} className="h-6 w-6" />
                <CardTitle>{platform.name}</CardTitle>
              </div>
              <Badge variant={platform.connected ? "default" : "outline"}>
                {platform.connected ? "Connected" : "Not Connected"}
              </Badge>
            </div>
            <CardDescription>
              {platform.connected
                ? `Connected to ${platform.accountName}`
                : `Connect your ${platform.name} account to post content`}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">
              {platform.connected ? (
                <>
                  <div className="flex items-center gap-2 text-sm text-green-600">
                    <Check className="h-4 w-4" />
                    <span>Authentication successful</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor={`auto-publish-${index}`}>Auto-publish</Label>
                      <p className="text-sm text-muted-foreground">Automatically publish scheduled posts</p>
                    </div>
                    <Switch id={`auto-publish-${index}`} defaultChecked />
                  </div>
                  <div className="flex justify-between">
                    <Button variant="outline" size="sm">
                      Reconnect
                    </Button>
                    <Button variant="destructive" size="sm" onClick={() => toggleConnection(index)}>
                      Disconnect
                    </Button>
                  </div>
                </>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm text-amber-600">
                    <AlertCircle className="h-4 w-4" />
                    <span>Authentication required</span>
                  </div>
                  <Button
                    className="w-full"
                    onClick={() => toggleConnection(index)}
                    style={{ backgroundColor: platform.color }}
                  >
                    <Link2 className="mr-2 h-4 w-4" />
                    Connect {platform.name}
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

