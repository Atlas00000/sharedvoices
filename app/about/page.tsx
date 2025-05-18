"use client"

import { useState, useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Clock, Globe, Lightbulb, Users, Handshake } from "lucide-react"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function AboutPage() {
  const [mounted, setMounted] = useState(false)
  const [counters, setCounters] = useState({
    countries: 0,
    partners: 0,
    projects: 0,
    volunteers: 0,
  })

  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [missionRef, missionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [teamRef, teamInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [timelineRef, timelineInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [partnersRef, partnersInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const counterRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    setMounted(true)

    // Animate counters when stats section is in view
    if (statsInView && !counterRef.current) {
      const duration = 2000 // ms
      const steps = 50
      const stepTime = duration / steps

      const targetValues = {
        countries: 120,
        partners: 350,
        projects: 500,
        volunteers: 10000,
      }

      let currentStep = 0

      counterRef.current = setInterval(() => {
        currentStep++

        if (currentStep >= steps) {
          setCounters(targetValues)
          if (counterRef.current) clearInterval(counterRef.current)
          return
        }

        const progress = currentStep / steps

        setCounters({
          countries: Math.round(targetValues.countries * progress),
          partners: Math.round(targetValues.partners * progress),
          projects: Math.round(targetValues.projects * progress),
          volunteers: Math.round(targetValues.volunteers * progress),
        })
      }, stepTime)
    }

    return () => {
      if (counterRef.current) clearInterval(counterRef.current)
    }
  }, [statsInView])

  if (!mounted) return null

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Executive Director",
      image: "/images/about/team/sarah.jpg",
      bio: "Sarah has over 15 years of experience in international development and humanitarian work. She previously worked with the United Nations Development Programme.",
    },
    {
      name: "Michael Chen",
      role: "Director of Programs",
      image: "/images/about/team/michael.jpg",
      bio: "Michael leads our program development and implementation across all regions. He has a background in sustainable development and climate policy.",
    },
    {
      name: "Priya Patel",
      role: "Head of Partnerships",
      image: "/images/about/team/priya.jpg",
      bio: "Priya manages our strategic partnerships with organizations, governments, and donors to maximize our collective impact.",
    },
    {
      name: "James Wilson",
      role: "Director of Innovation",
      image: "/images/about/team/james.jpg",
      bio: "James drives our innovation initiatives, exploring new technologies and approaches to address global challenges.",
    },
    {
      name: "Elena Rodriguez",
      role: "Communications Director",
      image: "/images/about/team/elena.jpg",
      bio: "Elena leads our communications strategy, ensuring our message reaches and resonates with global audiences.",
    },
    {
      name: "David Nguyen",
      role: "Chief Technology Officer",
      image: "/images/about/team/david.jpg",
      bio: "David oversees our technology infrastructure and digital platforms, making our content accessible worldwide.",
    },
  ]

  const timelineEvents = [
    {
      year: "2015",
      title: "Foundation",
      description:
        "Shared Voices was founded with a mission to inform, inspire, and empower action toward sustainable development.",
    },
    {
      year: "2016",
      title: "First Global Campaign",
      description: "Launched our first global awareness campaign focused on the Sustainable Development Goals.",
    },
    {
      year: "2017",
      title: "Regional Expansion",
      description: "Expanded operations to Asia and Africa, establishing regional hubs in Nairobi and Bangkok.",
    },
    {
      year: "2018",
      title: "Digital Platform Launch",
      description: "Launched our comprehensive digital platform to reach wider audiences with our content.",
    },
    {
      year: "2019",
      title: "Youth Ambassador Program",
      description: "Initiated our Youth Ambassador Program, engaging young leaders from over 50 countries.",
    },
    {
      year: "2020",
      title: "Virtual Summit Series",
      description: "Adapted to the pandemic with our Virtual Summit Series, reaching over 100,000 participants.",
    },
    {
      year: "2021",
      title: "Innovation Lab",
      description:
        "Established the Shared Voices Innovation Lab to develop solutions for sustainable development challenges.",
    },
    {
      year: "2022",
      title: "Strategic Partnerships",
      description: "Formed strategic partnerships with major international organizations and corporations.",
    },
    {
      year: "2023",
      title: "Global Impact Report",
      description: "Published our first Global Impact Report, documenting our contributions to the SDGs.",
    },
  ]

  const partners = [
    { name: "United Nations", logo: "/images/about/partners/un.png" },
    { name: "World Bank", logo: "/images/about/partners/world-bank.png" },
    { name: "UNICEF", logo: "/images/about/partners/unicef.png" },
    { name: "World Health Organization", logo: "/images/about/partners/who.png" },
    { name: "Global Fund", logo: "/images/about/partners/global-fund.png" },
    { name: "Gates Foundation", logo: "/images/about/partners/gates.png" },
    { name: "Oxfam", logo: "/images/about/partners/oxfam.png" },
    { name: "Save the Children", logo: "/images/about/partners/save-children.png" },
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
                  About Shared Voices
                </div>
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                  Our Mission for Global Change
                </h1>
                <p className="max-w-[600px] text-white/90 md:text-xl/relaxed">
                  We are a global platform dedicated to informing, inspiring, and empowering individuals and communities
                  to take action towards a sustainable, innovative, and peaceful world.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                    Our Story
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Meet Our Team
                  </Button>
                </div>
              </div>
              <div className="flex justify-center animate-slide-in-right">
                <div className="relative w-full max-w-[500px] aspect-[4/3] md:aspect-[16/9]">
                  <Image
                    src="/images/about/hero.jpg"
                    alt="About Shared Voices"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover rounded-xl shadow-2xl transition-all duration-300 hover:shadow-primary/20"
                    priority
                    quality={90}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          ref={missionRef}
          className={`py-16 md:py-24 transition-opacity duration-1000 ${missionInView ? "opacity-100" : "opacity-0"}`}
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="space-y-6 animate-slide-in-left">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Our Mission</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Informing, Inspiring, and Empowering Global Action
                </h2>
                <p className="text-muted-foreground md:text-lg/relaxed">
                  At Shared Voices, we believe that informed and empowered individuals can drive meaningful change in
                  their communities and beyond. Our mission is to provide a platform where diverse perspectives on
                  global issues are heard, where innovation and best practices are shared, and where people are inspired
                  to take action.
                </p>
                <p className="text-muted-foreground md:text-lg/relaxed">
                  We focus on the Sustainable Development Goals (SDGs) as a framework for addressing the world's most
                  pressing challenges, from poverty and inequality to climate change and peace. Through storytelling,
                  data-driven insights, and community engagement, we aim to accelerate progress toward a more
                  sustainable, equitable, and peaceful world.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Card className="flex-1">
                    <CardContent className="p-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                        <Globe className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">Global Reach</h3>
                      <p className="text-muted-foreground">
                        Our content and programs reach audiences in over 120 countries, translated into multiple
                        languages.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="flex-1">
                    <CardContent className="p-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                        <Lightbulb className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">Innovation</h3>
                      <p className="text-muted-foreground">
                        We showcase innovative solutions to global challenges and foster creative problem-solving.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div className="grid gap-6 md:grid-cols-2 animate-slide-in-right">
                <div className="grid gap-6">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
                    <Image
                      src="/images/about/mission/mission-1.jpg"
                      alt="Our mission in action - Community engagement"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      quality={85}
                    />
                  </div>
                  <div className="relative aspect-square overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
                    <Image
                      src="/images/about/mission/mission-2.jpg"
                      alt="Our mission in action - Education initiatives"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      quality={85}
                    />
                  </div>
                </div>
                <div className="grid gap-6">
                  <div className="relative aspect-square overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
                    <Image
                      src="/images/about/mission/mission-3.jpg"
                      alt="Our mission in action - Sustainable development"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      quality={85}
                    />
                  </div>
                  <div className="relative aspect-[3/4] overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
                    <Image
                      src="/images/about/mission/mission-4.jpg"
                      alt="Our mission in action - Global partnerships"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      quality={85}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          ref={statsRef}
          className={`py-16 md:py-24 bg-muted transition-opacity duration-1000 ${statsInView ? "opacity-100" : "opacity-0"}`}
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
                Since our founding in 2015, we've grown into a global movement for positive change.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <Card className="text-center animate-bounce-in">
                <CardContent className="p-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mx-auto mb-4">
                    <Globe className="h-8 w-8" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">{counters.countries}+</div>
                  <p className="text-muted-foreground">Countries Reached</p>
                </CardContent>
              </Card>

              <Card className="text-center animate-bounce-in" style={{ animationDelay: "0.1s" }}>
                <CardContent className="p-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mx-auto mb-4">
                    <Handshake className="h-8 w-8" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">{counters.partners}+</div>
                  <p className="text-muted-foreground">Partner Organizations</p>
                </CardContent>
              </Card>

              <Card className="text-center animate-bounce-in" style={{ animationDelay: "0.2s" }}>
                <CardContent className="p-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mx-auto mb-4">
                    <Lightbulb className="h-8 w-8" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">{counters.projects}+</div>
                  <p className="text-muted-foreground">Projects Supported</p>
                </CardContent>
              </Card>

              <Card className="text-center animate-bounce-in" style={{ animationDelay: "0.3s" }}>
                <CardContent className="p-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mx-auto mb-4">
                    <Users className="h-8 w-8" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">{counters.volunteers.toLocaleString()}+</div>
                  <p className="text-muted-foreground">Volunteers Worldwide</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section
          ref={teamRef}
          className={`py-16 md:py-24 transition-opacity duration-1000 ${teamInView ? "opacity-100" : "opacity-0"}`}
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary animate-fade-in">
                Our Team
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl animate-slide-up">
                Meet the People Behind Shared Voices
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed animate-fade-in">
                Our diverse team brings together expertise in international development, journalism, technology, and
                more.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {teamMembers.map((member, index) => (
                <Card
                  key={index}
                  className="overflow-hidden border-0 shadow-md transition-all hover:shadow-lg animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="aspect-square relative">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-4">{member.role}</p>
                    <p className="text-muted-foreground text-sm">{member.bio}</p>
                    <div className="flex gap-2 mt-4">
                      <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
                        <Link href="#" aria-label={`${member.name}'s LinkedIn profile`}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-linkedin"
                          >
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                            <rect width="4" height="12" x="2" y="9" />
                            <circle cx="4" cy="4" r="2" />
                          </svg>
                        </Link>
                      </Button>
                      <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
                        <Link href="#" aria-label={`${member.name}'s Twitter profile`}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-twitter"
                          >
                            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                          </svg>
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <Button className="group">
                View Full Team
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </section>

        <section
          ref={timelineRef}
          className={`py-16 md:py-24 bg-muted transition-opacity duration-1000 ${
            timelineInView ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary animate-fade-in">
                Our Journey
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl animate-slide-up">
                The Shared Voices Timeline
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed animate-fade-in">
                From our founding to today, explore the key milestones in our organization's history.
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 h-full w-px -translate-x-1/2 bg-border" />
              <div className="space-y-12">
                {timelineEvents.map((event, index) => (
                  <div
                    key={index}
                    className={`relative flex items-center justify-between animate-fade-in ${
                      index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-5/12" />
                    <div className="absolute left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <Clock className="h-5 w-5" />
                    </div>
                    <Card className={`w-5/12 ${index % 2 === 0 ? "animate-slide-in-right" : "animate-slide-in-left"}`}>
                      <CardContent className="p-6">
                        <div className="text-primary font-bold mb-2">{event.year}</div>
                        <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                        <p className="text-muted-foreground">{event.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          ref={partnersRef}
          className={`py-16 md:py-24 transition-opacity duration-1000 ${partnersInView ? "opacity-100" : "opacity-0"}`}
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary animate-fade-in">
                Our Partners
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl animate-slide-up">
                Collaborating for Impact
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed animate-fade-in">
                We work with a diverse network of organizations to amplify our collective impact.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-4 grayscale transition-all hover:grayscale-0 hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    width={200}
                    height={100}
                    className="h-auto max-h-16"
                  />
                </div>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <Button className="group">
                Become a Partner
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Join Our Global Community</h2>
                <p className="md:text-xl/relaxed opacity-90">
                  Be part of a worldwide network of changemakers dedicated to creating a more sustainable, innovative,
                  and peaceful world.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                    <Link href="/register">Create an Account</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    <Link href="/get-involved">Get Involved</Link>
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative h-[300px] w-full max-w-[500px]">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Join our community"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
