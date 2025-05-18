import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Clock, User } from "lucide-react"
import type { Article } from "@/lib/types"

interface FeaturedArticleCardProps {
  article: Article
}

const FeaturedArticleCard = ({ article }: FeaturedArticleCardProps) => {
  return (
    <div className="group overflow-hidden rounded-lg border bg-card shadow-sm transition-all hover:shadow-md card-hover">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={article.image || "/placeholder.svg"}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 p-4">
          <Badge className="mb-2">{article.category}</Badge>
          <h3 className="mb-2 text-xl font-bold text-white md:text-2xl">{article.title}</h3>
          <div className="flex items-center gap-4 text-xs text-white/80">
            <div className="flex items-center gap-1">
              <User className="h-3 w-3" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>{article.readTime} min read</span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <p className="mb-4 line-clamp-2 text-muted-foreground">{article.excerpt}</p>
        <Link href={`/stories/${article.slug}`}>
          <Button variant="ghost" className="group/btn p-0 h-auto">
            Read more
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default FeaturedArticleCard
