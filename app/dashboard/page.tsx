"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  ArrowRight,
  Bell,
  BookOpen,
  Calendar,
  ChevronRight,
  Globe,
  Heart,
  LineChart,
  MessageSquare,
  Settings,
  User,
  Users,
} from "lucide-react"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ArticleCard from "@/components/article-card"
import { mockArticles } from "@/lib/mock-data.tsx"

export default function DashboardPage() {
  const [mounted, setMounted] = useState(false)
  const [progress, setProgress] = useState(0)

  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [activitiesRef, activitiesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [recommendedRef, recommendedInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    setMounted(true)

    const timer = setTimeout(() => {
      setProgress(66)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  if (!mounted) return null

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1 py-8">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
              <p className="text-muted-foreground">
                Welcome back, Alex! Track your impact and discover new opportunities.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="h-9">
                <Bell className="mr-2 h-4 w-4" />
                Notifications
              </Button>
              <Button variant="outline" size="sm" className="h-9">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Button>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
            <Card className="neumorphic animate-scale-in">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Impact Score</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold">752</div>
                  <div className="flex items-center text-sm text-green-500">
                    <LineChart className="mr-1 h-4 w-4" />
                    +12%
                  </div>
                </div>
                <Progress value={progress} className="mt-2 h-2" />
                <p className="mt-2 text-xs text-muted-foreground">66% towards your next milestone</p>
              </CardContent>
            </Card>

            <Card className="neumorphic animate-scale-in" style={{ animationDelay: "0.1s" }}>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Articles Read</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold">24</div>
                  <div className="flex items-center text-sm text-green-500">
                    <BookOpen className="mr-1 h-4 w-4" />3 this week
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <Button variant="outline" size="sm" className="h-8 text-xs">
                    Reading List
                  </Button>
                  <Button variant="outline" size="sm" className="h-8 text-xs">
                    History
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="neumorphic animate-scale-in" style={{ animationDelay: "0.2s" }}>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Contributions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold">7</div>
                  <div className="flex items-center text-sm text-green-500">
                    <Heart className="mr-1 h-4 w-4" />2 this month
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <Button variant="outline" size="sm" className="h-8 text-xs">
                    Donations
                  </Button>
                  <Button variant="outline" size="sm" className="h-8 text-xs">
                    Volunteer
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="neumorphic animate-scale-in" style={{ animationDelay: "0.3s" }}>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Community</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold">142</div>
                  <div className="flex items-center text-sm text-green-500">
                    <Users className="mr-1 h-4 w-4" />
                    +5 new
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <Button variant="outline" size="sm" className="h-8 text-xs">
                    Connections
                  </Button>
                  <Button variant="outline" size="sm" className="h-8 text-xs">
                    Messages
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4 mb-8">
            <Card className="md:col-span-2 lg:col-span-3">
              <CardHeader>
                <CardTitle>Your SDG Focus Areas</CardTitle>
                <CardDescription>Track your engagement with the Sustainable Development Goals</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-4 w-4 rounded-full bg-sdg-4"></div>
                        <span className="text-sm font-medium">SDG 4: Quality Education</span>
                      </div>
                      <span className="text-sm text-muted-foreground">85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-4 w-4 rounded-full bg-sdg-13"></div>
                        <span className="text-sm font-medium">SDG 13: Climate Action</span>
                      </div>
                      <span className="text-sm text-muted-foreground">72%</span>
                    </div>
                    <Progress value={72} className="h-2" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-4 w-4 rounded-full bg-sdg-5"></div>
                        <span className="text-sm font-medium">SDG 5: Gender Equality</span>
                      </div>
                      <span className="text-sm text-muted-foreground">64%</span>
                    </div>
                    <Progress value={64} className="h-2" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-4 w-4 rounded-full bg-sdg-6"></div>
                        <span className="text-sm font-medium">SDG 6: Clean Water</span>
                      </div>
                      <span className="text-sm text-muted-foreground">48%</span>
                    </div>
                    <Progress value={48} className="h-2" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-4 w-4 rounded-full bg-sdg-11"></div>
                        <span className="text-sm font-medium">SDG 11: Sustainable Cities</span>
                      </div>
                      <span className="text-sm text-muted-foreground">35%</span>
                    </div>
                    <Progress value={35} className="h-2" />
                  </div>
                </div>

                <div className="mt-6">
                  <Button variant="outline" className="w-full">
                    View All SDGs
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
                <CardDescription>Events you've registered for</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Calendar className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Climate Action Workshop</h4>
                      <p className="text-xs text-muted-foreground">May 22, 2023 • 2:00 PM</p>
                      <Button variant="link" className="h-auto p-0 text-xs" asChild>
                        <Link href="#">View details</Link>
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Globe className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">SDG Forum 2023</h4>
                      <p className="text-xs text-muted-foreground">June 5, 2023 • 10:00 AM</p>
                      <Button variant="link" className="h-auto p-0 text-xs" asChild>
                        <Link href="#">View details</Link>
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Users className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Community Meetup</h4>
                      <p className="text-xs text-muted-foreground">June 15, 2023 • 6:30 PM</p>
                      <Button variant="link" className="h-auto p-0 text-xs" asChild>
                        <Link href="#">View details</Link>
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <Button variant="outline" className="w-full">
                    View Calendar
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div
            ref={recommendedRef}
            className={`mb-8 transition-opacity duration-1000 ${recommendedInView ? "opacity-100" : "opacity-0"}`}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold tracking-tight">Recommended for You</h2>
              <Button variant="ghost" size="sm" className="gap-1">
                View all
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            <Tabs defaultValue="articles">
              <TabsList className="mb-6">
                <TabsTrigger value="articles">Articles</TabsTrigger>
                <TabsTrigger value="events">Events</TabsTrigger>
                <TabsTrigger value="opportunities">Opportunities</TabsTrigger>
              </TabsList>

              <TabsContent value="articles" className="space-y-8">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {mockArticles.slice(0, 3).map((article, index) => (
                    <div key={article.id} className={`animate-slide-up`} style={{ animationDelay: `${index * 0.1}s` }}>
                      <ArticleCard article={article} />
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="events" className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Calendar className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold">Global Youth Summit 2023</h3>
                        <p className="text-sm text-muted-foreground mb-2">June 20-22, 2023 • Virtual Event</p>
                        <p className="text-sm mb-4">
                          Join young leaders from around the world to discuss innovative solutions to global challenges.
                        </p>
                        <Button size="sm">Register Now</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Users className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold">Sustainable Innovation Conference</h3>
                        <p className="text-sm text-muted-foreground mb-2">July 15, 2023 • New York, NY</p>
                        <p className="text-sm mb-4">
                          Explore cutting-edge solutions for sustainable development and network with industry leaders.
                        </p>
                        <Button size="sm">Register Now</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="opportunities" className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Heart className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold">Volunteer: Clean Water Initiative</h3>
                        <p className="text-sm text-muted-foreground mb-2">Remote • 5-10 hours/week</p>
                        <p className="text-sm mb-4">
                          Help coordinate our clean water projects in East Africa through remote volunteer work.
                        </p>
                        <Button size="sm">Apply Now</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <MessageSquare className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold">Youth Ambassador Program</h3>
                        <p className="text-sm text-muted-foreground mb-2">Global • 6-month commitment</p>
                        <p className="text-sm mb-4">
                          Represent Shared Voices in your community and help spread awareness about the SDGs.
                        </p>
                        <Button size="sm">Apply Now</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          <div
            ref={activitiesRef}
            className={`mb-8 transition-opacity duration-1000 ${activitiesInView ? "opacity-100" : "opacity-0"}`}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold tracking-tight">Recent Activity</h2>
              <Button variant="ghost" size="sm" className="gap-1">
                View all
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            <Card>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="flex items-start gap-4 animate-slide-up">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <BookOpen className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-medium">You read an article</h4>
                        <span className="text-xs text-muted-foreground">2 hours ago</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        "Youth-Led Climate Action: Generation Z Takes the Lead"
                      </p>
                      <Button variant="link" className="h-auto p-0 text-xs" asChild>
                        <Link href="#">View article</Link>
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 animate-slide-up" style={{ animationDelay: "0.1s" }}>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Heart className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-medium">You donated to a cause</h4>
                        <span className="text-xs text-muted-foreground">Yesterday</span>
                      </div>
                      <p className="text-sm text-muted-foreground">$25 to Clean Water Initiative</p>
                      <Button variant="link" className="h-auto p-0 text-xs" asChild>
                        <Link href="#">View receipt</Link>
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Calendar className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-medium">You registered for an event</h4>
                        <span className="text-xs text-muted-foreground">2 days ago</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Climate Action Workshop on May 22, 2023</p>
                      <Button variant="link" className="h-auto p-0 text-xs" asChild>
                        <Link href="#">View event</Link>
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <User className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-medium">You updated your profile</h4>
                        <span className="text-xs text-muted-foreground">3 days ago</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Added new skills and interests</p>
                      <Button variant="link" className="h-auto p-0 text-xs" asChild>
                        <Link href="#">View profile</Link>
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 animate-slide-up" style={{ animationDelay: "0.4s" }}>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <MessageSquare className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-medium">You commented on an article</h4>
                        <span className="text-xs text-muted-foreground">5 days ago</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        "Digital Education Bridges the Gap in Remote Communities"
                      </p>
                      <Button variant="link" className="h-auto p-0 text-xs" asChild>
                        <Link href="#">View comment</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div
            ref={statsRef}
            className={`transition-opacity duration-1000 ${statsInView ? "opacity-100" : "opacity-0"}`}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold tracking-tight">Your Impact</h2>
              <Button variant="ghost" size="sm" className="gap-1">
                View details
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Impact Timeline</CardTitle>
                  <CardDescription>Your contribution to the SDGs over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[200px] w-full flex items-center justify-center bg-muted/50 rounded-md">
                    <p className="text-muted-foreground text-sm">Impact chart visualization</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Community Comparison</CardTitle>
                  <CardDescription>How your impact compares to the community average</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Articles Read</span>
                        <span className="text-sm text-muted-foreground">24 vs. 18 avg</span>
                      </div>
                      <div className="relative h-2 w-full rounded-full bg-muted">
                        <div className="absolute h-full w-[75%] rounded-full bg-primary"></div>
                        <div className="absolute h-full w-[60%] rounded-full border-r-2 border-black/50 dark:border-white/50"></div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Events Attended</span>
                        <span className="text-sm text-muted-foreground">5 vs. 3 avg</span>
                      </div>
                      <div className="relative h-2 w-full rounded-full bg-muted">
                        <div className="absolute h-full w-[80%] rounded-full bg-primary"></div>
                        <div className="absolute h-full w-[50%] rounded-full border-r-2 border-black/50 dark:border-white/50"></div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Donations</span>
                        <span className="text-sm text-muted-foreground">$75 vs. $50 avg</span>
                      </div>
                      <div className="relative h-2 w-full rounded-full bg-muted">
                        <div className="absolute h-full w-[70%] rounded-full bg-primary"></div>
                        <div className="absolute h-full w-[45%] rounded-full border-r-2 border-black/50 dark:border-white/50"></div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Volunteer Hours</span>
                        <span className="text-sm text-muted-foreground">12 vs. 15 avg</span>
                      </div>
                      <div className="relative h-2 w-full rounded-full bg-muted">
                        <div className="absolute h-full w-[40%] rounded-full bg-primary"></div>
                        <div className="absolute h-full w-[50%] rounded-full border-r-2 border-black/50 dark:border-white/50"></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
