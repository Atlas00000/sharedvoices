"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const ParallaxHero = () => {
  const [scrollY, setScrollY] = useState(0)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const { top, height } = heroRef.current.getBoundingClientRect()
        const scrollPosition = Math.max(0, -top)
        const scrollPercentage = Math.min(1, scrollPosition / height)
        setScrollY(scrollPercentage * 100)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Start playing the video when it's loaded
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Video autoplay failed:", error)
      })
    }
  }, [])

  return (
    <div ref={heroRef} className="parallax-hero relative h-[80vh] min-h-[600px] w-full overflow-hidden">
      {/* Background Layer */}
      <div className="parallax-layer" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
        {/* Video Background */}
        <video
          ref={videoRef}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            isVideoLoaded ? "opacity-100" : "opacity-0"
          }`}
          playsInline
          muted
          loop
          autoPlay
          onLoadedData={() => setIsVideoLoaded(true)}
          poster="/images/hero/hero-background.jpg"
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>

        {/* Fallback Image */}
        <Image
          src="/images/hero/hero-background.jpg"
          alt="Hero Background"
          fill
          priority
          sizes="100vw"
          quality={90}
          className={`object-cover transition-opacity duration-1000 ${
            isVideoLoaded ? "opacity-0" : "opacity-100"
          }`}
        />
        <div className="absolute inset-0 hero-gradient opacity-90" />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center text-white">
            <div
              className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur-sm animate-fade-in"
              style={{ transform: `translateY(${-scrollY * 0.2}px)` }}
            >
              Empowering Global Change
            </div>
            <h1
              className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl animate-slide-up"
              style={{ transform: `translateY(${-scrollY * 0.3}px)` }}
            >
              Amplifying Voices for a Sustainable Future
            </h1>
            <p
              className="mb-8 text-lg text-white/90 md:text-xl animate-fade-in"
              style={{ transform: `translateY(${-scrollY * 0.4}px)` }}
            >
              Join a global community dedicated to informing, inspiring, and empowering action towards a more
              sustainable, innovative, and peaceful world.
            </p>
            <div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in"
              style={{ transform: `translateY(${-scrollY * 0.5}px)` }}
            >
              <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90">
                <Link href="/register">
                  Join Our Community
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10">
                <Link href="/stories">Explore Stories</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Foreground Elements */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      />
    </div>
  )
}

export default ParallaxHero
