"use client"

import { Instagram, Twitter, Linkedin, Facebook } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const topPosts = [
  {
    id: 1,
    title: "Excited to announce our new product launch! Stay tuned for more details.",
    platform: "instagram",
    engagement: 2345,
    impressions: 15678,
    date: "Mar 5, 2025",
  },
  {
    id: 2,
    title: "Check out our latest blog post on digital marketing trends for 2025!",
    platform: "linkedin",
    engagement: 1876,
    impressions: 12543,
    date: "Mar 3, 2025",
  },
  {
    id: 3,
    title: "We're hiring! Join our team of passionate marketers and help us grow.",
    platform: "facebook",
    engagement: 1543,
    impressions: 10987,
    date: "Feb 28, 2025",
  },
  {
    id: 4,
    title: "Our CEO will be speaking at the Digital Summit next week. Don't miss it!",
    platform: "twitter",
    engagement: 1234,
    impressions: 8765,
    date: "Feb 25, 2025",
  },
  {
    id: 5,
    title: "Behind the scenes look at our creative process. #BehindTheScenes",
    platform: "instagram",
    engagement: 987,
    impressions: 7654,
    date: "Feb 20, 2025",
  },
]

export function TopPostsTable() {
  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case "instagram":
        return <Instagram className="h-4 w-4 text-[#E1306C]" />
      case "twitter":
        return <Twitter className="h-4 w-4 text-[#1DA1F2]" />
      case "linkedin":
        return <Linkedin className="h-4 w-4 text-[#0077B5]" />
      case "facebook":
        return <Facebook className="h-4 w-4 text-[#4267B2]" />
      default:
        return null
    }
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Post</TableHead>
          <TableHead>Platform</TableHead>
          <TableHead className="text-right">Engagement</TableHead>
          <TableHead className="text-right">Impressions</TableHead>
          <TableHead className="text-right">Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {topPosts.map((post) => (
          <TableRow key={post.id}>
            <TableCell className="font-medium max-w-[300px] truncate">{post.title}</TableCell>
            <TableCell>{getPlatformIcon(post.platform)}</TableCell>
            <TableCell className="text-right">{post.engagement.toLocaleString()}</TableCell>
            <TableCell className="text-right">{post.impressions.toLocaleString()}</TableCell>
            <TableCell className="text-right">{post.date}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

