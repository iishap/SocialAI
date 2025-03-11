import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { MoreHorizontal, UserPlus, Mail, Edit, Trash2, Shield, User } from "lucide-react"

// Sample team members data
const teamMembers = [
  {
    id: 1,
    name: "Jane Doe",
    email: "jane.doe@example.com",
    role: "Admin",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "JD",
    status: "active",
  },
  {
    id: 2,
    name: "John Smith",
    email: "john.smith@example.com",
    role: "Editor",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "JS",
    status: "active",
  },
  {
    id: 3,
    name: "Emily Johnson",
    email: "emily.johnson@example.com",
    role: "Viewer",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "EJ",
    status: "active",
  },
  {
    id: 4,
    name: "Michael Brown",
    email: "michael.brown@example.com",
    role: "Editor",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "MB",
    status: "pending",
  },
]

export default function TeamPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Team Members</h1>
            <p className="text-muted-foreground">Manage your team and their permissions</p>
          </div>
          <Button>
            <UserPlus className="mr-2 h-4 w-4" />
            Invite Team Member
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Team Members</CardTitle>
            <CardDescription>Manage team members and their roles</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>User</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {teamMembers.map((member) => (
                  <TableRow key={member.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={member.avatar} />
                          <AvatarFallback>{member.initials}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{member.name}</p>
                          <p className="text-sm text-muted-foreground">{member.email}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={member.role === "Admin" ? "default" : "secondary"}>{member.role}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant={member.status === "active" ? "outline" : "secondary"}>
                        {member.status === "active" ? "Active" : "Pending"}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Actions</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Edit className="mr-2 h-4 w-4" />
                            <span>Edit</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Mail className="mr-2 h-4 w-4" />
                            <span>Resend Invite</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">
                            <Trash2 className="mr-2 h-4 w-4" />
                            <span>Remove</span>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Invite New Team Member</CardTitle>
            <CardDescription>Send an invitation to join your team</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="colleague@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="role">Role</Label>
              <select
                id="role"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="admin">Admin</option>
                <option value="editor">Editor</option>
                <option value="viewer">Viewer</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Personal Message (Optional)</Label>
              <Input id="message" placeholder="Join our team to collaborate on social media content" />
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button>Send Invitation</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Role Permissions</CardTitle>
            <CardDescription>Understand the different permission levels</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-medium">Admin</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Full access to all features. Can manage team members, billing, and account settings. Can create, edit,
                and publish content across all platforms.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Edit className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-medium">Editor</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Can create, edit, and publish content. Has access to analytics and reporting. Cannot manage team members
                or billing settings.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-medium">Viewer</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Read-only access to content and analytics. Cannot create, edit, or publish content. Cannot access team
                or billing settings.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

