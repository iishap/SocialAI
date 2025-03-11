"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { CalendarIcon, Instagram, Twitter, Linkedin, Facebook, Upload, X, Sparkles, Loader2 } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CreatePostPage() {
  const [date, setDate] = useState<Date>()
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(["instagram", "twitter"])
  const [content, setContent] = useState("")
  const [images, setImages] = useState<string[]>([])
  const [hashtags, setHashtags] = useState<string[]>([])
  const [isGenerating, setIsGenerating] = useState(false)
  const [isOptimizing, setIsOptimizing] = useState(false)
  const [useAiScheduling, setUseAiScheduling] = useState(true)

  const togglePlatform = (platform: string) => {
    if (selectedPlatforms.includes(platform)) {
      setSelectedPlatforms(selectedPlatforms.filter((p) => p !== platform))
    } else {
      setSelectedPlatforms([...selectedPlatforms, platform])
    }
  }

  const addImage = () => {
    // In a real app, this would open a file picker
    const newImage = `/placeholder.svg?height=300&width=400&text=Image ${images.length + 1}`
    setImages([...images, newImage])
  }

  const removeImage = (index: number) => {
    const newImages = [...images]
    newImages.splice(index, 1)
    setImages(newImages)
  }

  const generateHashtags = async () => {
    if (!content) return

    setIsGenerating(true)

    try {
      // Simulate AI generating hashtags
      // In a real app, this would use the AI SDK
      setTimeout(() => {
        const generatedHashtags = ["SocialMedia", "ContentCreation", "DigitalMarketing", "Growth", "Engagement"]
        setHashtags(generatedHashtags)
        setIsGenerating(false)
      }, 1500)
    } catch (error) {
      console.error("Error generating hashtags:", error)
      setIsGenerating(false)
    }
  }

  const optimizeForPlatforms = async () => {
    if (!content || selectedPlatforms.length === 0) return

    setIsOptimizing(true)

    try {
      // Simulate AI optimizing content for platforms
      // In a real app, this would use the AI SDK to optimize for each platform
      setTimeout(() => {
        // Just a simulation - in reality, this would return platform-specific content
        setContent(content + "\n\nOptimized for " + selectedPlatforms.join(", "))
        setIsOptimizing(false)
      }, 2000)
    } catch (error) {
      console.error("Error optimizing content:", error)
      setIsOptimizing(false)
    }
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Create Post</h1>
          <p className="text-muted-foreground">Create and schedule your social media content</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Content</CardTitle>
                <CardDescription>Write your post content or use AI to generate it</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea
                  placeholder="What's on your mind?"
                  className="min-h-[150px]"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />

                <div className="flex flex-wrap gap-2">
                  {hashtags.map((tag, index) => (
                    <Badge key={index} variant="secondary">
                      #{tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm" onClick={generateHashtags} disabled={!content || isGenerating}>
                    {isGenerating ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Generating...
                      </>
                    ) : (
                      <>
                        <Sparkles className="mr-2 h-4 w-4" />
                        Generate Hashtags
                      </>
                    )}
                  </Button>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={optimizeForPlatforms}
                    disabled={!content || selectedPlatforms.length === 0 || isOptimizing}
                  >
                    {isOptimizing ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Optimizing...
                      </>
                    ) : (
                      <>
                        <Sparkles className="mr-2 h-4 w-4" />
                        Optimize for Platforms
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Media</CardTitle>
                <CardDescription>Add images or videos to your post</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {images.map((image, index) => (
                    <div key={index} className="relative group">
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`Upload ${index + 1}`}
                        className="w-full h-32 object-cover rounded-md"
                      />
                      <Button
                        variant="destructive"
                        size="icon"
                        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => removeImage(index)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}

                  <Button
                    variant="outline"
                    className="h-32 border-dashed flex flex-col items-center justify-center gap-2"
                    onClick={addImage}
                  >
                    <Upload className="h-6 w-6" />
                    <span>Upload</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Platforms</CardTitle>
                <CardDescription>Select platforms to post to</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Switch
                    id="instagram"
                    checked={selectedPlatforms.includes("instagram")}
                    onCheckedChange={() => togglePlatform("instagram")}
                  />
                  <Label htmlFor="instagram" className="flex items-center gap-2">
                    <Instagram className="h-4 w-4" /> Instagram
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Switch
                    id="twitter"
                    checked={selectedPlatforms.includes("twitter")}
                    onCheckedChange={() => togglePlatform("twitter")}
                  />
                  <Label htmlFor="twitter" className="flex items-center gap-2">
                    <Twitter className="h-4 w-4" /> Twitter
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Switch
                    id="linkedin"
                    checked={selectedPlatforms.includes("linkedin")}
                    onCheckedChange={() => togglePlatform("linkedin")}
                  />
                  <Label htmlFor="linkedin" className="flex items-center gap-2">
                    <Linkedin className="h-4 w-4" /> LinkedIn
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Switch
                    id="facebook"
                    checked={selectedPlatforms.includes("facebook")}
                    onCheckedChange={() => togglePlatform("facebook")}
                  />
                  <Label htmlFor="facebook" className="flex items-center gap-2">
                    <Facebook className="h-4 w-4" /> Facebook
                  </Label>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Scheduling</CardTitle>
                <CardDescription>Set when to publish your post</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Switch id="ai-scheduling" checked={useAiScheduling} onCheckedChange={setUseAiScheduling} />
                  <Label htmlFor="ai-scheduling" className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4" /> AI Scheduling
                  </Label>
                </div>

                {useAiScheduling ? (
                  <div className="rounded-md bg-muted p-3">
                    <p className="text-sm">
                      AI will determine the best time to post based on your audience's activity patterns.
                    </p>
                    <p className="text-sm font-medium mt-2">Recommended: Tomorrow at 2:00 PM</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="grid gap-2">
                      <Label htmlFor="date">Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            id="date"
                            variant={"outline"}
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !date && "text-muted-foreground",
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : "Pick a date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="time">Time</Label>
                      <div className="flex items-center gap-2">
                        <Select defaultValue="14">
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Hour" />
                          </SelectTrigger>
                          <SelectContent>
                            {Array.from({ length: 24 }).map((_, i) => (
                              <SelectItem key={i} value={i.toString()}>
                                {i.toString().padStart(2, "0")}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <span>:</span>
                        <Select defaultValue="00">
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Minute" />
                          </SelectTrigger>
                          <SelectContent>
                            {["00", "15", "30", "45"].map((minute) => (
                              <SelectItem key={minute} value={minute}>
                                {minute}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            <div className="flex gap-2">
              <Button className="flex-1">Schedule Post</Button>
              <Button variant="outline">Save as Draft</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

