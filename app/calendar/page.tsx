"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { PlusCircle, Instagram, Twitter, Linkedin, Facebook, MoreHorizontal, Edit, Trash2 } from "lucide-react"
import Link from "next/link"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

// Sample data for calendar events
const events = [
  {
    id: 1,
    title: "Product Launch Announcement",
    date: new Date(2025, 2, 10), // March 10, 2025
    time: "2:00 PM",
    platforms: ["instagram", "twitter", "linkedin"],
  },
  {
    id: 2,
    title: "Blog Post Promotion",
    date: new Date(2025, 2, 11), // March 11, 2025
    time: "10:00 AM",
    platforms: ["facebook", "linkedin"],
  },
  {
    id: 3,
    title: "Job Opening Announcement",
    date: new Date(2025, 2, 12), // March 12, 2025
    time: "3:30 PM",
    platforms: ["instagram", "linkedin", "facebook"],
  },
  {
    id: 4,
    title: "Weekly Tips & Tricks",
    date: new Date(2025, 2, 14), // March 14, 2025
    time: "11:00 AM",
    platforms: ["twitter", "instagram"],
  },
]

export default function CalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())

  const handleDateSelect = (date: Date | undefined) => {
    setDate(date)
    setSelectedDate(date)
  }

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

  // Filter events for the selected date
  const filteredEvents = events.filter(
    (event) =>
      selectedDate &&
      event.date.getDate() === selectedDate.getDate() &&
      event.date.getMonth() === selectedDate.getMonth() &&
      event.date.getFullYear() === selectedDate.getFullYear(),
  )

  // Function to check if a date has events
  const hasEvents = (day: Date) => {
    return events.some(
      (event) =>
        event.date.getDate() === day.getDate() &&
        event.date.getMonth() === day.getMonth() &&
        event.date.getFullYear() === day.getFullYear(),
    )
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Content Calendar</h1>
            <p className="text-muted-foreground">Schedule and manage your social media content</p>
          </div>
          <Button asChild>
            <Link href="/create">
              <PlusCircle className="mr-2 h-4 w-4" />
              Create Post
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle>Calendar</CardTitle>
              <CardDescription>Select a date to view scheduled posts</CardDescription>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={date}
                onSelect={handleDateSelect}
                className="rounded-md border"
                modifiers={{
                  hasEvents: (date) => hasEvents(date),
                }}
                modifiersClassNames={{
                  hasEvents: "font-bold bg-primary/10 text-primary",
                }}
              />
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>
                {selectedDate ? (
                  <>
                    Posts for{" "}
                    {selectedDate.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                  </>
                ) : (
                  <>Scheduled Posts</>
                )}
              </CardTitle>
              <CardDescription>{filteredEvents.length} posts scheduled for this day</CardDescription>
            </CardHeader>
            <CardContent>
              {filteredEvents.length > 0 ? (
                <div className="space-y-4">
                  {filteredEvents.map((event) => (
                    <div key={event.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex flex-col gap-1">
                        <div className="font-medium">{event.title}</div>
                        <div className="text-sm text-muted-foreground">{event.time}</div>
                        <div className="flex items-center space-x-1 mt-1">
                          {event.platforms.map((platform) => (
                            <div key={platform} className="text-muted-foreground">
                              {getPlatformIcon(platform)}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
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
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <p className="text-muted-foreground mb-4">No posts scheduled for this day</p>
                  <Button asChild>
                    <Link href="/create">
                      <PlusCircle className="mr-2 h-4 w-4" />
                      Create Post
                    </Link>
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

