"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import {
  ArrowRight,
  Calendar,
  Globe,
  Heart,
  Handshake,
  Users,
  MessageSquare,
  MapPin,
  Share2,
  Lightbulb,
  Clock,
} from "lucide-react"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function GetInvolvedPage() {
  const [mounted, setMounted] = useState(false)
  const [donationAmount, setDonationAmount] = useState<string>("50")
  const [customAmount, setCustomAmount] = useState<string>("")

  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [waysRef, waysInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [donateRef, donateInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [volunteerRef, volunteerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [eventsRef, eventsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const handleDonationAmountChange = (amount: string) => {
    setDonationAmount(amount)
    setCustomAmount("")
  }

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (value === "" || /^\d+$/.test(value)) {
      setCustomAmount(value)
      setDonationAmount("custom")
    }
  }

  const volunteerOpportunities = [
    {
      title: "Content Creator",
      location: "Remote",
      commitment: "5-10 hours/week",
      description:
        "Help create engaging content about the SDGs and global issues for our platform. Skills needed: writing, research, storytelling.",
    },
    {
      title: "Community Ambassador",
      location: "Global",
      commitment: "Flexible",
      description:
        "Represent Shared Voices in your community, organize local events, and raise awareness about sustainable development.",
    },
    {
      title: "Translation Volunteer",
      location: "Remote",
      commitment: "3-5 hours/week",
      description:
        "Help translate our content into different languages to reach wider audiences. Fluency in multiple languages required.",
    },
    {
      title: "Digital Marketing Assistant",
      location: "Remote",
      commitment: "8-12 hours/week",
      description:
        "Support our digital marketing efforts to amplify our message and reach. Skills needed: social media, content creation, analytics.",
    },
    {
      title: "Event Coordinator",
      location: "Various",
      commitment: "Project-based",
      description:
        "Help organize and coordinate events, webinars, and workshops related to the SDGs and global issues.",
    },
    {
      title: "Research Assistant",
      location: "Remote",
      commitment: "10-15 hours/week",
      description:
        "Support our research team in gathering data, analyzing trends, and creating reports on sustainable development topics.",
    },
  ]

  const upcomingEvents = [
    {
      title: "Global Youth Summit 2023",
      date: "June 20-22, 2023",
      location: "Virtual",
      description:
        "Join young leaders from around the world to discuss innovative solutions to global challenges and network with like-minded changemakers.",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Sustainable Innovation Conference",
      date: "July 15, 2023",
      location: "New York, NY",
      description:
        "Explore cutting-edge solutions for sustainable development and connect with industry leaders, innovators, and policymakers.",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Climate Action Workshop Series",
      date: "Monthly, starting May 22, 2023",
      location: "Multiple locations & Virtual",
      description:
        "A series of hands-on workshops focused on practical climate action strategies for individuals and communities.",
      image: "/placeholder.svg?height=200&width=400",
    },
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
                  Get Involved
                </div>
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                  Be Part of the Change
                </h1>
                <p className="max-w-[600px] text-white/90 md:text-xl/relaxed">
                  There are many ways to contribute to a more sustainable, innovative, and peaceful world. Find your
                  path to making a difference.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                    Donate Now
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Volunteer
                  </Button>
                </div>
              </div>
              <div className="flex justify-center animate-slide-in-right">
                <div className="relative h-[300px] w-[300px] md:h-[400px] md:w-[400px]">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Get Involved"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          ref={waysRef}
          className={`py-16 md:py-24 transition-opacity duration-1000 ${waysInView ? "opacity-100" : "opacity-0"}`}
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary animate-fade-in">
                Ways to Engage
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl animate-slide-up">
                How You Can Make a Difference
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed animate-fade-in">
                Everyone has something valuable to contribute. Find the path that matches your interests, skills, and
                availability.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card className="border-0 shadow-md transition-all hover:shadow-lg animate-scale-in">
                <CardHeader className="pb-2">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Heart className="h-6 w-6" />
                  </div>
                  <CardTitle>Donate</CardTitle>
                  <CardDescription>Support our initiatives financially</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-muted-foreground">
                    Your donation helps fund critical projects, content creation, and community initiatives that drive
                    progress toward the SDGs.
                  </p>
                  <Button className="w-full" asChild>
                    <a href="#donate">Donate Now</a>
                  </Button>
                </CardContent>
              </Card>

              <Card
                className="border-0 shadow-md transition-all hover:shadow-lg animate-scale-in"
                style={{ animationDelay: "0.1s" }}
              >
                <CardHeader className="pb-2">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Users className="h-6 w-6" />
                  </div>
                  <CardTitle>Volunteer</CardTitle>
                  <CardDescription>Contribute your time and skills</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-muted-foreground">
                    Join our global network of volunteers making a difference through content creation, community
                    engagement, and specialized skills.
                  </p>
                  <Button className="w-full" asChild>
                    <a href="#volunteer">Volunteer</a>
                  </Button>
                </CardContent>
              </Card>

              <Card
                className="border-0 shadow-md transition-all hover:shadow-lg animate-scale-in"
                style={{ animationDelay: "0.2s" }}
              >
                <CardHeader className="pb-2">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <CardTitle>Attend Events</CardTitle>
                  <CardDescription>Participate in our programs</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-muted-foreground">
                    Join our webinars, workshops, and conferences to learn, connect with others, and gain skills to
                    drive change in your community.
                  </p>
                  <Button className="w-full" asChild>
                    <a href="#events">View Events</a>
                  </Button>
                </CardContent>
              </Card>

              <Card
                className="border-0 shadow-md transition-all hover:shadow-lg animate-scale-in"
                style={{ animationDelay: "0.3s" }}
              >
                <CardHeader className="pb-2">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Handshake className="h-6 w-6" />
                  </div>
                  <CardTitle>Partner With Us</CardTitle>
                  <CardDescription>Collaborate for greater impact</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-muted-foreground">
                    Organizations can partner with us to amplify impact through joint initiatives, content
                    collaboration, and resource sharing.
                  </p>
                  <Button className="w-full">Become a Partner</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section
          id="donate"
          ref={donateRef}
          className={`py-16 md:py-24 bg-muted transition-opacity duration-1000 ${
            donateInView ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div className="space-y-6 animate-slide-in-left">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Support Our Work
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Make a Donation</h2>
                <p className="text-muted-foreground md:text-lg/relaxed">
                  Your donation helps us create impactful content, support innovative projects, and build a global
                  community dedicated to sustainable development.
                </p>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Your Impact</h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0">
                        <Globe className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-base font-medium">Global Reach</h4>
                        <p className="text-sm text-muted-foreground">
                          Help us translate content into multiple languages and reach audiences worldwide.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0">
                        <Lightbulb className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-base font-medium">Innovation</h4>
                        <p className="text-sm text-muted-foreground">
                          Support the development of innovative solutions to global challenges.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0">
                        <Users className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-base font-medium">Community</h4>
                        <p className="text-sm text-muted-foreground">
                          Help build and sustain our global community of changemakers.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0">
                        <MessageSquare className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-base font-medium">Education</h4>
                        <p className="text-sm text-muted-foreground">
                          Fund educational content and resources about the SDGs and global issues.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="border-0 shadow-lg animate-slide-in-right">
                <CardHeader>
                  <CardTitle>Donation Form</CardTitle>
                  <CardDescription>Support our mission with a one-time or recurring donation</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="space-y-2">
                      <Label>Select Amount</Label>
                      <div className="grid grid-cols-3 gap-2">
                        <Button
                          type="button"
                          variant={donationAmount === "25" ? "default" : "outline"}
                          className="w-full"
                          onClick={() => handleDonationAmountChange("25")}
                        >
                          $25
                        </Button>
                        <Button
                          type="button"
                          variant={donationAmount === "50" ? "default" : "outline"}
                          className="w-full"
                          onClick={() => handleDonationAmountChange("50")}
                        >
                          $50
                        </Button>
                        <Button
                          type="button"
                          variant={donationAmount === "100" ? "default" : "outline"}
                          className="w-full"
                          onClick={() => handleDonationAmountChange("100")}
                        >
                          $100
                        </Button>
                        <Button
                          type="button"
                          variant={donationAmount === "250" ? "default" : "outline"}
                          className="w-full"
                          onClick={() => handleDonationAmountChange("250")}
                        >
                          $250
                        </Button>
                        <Button
                          type="button"
                          variant={donationAmount === "500" ? "default" : "outline"}
                          className="w-full"
                          onClick={() => handleDonationAmountChange("500")}
                        >
                          $500
                        </Button>
                        <Button
                          type="button"
                          variant={donationAmount === "custom" ? "default" : "outline"}
                          className="w-full"
                          onClick={() => handleDonationAmountChange("custom")}
                        >
                          Custom
                        </Button>
                      </div>
                      {donationAmount === "custom" && (
                        <div className="mt-2">
                          <Label htmlFor="custom-amount">Custom Amount ($)</Label>
                          <Input
                            id="custom-amount"
                            type="text"
                            placeholder="Enter amount"
                            value={customAmount}
                            onChange={handleCustomAmountChange}
                          />
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label>Frequency</Label>
                      <div className="grid grid-cols-2 gap-2">
                        <Button type="button" variant="default" className="w-full">
                          One-time
                        </Button>
                        <Button type="button" variant="outline" className="w-full">
                          Monthly
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Personal Information</Label>
                      <div className="grid gap-4">
                        <Input placeholder="Full Name" />
                        <Input type="email" placeholder="Email Address" />
                        <div className="flex items-center space-x-2">
                          <Checkbox id="anonymous" />
                          <Label htmlFor="anonymous" className="text-sm">
                            Make this donation anonymous
                          </Label>
                        </div>
                      </div>
                    </div>

                    <Button type="submit" className="w-full">
                      Donate ${donationAmount === "custom" ? customAmount || "0" : donationAmount}
                    </Button>

                    <p className="text-xs text-center text-muted-foreground">
                      Shared Voices is a registered 501(c)(3) nonprofit organization. All donations are tax-deductible.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section
          id="volunteer"
          ref={volunteerRef}
          className={`py-16 md:py-24 transition-opacity duration-1000 ${volunteerInView ? "opacity-100" : "opacity-0"}`}
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary animate-fade-in">
                Volunteer With Us
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl animate-slide-up">
                Share Your Skills and Passion
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed animate-fade-in">
                Join our global network of volunteers making a difference in communities around the world.
              </p>
            </div>

            <Tabs defaultValue="opportunities" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList>
                  <TabsTrigger value="opportunities">Opportunities</TabsTrigger>
                  <TabsTrigger value="apply">Apply</TabsTrigger>
                  <TabsTrigger value="faq">FAQ</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="opportunities" className="space-y-8">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {volunteerOpportunities.map((opportunity, index) => (
                    <Card
                      key={index}
                      className="border-0 shadow-md transition-all hover:shadow-lg animate-scale-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <Users className="h-5 w-5" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold mb-1">{opportunity.title}</h3>
                            <div className="flex flex-wrap gap-2 mb-3">
                              <div className="flex items-center text-xs text-muted-foreground">
                                <MapPin className="mr-1 h-3 w-3" />
                                {opportunity.location}
                              </div>
                              <div className="flex items-center text-xs text-muted-foreground">
                                <Clock className="mr-1 h-3 w-3" />
                                {opportunity.commitment}
                              </div>
                            </div>
                            <p className="text-sm text-muted-foreground mb-4">{opportunity.description}</p>
                            <Button size="sm">Apply Now</Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="flex justify-center">
                  <Button className="group">
                    View All Opportunities
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="apply" className="space-y-8">
                <Card className="border-0 shadow-lg mx-auto max-w-2xl">
                  <CardHeader>
                    <CardTitle>Volunteer Application</CardTitle>
                    <CardDescription>
                      Tell us about yourself and how you'd like to contribute to our mission.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="first-name">First Name</Label>
                          <Input id="first-name" placeholder="First Name" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="last-name">Last Name</Label>
                          <Input id="last-name" placeholder="Last Name" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="Email Address" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="location">Location</Label>
                        <Input id="location" placeholder="City, Country" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="interests">Areas of Interest</Label>
                        <div className="grid gap-2 sm:grid-cols-2">
                          <div className="flex items-center space-x-2">
                            <Checkbox id="content-creation" />
                            <Label htmlFor="content-creation" className="text-sm">
                              Content Creation
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="community-outreach" />
                            <Label htmlFor="community-outreach" className="text-sm">
                              Community Outreach
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="translation" />
                            <Label htmlFor="translation" className="text-sm">
                              Translation
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="digital-marketing" />
                            <Label htmlFor="digital-marketing" className="text-sm">
                              Digital Marketing
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="event-coordination" />
                            <Label htmlFor="event-coordination" className="text-sm">
                              Event Coordination
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="research" />
                            <Label htmlFor="research" className="text-sm">
                              Research
                            </Label>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="skills">Skills & Experience</Label>
                        <Textarea id="skills" placeholder="Tell us about your relevant skills and experience" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="motivation">Motivation</Label>
                        <Textarea id="motivation" placeholder="Why do you want to volunteer with Shared Voices?" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="availability">Availability</Label>
                        <Input id="availability" placeholder="Hours per week" />
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox id="terms" required />
                        <Label htmlFor="terms" className="text-sm">
                          I agree to the volunteer terms and conditions
                        </Label>
                      </div>

                      <Button type="submit" className="w-full">
                        Submit Application
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="faq" className="space-y-8">
                <Card className="border-0 shadow-lg mx-auto max-w-3xl">
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold">What skills are most needed?</h3>
                        <p className="text-muted-foreground">
                          We welcome volunteers with diverse skills, but particularly value experience in content
                          creation, digital marketing, translation, research, event coordination, and community
                          engagement.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold">Is there a minimum time commitment?</h3>
                        <p className="text-muted-foreground">
                          Time commitments vary by role. Some opportunities require as little as 2-3 hours per week,
                          while others may need 10+ hours. We work with volunteers to find arrangements that fit their
                          schedules.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold">Can I volunteer remotely?</h3>
                        <p className="text-muted-foreground">
                          Yes! Many of our volunteer opportunities are remote, allowing you to contribute from anywhere
                          in the world. We also have in-person opportunities in select locations.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold">Do you provide training for volunteers?</h3>
                        <p className="text-muted-foreground">
                          Yes, we provide orientation and role-specific training for all volunteers. We also offer
                          ongoing support and professional development opportunities.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold">How long does the application process take?</h3>
                        <p className="text-muted-foreground">
                          The application process typically takes 2-3 weeks, including review, interview, and placement.
                          Some specialized roles may take longer.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold">Can I volunteer as part of a group or team?</h3>
                        <p className="text-muted-foreground">
                          Yes! We welcome corporate teams, student groups, and other organizations interested in
                          volunteering together. Contact us to discuss group volunteer opportunities.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section
          id="events"
          ref={eventsRef}
          className={`py-16 md:py-24 bg-muted transition-opacity duration-1000 ${
            eventsInView ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary animate-fade-in">
                Events & Programs
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl animate-slide-up">
                Join Our Community Events
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed animate-fade-in">
                Connect with like-minded individuals, learn from experts, and gain skills to drive change.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {upcomingEvents.map((event, index) => (
                <Card
                  key={index}
                  className="overflow-hidden border-0 shadow-lg transition-all hover:shadow-xl animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="aspect-video relative">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    <div className="flex flex-wrap gap-3 mb-3">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="mr-1 h-4 w-4" />
                        {event.date}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="mr-1 h-4 w-4" />
                        {event.location}
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">{event.description}</p>
                    <div className="flex gap-2">
                      <Button className="flex-1">Register</Button>
                      <Button variant="outline" size="icon">
                        <Share2 className="h-4 w-4" />
                        <span className="sr-only">Share event</span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <Button className="group">
                View All Events
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div className="space-y-6">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Stay Connected
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Join Our Newsletter</h2>
                <p className="text-muted-foreground md:text-lg/relaxed">
                  Subscribe to receive updates on our latest stories, events, and opportunities to get involved.
                </p>
                <form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="newsletter-name">Name</Label>
                      <Input id="newsletter-name" placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="newsletter-email">Email</Label>
                      <Input id="newsletter-email" type="email" placeholder="Your email" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Interests</Label>
                    <div className="grid gap-2 sm:grid-cols-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="interest-stories" />
                        <Label htmlFor="interest-stories" className="text-sm">
                          Stories & Articles
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="interest-events" />
                        <Label htmlFor="interest-events" className="text-sm">
                          Events & Webinars
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="interest-volunteer" />
                        <Label htmlFor="interest-volunteer" className="text-sm">
                          Volunteer Opportunities
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="interest-sdgs" />
                        <Label htmlFor="interest-sdgs" className="text-sm">
                          SDG Updates
                        </Label>
                      </div>
                    </div>
                  </div>
                  <Button type="submit" className="w-full sm:w-auto">
                    Subscribe
                  </Button>
                </form>
              </div>
              <div className="flex justify-center">
                <div className="relative h-[400px] w-full max-w-[500px]">
                  <Image
                    src="/placeholder.svg?height=400&width=500"
                    alt="Stay connected"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Make a Difference?
              </h2>
              <p className="max-w-[700px] md:text-xl/relaxed opacity-90">
                Join our global community of changemakers dedicated to creating a more sustainable, innovative, and
                peaceful world.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  <Link href="/register">Create an Account</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <a href="#donate">Donate Now</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
