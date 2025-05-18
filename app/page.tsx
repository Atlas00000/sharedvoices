"use client"

import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowRight,
  ChevronRight,
  Globe,
  Heart,
  Lightbulb,
  Leaf,
  Droplets,
  Users,
  Building,
  Sun,
  Wind,
  Briefcase,
  Scale,
  Home,
  Recycle,
  CloudRain,
  Fish,
  TreePine,
  Shield,
  Handshake,
} from "lucide-react"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ArticleCard from "@/components/article-card"
import FeaturedArticleCard from "@/components/featured-article-card"
import StatsCard from "@/components/stats-card"
import ParallaxHero from "@/components/parallax-hero"
import { mockArticles, mockFeaturedArticles, mockStats } from "@/lib/mock-data.tsx"

export default function HomePage() {
  const [mounted, setMounted] = useState(false)

  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [featuredRef, featuredInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [sdgRef, sdgInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [newsletterRef, newsletterInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const sdgIcons = [
    { icon: <Globe className="h-8 w-8" />, color: "bg-sdg-1", title: "No Poverty" },
    { icon: <Heart className="h-8 w-8" />, color: "bg-sdg-2", title: "Zero Hunger" },
    { icon: <Lightbulb className="h-8 w-8" />, color: "bg-sdg-3", title: "Good Health" },
    { icon: <Leaf className="h-8 w-8" />, color: "bg-sdg-4", title: "Quality Education" },
    { icon: <Droplets className="h-8 w-8" />, color: "bg-sdg-5", title: "Gender Equality" },
    { icon: <Users className="h-8 w-8" />, color: "bg-sdg-6", title: "Clean Water" },
    { icon: <Building className="h-8 w-8" />, color: "bg-sdg-7", title: "Clean Energy" },
    { icon: <Sun className="h-8 w-8" />, color: "bg-sdg-8", title: "Economic Growth" },
    { icon: <Wind className="h-8 w-8" />, color: "bg-sdg-9", title: "Industry & Innovation" },
    { icon: <Briefcase className="h-8 w-8" />, color: "bg-sdg-10", title: "Reduced Inequalities" },
    { icon: <Scale className="h-8 w-8" />, color: "bg-sdg-11", title: "Sustainable Cities" },
    { icon: <Home className="h-8 w-8" />, color: "bg-sdg-12", title: "Responsible Consumption" },
    { icon: <Recycle className="h-8 w-8" />, color: "bg-sdg-13", title: "Climate Action" },
    { icon: <CloudRain className="h-8 w-8" />, color: "bg-sdg-14", title: "Life Below Water" },
    { icon: <Fish className="h-8 w-8" />, color: "bg-sdg-15", title: "Life On Land" },
    { icon: <TreePine className="h-8 w-8" />, color: "bg-sdg-16", title: "Peace & Justice" },
    { icon: <Shield className="h-8 w-8" />, color: "bg-sdg-17", title: "Partnerships" },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <div ref={heroRef}>
          <ParallaxHero />
        </div>

        <section
          ref={featuredRef}
          className={`py-16 md:py-24 transition-opacity duration-1000 ${featuredInView ? "opacity-100" : "opacity-0"}`}
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary animate-fade-in">
                Featured Stories
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl animate-slide-up">
                Voices That Inspire Change
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed animate-fade-in">
                Discover stories of impact, innovation, and inspiration from around the world.
              </p>
            </div>

            <Tabs defaultValue="featured" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid w-full max-w-md grid-cols-3">
                  <TabsTrigger value="featured">Featured</TabsTrigger>
                  <TabsTrigger value="latest">Latest</TabsTrigger>
                  <TabsTrigger value="trending">Trending</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="featured" className="space-y-8">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {mockFeaturedArticles.map((article, index) => (
                    <div key={article.id} className={`animate-slide-up`} style={{ animationDelay: `${index * 0.1}s` }}>
                      <FeaturedArticleCard article={article} />
                    </div>
                  ))}
                </div>
                <div className="flex justify-center">
                  <Button variant="outline" className="group">
                    View all stories
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="latest" className="space-y-8">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {mockArticles.slice(0, 6).map((article, index) => (
                    <div key={article.id} className={`animate-slide-up`} style={{ animationDelay: `${index * 0.1}s` }}>
                      <ArticleCard article={article} />
                    </div>
                  ))}
                </div>
                <div className="flex justify-center">
                  <Button variant="outline" className="group">
                    View all stories
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="trending" className="space-y-8">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {mockArticles.slice(6, 12).map((article, index) => (
                    <div key={article.id} className={`animate-slide-up`} style={{ animationDelay: `${index * 0.1}s` }}>
                      <ArticleCard article={article} />
                    </div>
                  ))}
                </div>
                <div className="flex justify-center">
                  <Button variant="outline" className="group">
                    View all stories
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section
          ref={sdgRef}
          className={`py-16 md:py-24 bg-muted transition-opacity duration-1000 ${sdgInView ? "opacity-100" : "opacity-0"}`}
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary animate-fade-in">
                Sustainable Development Goals
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl animate-slide-up">
                17 Goals to Transform Our World
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed animate-fade-in">
                The Sustainable Development Goals are a universal call to action to end poverty, protect the planet, and
                ensure prosperity for all.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {sdgIcons.map((sdg, index) => (
                <div
                  key={index}
                  className={`sdg-card ${sdg.color} text-white p-4 flex flex-col items-center justify-center text-center min-h-[120px] animate-scale-in`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {sdg.icon}
                  <span className="mt-2 text-sm font-medium">{sdg.title}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <Button className="group">
                Explore the Goals
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </section>

        <section
          ref={statsRef}
          className={`py-16 md:py-24 transition-opacity duration-1000 ${statsInView ? "opacity-100" : "opacity-0"}`}
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary animate-fade-in">
                Our Impact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl animate-slide-up">
                Making a Difference Together
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed animate-fade-in">
                Through collective action and shared voices, we're creating meaningful change around the world.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {mockStats.map((stat, index) => (
                <div key={index} className="animate-bounce-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <StatsCard stat={stat} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          ref={newsletterRef}
          className={`py-16 md:py-24 bg-primary text-primary-foreground transition-opacity duration-1000 ${newsletterInView ? "opacity-100" : "opacity-0"}`}
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 items-center">
              <div className="flex flex-col justify-center space-y-4 animate-slide-in-left">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Join Our Community</h2>
                <p className="max-w-[600px] md:text-xl/relaxed opacity-90">
                  Subscribe to our newsletter to receive updates on the latest stories, events, and opportunities to
                  make a difference.
                </p>
              </div>
              <div className="flex flex-col space-y-4 animate-slide-in-right">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  />
                  <Button variant="secondary" className="shrink-0">
                    Subscribe
                  </Button>
                </div>
                <p className="text-sm opacity-80">
                  By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Get Involved</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Take Action Today</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                There are many ways to contribute to a more sustainable, innovative, and peaceful world.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-md transition-all hover:shadow-lg">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Handshake className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Volunteer</h3>
                <p className="mb-4 text-muted-foreground">
                  Join our global network of volunteers making a difference in communities around the world.
                </p>
                <Link href="#" className="inline-flex items-center text-primary hover:underline">
                  Learn more
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
                <div className="absolute inset-0 rounded-lg bg-primary/5 opacity-0 transition-opacity group-hover:opacity-100" />
              </div>

              <div className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-md transition-all hover:shadow-lg">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Heart className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Donate</h3>
                <p className="mb-4 text-muted-foreground">
                  Support our initiatives with a one-time or recurring donation to help fund critical projects.
                </p>
                <Link href="#" className="inline-flex items-center text-primary hover:underline">
                  Learn more
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
                <div className="absolute inset-0 rounded-lg bg-primary/5 opacity-0 transition-opacity group-hover:opacity-100" />
              </div>

              <div className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-md transition-all hover:shadow-lg">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Users className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Partner</h3>
                <p className="mb-4 text-muted-foreground">
                  Collaborate with us to create innovative solutions to global challenges through partnerships.
                </p>
                <Link href="#" className="inline-flex items-center text-primary hover:underline">
                  Learn more
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
                <div className="absolute inset-0 rounded-lg bg-primary/5 opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
