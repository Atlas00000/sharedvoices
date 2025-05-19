"use client"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, FileText, Settings, User, BookOpen, AlertCircle, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export default function AdminPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [filter, setFilter] = useState("")

  if (status === "loading") {
    return <div>Loading...</div>
  }

  if (!session) {
    router.push("/login")
    return null
  }

  if (session.user.role !== "ADMIN") {
    router.push("/")
    return null
  }

  const handleExportCSV = () => {
    // Placeholder for CSV export functionality
    console.log("Exporting CSV...")
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-muted-foreground">Logged in as: {session.user.name}</span>
        </div>
      </div>
      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="stories">Stories</TabsTrigger>
          <TabsTrigger value="logs">Logs</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">0</div>
                <p className="text-xs text-muted-foreground">+0% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Stories</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">0</div>
                <p className="text-xs text-muted-foreground">+0% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Users</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">0</div>
                <p className="text-xs text-muted-foreground">+0% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Reports</CardTitle>
                <AlertCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">0</div>
                <p className="text-xs text-muted-foreground">+0% from last month</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="users">
          <Card>
            <CardHeader>
              <CardTitle>User Management</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between mb-4">
                <Input
                  type="text"
                  placeholder="Filter users..."
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                />
                <Button onClick={handleExportCSV}>Export CSV</Button>
              </div>
              <p>User management features coming soon.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="stories">
          <Card>
            <CardHeader>
              <CardTitle>Story Management</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Story management features coming soon.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="logs">
          <Card>
            <CardHeader>
              <CardTitle>Logs</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Logs features coming soon.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle>Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Settings features coming soon.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
} 