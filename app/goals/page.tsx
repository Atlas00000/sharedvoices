"use client"

import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
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
  ArrowRight,
  ChevronRight,
} from "lucide-react"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ArticleCard from "@/components/article-card"
import { mockArticles } from "@/lib/mock-data.tsx"

export default function GoalsPage() {
  const [mounted, setMounted] = useState(false)
  const [activeGoal, setActiveGoal] = useState(0)
  const [progressValues, setProgressValues] = useState<number[]>(Array(17).fill(0))

  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [goalsRef, goalsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [detailsRef, detailsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [storiesRef, storiesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    setMounted(true)

    // Animate progress bars when in view
    if (detailsInView) {
      const timer = setTimeout(() => {
        setProgressValues([67, 42, 58, 75, 53, 39, 61, 48, 70, 45, 52, 38, 65, 41, 57, 49, 72])
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [detailsInView])

  if (!mounted) return null

  const sdgIcons = [
    { icon: <Globe className="h-8 w-8" />, color: "bg-sdg-1", title: "No Poverty", number: 1 },
    { icon: <Heart className="h-8 w-8" />, color: "bg-sdg-2", title: "Zero Hunger", number: 2 },
    { icon: <Lightbulb className="h-8 w-8" />, color: "bg-sdg-3", title: "Good Health", number: 3 },
    { icon: <Leaf className="h-8 w-8" />, color: "bg-sdg-4", title: "Quality Education", number: 4 },
    { icon: <Droplets className="h-8 w-8" />, color: "bg-sdg-5", title: "Gender Equality", number: 5 },
    { icon: <Users className="h-8 w-8" />, color: "bg-sdg-6", title: "Clean Water", number: 6 },
    { icon: <Building className="h-8 w-8" />, color: "bg-sdg-7", title: "Clean Energy", number: 7 },
    { icon: <Sun className="h-8 w-8" />, color: "bg-sdg-8", title: "Economic Growth", number: 8 },
    { icon: <Wind className="h-8 w-8" />, color: "bg-sdg-9", title: "Industry & Innovation", number: 9 },
    { icon: <Briefcase className="h-8 w-8" />, color: "bg-sdg-10", title: "Reduced Inequalities", number: 10 },
    { icon: <Scale className="h-8 w-8" />, color: "bg-sdg-11", title: "Sustainable Cities", number: 11 },
    { icon: <Home className="h-8 w-8" />, color: "bg-sdg-12", title: "Responsible Consumption", number: 12 },
    { icon: <Recycle className="h-8 w-8" />, color: "bg-sdg-13", title: "Climate Action", number: 13 },
    { icon: <CloudRain className="h-8 w-8" />, color: "bg-sdg-14", title: "Life Below Water", number: 14 },
    { icon: <Fish className="h-8 w-8" />, color: "bg-sdg-15", title: "Life On Land", number: 15 },
    { icon: <TreePine className="h-8 w-8" />, color: "bg-sdg-16", title: "Peace & Justice", number: 16 },
    { icon: <Shield className="h-8 w-8" />, color: "bg-sdg-17", title: "Partnerships", number: 17 },
  ]

  const sdgDetails = [
    {
      title: "End poverty in all its forms everywhere",
      description:
        "Extreme poverty rates have been cut by more than half since 1990. While this is a remarkable achievement, one in five people in developing regions still live on less than $1.90 a day, and there are millions more who make little more than this daily amount, plus many people risk slipping back into poverty.",
      targets: [
        "By 2030, eradicate extreme poverty for all people everywhere",
        "Reduce at least by half the proportion of people living in poverty",
        "Implement social protection systems for all",
        "Ensure equal rights to economic resources",
        "Build resilience of the poor to climate-related extreme events",
      ],
      progress: 67,
      challenges: [
        "Persistent inequality and discrimination",
        "Limited access to resources and opportunities",
        "Climate change impacts affecting vulnerable populations",
        "COVID-19 setbacks to poverty reduction efforts",
      ],
    },
    {
      title: "End hunger, achieve food security and improved nutrition and promote sustainable agriculture",
      description:
        "The number of undernourished people has dropped by almost half in the past two decades because of rapid economic growth and increased agricultural productivity. Many developing countries that used to suffer from famine and hunger can now meet their nutritional needs. Central and East Asia, Latin America and the Caribbean have all made huge progress in eradicating extreme hunger.",
      targets: [
        "End hunger and ensure access to safe, nutritious food",
        "End all forms of malnutrition",
        "Double agricultural productivity of small-scale food producers",
        "Ensure sustainable food production systems",
        "Maintain genetic diversity of seeds and cultivated plants",
      ],
      progress: 42,
      challenges: [
        "Climate change affecting crop yields",
        "Food waste and inefficient distribution",
        "Conflict and political instability",
        "Lack of investment in agricultural infrastructure",
      ],
    },
    // Additional SDG details would be added here for all 17 goals
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <section
          ref={heroRef}
          className={`py-16 md:py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white transition-opacity duration-1000 ${
            heroInView ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 items-center">
              <div className="flex flex-col justify-center space-y-4 animate-slide-in-left">
                <div className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
                  Sustainable Development Goals
                </div>
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                  17 Goals to Transform Our World
                </h1>
                <p className="max-w-[600px] text-white/90 md:text-xl/relaxed">
                  The Sustainable Development Goals are a universal call to action to end poverty, protect the planet,
                  and ensure prosperity for all as part of a new sustainable development agenda.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                    Explore the Goals
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Track Progress
                  </Button>
                </div>
              </div>
              <div className="flex justify-center animate-slide-in-right">
                <div className="relative h-[300px] w-[300px] md:h-[400px] md:w-[400px]">
                  <Image src="/placeholder.svg?height=400&width=400" alt="SDG Wheel" fill className="object-contain" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          ref={goalsRef}
          className={`py-16 md:py-24 transition-opacity duration-1000 ${goalsInView ? "opacity-100" : "opacity-0"}`}
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary animate-fade-in">
                The Global Goals
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl animate-slide-up">
                Explore the Sustainable Development Goals
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed animate-fade-in">
                Click on any goal to learn more about its targets, progress, and how you can contribute.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {sdgIcons.map((sdg, index) => (
                <button
                  key={index}
                  className={`sdg-card ${sdg.color} text-white p-4 flex flex-col items-center justify-center text-center min-h-[120px] animate-scale-in ${
                    activeGoal === index ? "ring-4 ring-offset-2 ring-offset-background" : ""
                  }`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                  onClick={() => setActiveGoal(index)}
                  aria-label={`SDG ${sdg.number}: ${sdg.title}`}
                >
                  <div className="text-xl font-bold mb-1">{sdg.number}</div>
                  {sdg.icon}
                  <span className="mt-2 text-sm font-medium">{sdg.title}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section
          ref={detailsRef}
          className={`py-16 md:py-24 bg-muted transition-opacity duration-1000 ${
            detailsInView ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2">
              <Card className="overflow-hidden border-0 shadow-lg animate-slide-in-left">
                <div className={`h-2 ${sdgIcons[activeGoal].color}`} />
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-full ${
                        sdgIcons[activeGoal].color
                      } text-white`}
                    >
                      <span className="text-2xl font-bold">{sdgIcons[activeGoal].number}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">
                        Goal {sdgIcons[activeGoal].number}: {sdgIcons[activeGoal].title}
                      </h3>
                      <p className="text-muted-foreground">
                        {sdgDetails[activeGoal]?.title || "End poverty in all its forms everywhere"}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Overview</h4>
                      <p className="text-muted-foreground">
                        {sdgDetails[activeGoal]?.description ||
                          "Extreme poverty rates have been cut by more than half since 1990. While this is a remarkable achievement, one in five people in developing regions still live on less than $1.90 a day, and there are millions more who make little more than this daily amount, plus many people risk slipping back into poverty."}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-2">Key Targets</h4>
                      <ul className="space-y-2">
                        {(
                          sdgDetails[activeGoal]?.targets || [
                            "By 2030, eradicate extreme poverty for all people everywhere",
                            "Reduce at least by half the proportion of people living in poverty",
                            "Implement social protection systems for all",
                            "Ensure equal rights to economic resources",
                            "Build resilience of the poor to climate-related extreme events",
                          ]
                        ).map((target, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            <span>{target}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-2">Global Progress</h4>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Overall progress toward targets</span>
                          <span className="text-sm text-muted-foreground">{progressValues[activeGoal]}%</span>
                        </div>
                        <Progress value={progressValues[activeGoal]} className="h-2" />
                        <p className="text-sm text-muted-foreground mt-2">
                          Based on current global indicators and reporting from UN member states.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-2">Key Challenges</h4>
                      <ul className="space-y-2">
                        {(
                          sdgDetails[activeGoal]?.challenges || [
                            "Persistent inequality and discrimination",
                            "Limited access to resources and opportunities",
                            "Climate change impacts affecting vulnerable populations",
                            "COVID-19 setbacks to poverty reduction efforts",
                          ]
                        ).map((challenge, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            <span>{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-6 animate-slide-in-right">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">How You Can Contribute</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <Heart className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="text-base font-semibold">Donate</h4>
                          <p className="text-sm text-muted-foreground">
                            Support organizations working toward {sdgIcons[activeGoal].title.toLowerCase()}.
                          </p>
                          <Button variant="link" className="h-auto p-0 text-sm" asChild>
                            <Link href="/get-involved">Find organizations</Link>
                          </Button>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <Users className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="text-base font-semibold">Volunteer</h4>
                          <p className="text-sm text-muted-foreground">
                            Contribute your time and skills to projects addressing this goal.
                          </p>
                          <Button variant="link" className="h-auto p-0 text-sm" asChild>
                            <Link href="/get-involved">Find opportunities</Link>
                          </Button>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <Lightbulb className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="text-base font-semibold">Raise Awareness</h4>
                          <p className="text-sm text-muted-foreground">
                            Share information about this goal with your network and community.
                          </p>
                          <Button variant="link" className="h-auto p-0 text-sm">
                            Share on social media
                          </Button>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <Handshake className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="text-base font-semibold">Take Action</h4>
                          <p className="text-sm text-muted-foreground">
                            Make changes in your daily life that contribute to this goal.
                          </p>
                          <Button variant="link" className="h-auto p-0 text-sm">
                            View action guide
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">SDG Indicators</h3>
                    <Tabs defaultValue="global">
                      <TabsList className="mb-4">
                        <TabsTrigger value="global">Global</TabsTrigger>
                        <TabsTrigger value="regional">Regional</TabsTrigger>
                        <TabsTrigger value="country">Country</TabsTrigger>
                      </TabsList>
                      <TabsContent value="global" className="space-y-4">
                        <div className="h-[200px] w-full flex items-center justify-center bg-muted/50 rounded-md">
                          <p className="text-muted-foreground text-sm">Global progress visualization</p>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Data source: United Nations Statistical Division, last updated May 2023.
                        </p>
                      </TabsContent>
                      <TabsContent value="regional" className="space-y-4">
                        <div className="h-[200px] w-full flex items-center justify-center bg-muted/50 rounded-md">
                          <p className="text-muted-foreground text-sm">Regional progress visualization</p>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Data source: United Nations Regional Commissions, last updated April 2023.
                        </p>
                      </TabsContent>
                      <TabsContent value="country" className="space-y-4">
                        <div className="h-[200px] w-full flex items-center justify-center bg-muted/50 rounded-md">
                          <p className="text-muted-foreground text-sm">Country-level progress visualization</p>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Data source: Voluntary National Reviews, last updated June 2023.
                        </p>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section
          ref={storiesRef}
          className={`py-16 md:py-24 transition-opacity duration-1000 ${storiesInView ? "opacity-100" : "opacity-0"}`}
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary animate-fade-in">
                Success Stories
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl animate-slide-up">
                Impact in Action
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed animate-fade-in">
                Discover how communities around the world are making progress toward the Sustainable Development Goals.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {mockArticles.slice(0, 6).map((article, index) => (
                <div key={article.id} className={`animate-slide-up`} style={{ animationDelay: `${index * 0.1}s` }}>
                  <ArticleCard article={article} />
                </div>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <Button className="group" asChild>
                <Link href="/stories">
                  View all stories
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
