"use client"

import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, ArrowRight, PenSquare } from "lucide-react"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ArticleCard from "@/components/article-card"
import FeaturedArticleCard from "@/components/featured-article-card"
import FeaturedStoryHero from "@/components/featured-story-hero"
import { mockArticles, mockFeaturedArticles } from "@/lib/mock-data.tsx"

export default function StoriesPage() {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [featuredRef, featuredInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [latestRef, latestInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [categoriesRef, categoriesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const categories = [
    "SDG 1: No Poverty",
    "SDG 2: Zero Hunger",
    "SDG 3: Good Health",
    "SDG 4: Quality Education",
    "SDG 5: Gender Equality",
    "SDG 6: Clean Water",
    "SDG 7: Clean Energy",
    "SDG 8: Economic Growth",
    "SDG 9: Industry & Innovation",
    "SDG 10: Reduced Inequalities",
    "SDG 11: Sustainable Cities",
    "SDG 12: Responsible Consumption",
    "SDG 13: Climate Action",
    "SDG 14: Life Below Water",
    "SDG 15: Life On Land",
    "SDG 16: Peace & Justice",
    "SDG 17: Partnerships",
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <div ref={heroRef} className={`transition-opacity duration-1000 ${heroInView ? "opacity-100" : "opacity-0"}`}>
          <FeaturedStoryHero article={mockFeaturedArticles[0]} />
        </div>

        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-2">Stories</h1>
                <p className="text-muted-foreground">
                  Discover inspiring narratives of change, innovation, and impact from around the world.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  onClick={() => router.push("/stories/editor")}
                  className="gap-2"
                >
                  <PenSquare className="h-4 w-4" />
                  Submit Your Story
                </Button>
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Search stories..." className="w-[200px] pl-8 md:w-[260px]" />
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  aria-label="Filter stories"
                >
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {isFilterOpen && (
              <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 animate-fade-in">
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Category</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="All categories" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All categories</SelectItem>
                      {categories.map((category, index) => (
                        <SelectItem key={index} value={category.toLowerCase().replace(/\s+/g, "-")}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-1.5 block">Date</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Any time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any time</SelectItem>
                      <SelectItem value="today">Today</SelectItem>
                      <SelectItem value="this-week">This week</SelectItem>
                      <SelectItem value="this-month">This month</SelectItem>
                      <SelectItem value="this-year">This year</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-1.5 block">Region</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="All regions" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All regions</SelectItem>
                      <SelectItem value="africa">Africa</SelectItem>
                      <SelectItem value="asia">Asia</SelectItem>
                      <SelectItem value="europe">Europe</SelectItem>
                      <SelectItem value="north-america">North America</SelectItem>
                      <SelectItem value="south-america">South America</SelectItem>
                      <SelectItem value="oceania">Oceania</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-1.5 block">Sort by</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Most recent" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="recent">Most recent</SelectItem>
                      <SelectItem value="popular">Most popular</SelectItem>
                      <SelectItem value="impact">Highest impact</SelectItem>
                      <SelectItem value="alphabetical">Alphabetical</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            <div
              ref={categoriesRef}
              className={`mb-8 transition-opacity duration-1000 ${categoriesInView ? "opacity-100" : "opacity-0"}`}
            >
              <div className="flex flex-wrap gap-2">
                <Badge
                  variant="outline"
                  className="rounded-full px-3 py-1 hover:bg-primary hover:text-primary-foreground cursor-pointer transition-colors"
                >
                  All
                </Badge>
                <Badge
                  variant="outline"
                  className="rounded-full px-3 py-1 hover:bg-primary hover:text-primary-foreground cursor-pointer transition-colors"
                >
                  Climate Action
                </Badge>
                <Badge
                  variant="outline"
                  className="rounded-full px-3 py-1 hover:bg-primary hover:text-primary-foreground cursor-pointer transition-colors"
                >
                  Education
                </Badge>
                <Badge
                  variant="outline"
                  className="rounded-full px-3 py-1 hover:bg-primary hover:text-primary-foreground cursor-pointer transition-colors"
                >
                  Gender Equality
                </Badge>
                <Badge
                  variant="outline"
                  className="rounded-full px-3 py-1 hover:bg-primary hover:text-primary-foreground cursor-pointer transition-colors"
                >
                  Clean Water
                </Badge>
                <Badge
                  variant="outline"
                  className="rounded-full px-3 py-1 hover:bg-primary hover:text-primary-foreground cursor-pointer transition-colors"
                >
                  Innovation
                </Badge>
                <Badge
                  variant="outline"
                  className="rounded-full px-3 py-1 hover:bg-primary hover:text-primary-foreground cursor-pointer transition-colors"
                >
                  Sustainable Cities
                </Badge>
                <Badge
                  variant="outline"
                  className="rounded-full px-3 py-1 hover:bg-primary hover:text-primary-foreground cursor-pointer transition-colors"
                >
                  Peace & Justice
                </Badge>
              </div>
            </div>

            <div
              ref={featuredRef}
              className={`mb-12 transition-opacity duration-1000 ${featuredInView ? "opacity-100" : "opacity-0"}`}
            >
              <h2 className="text-2xl font-bold tracking-tight mb-6">Featured Stories</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {mockFeaturedArticles.map((article, index) => (
                  <div key={article.id} className={`animate-slide-up`} style={{ animationDelay: `${index * 0.1}s` }}>
                    <FeaturedArticleCard article={article} />
                  </div>
                ))}
              </div>
            </div>

            <div
              ref={latestRef}
              className={`transition-opacity duration-1000 ${latestInView ? "opacity-100" : "opacity-0"}`}
            >
              <Tabs defaultValue="all" className="w-full">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold tracking-tight">All Stories</h2>
                  <TabsList>
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="popular">Popular</TabsTrigger>
                    <TabsTrigger value="recent">Recent</TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="all" className="space-y-8">
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {mockArticles.map((article, index) => (
                      <div
                        key={article.id}
                        className={`animate-slide-up`}
                        style={{ animationDelay: `${index * 0.05}s` }}
                      >
                        <ArticleCard article={article} />
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-center">
                    <Button className="group">
                      Load more stories
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="popular" className="space-y-8">
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {mockArticles.slice(3, 12).map((article, index) => (
                      <div
                        key={article.id}
                        className={`animate-slide-up`}
                        style={{ animationDelay: `${index * 0.05}s` }}
                      >
                        <ArticleCard article={article} />
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-center">
                    <Button className="group">
                      Load more stories
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="recent" className="space-y-8">
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {mockArticles.slice(6, 15).map((article, index) => (
                      <div
                        key={article.id}
                        className={`animate-slide-up`}
                        style={{ animationDelay: `${index * 0.05}s` }}
                      >
                        <ArticleCard article={article} />
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-center">
                    <Button className="group">
                      Load more stories
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                Join the Conversation
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Share Your Story</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Have a story of impact or innovation to share? We want to hear from you and amplify your voice.
              </p>
              <Button 
                size="lg" 
                className="mt-4"
                onClick={() => router.push("/stories/editor")}
              >
                Submit Your Story
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
