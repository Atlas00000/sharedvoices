"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, Clock, User } from "lucide-react"
import type { Article } from "@/lib/types"

interface FeaturedStoryHeroProps {
  article: Article
}

const FeaturedStoryHero = ({ article }: FeaturedStoryHeroProps) => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
        <Image
          src={article.image || "/placeholder.svg?height=1080&width=1920"}
          alt={article.title}
          fill
          priority
          sizes="100vw"
          quality={90}
          className="object-cover transition-transform duration-700 hover:scale-105"
          style={{ transform: `scale(${1 + scrollY * 0.0005})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 backdrop-blur-[2px]" />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl">
            <Badge className="mb-4 animate-fade-in">{article.category}</Badge>
            <h1
              className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl animate-slide-up"
              style={{ transform: `translateY(${-scrollY * 0.2}px)` }}
            >
              {article.title}
            </h1>
            <p
              className="mb-8 text-lg text-white/90 md:text-xl animate-fade-in"
              style={{ transform: `translateY(${-scrollY * 0.3}px)` }}
            >
              {article.excerpt}
            </p>
            <div
              className="flex flex-wrap items-center gap-6 mb-8 text-white/80 animate-fade-in"
              style={{ transform: `translateY(${-scrollY * 0.4}px)` }}
            >
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{article.readTime} min read</span>
              </div>
            </div>
            <Button
              size="lg"
              className="group animate-fade-in"
              style={{ transform: `translateY(${-scrollY * 0.5}px)` }}
              asChild
            >
              <Link href={`/stories/${article.slug}`}>
                Read Full Story
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedStoryHero
