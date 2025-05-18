import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User } from "lucide-react"
import type { Article } from "@/lib/types"

interface ArticleCardProps {
  article: Article
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <Link href={`/stories/${article.slug}`}>
      <div className="group overflow-hidden rounded-lg border bg-card shadow-sm transition-all hover:shadow-md card-hover">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={article.image || "/placeholder.svg"}
            alt={article.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={85}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
        <div className="p-4">
          <div className="mb-2 flex items-center gap-2">
            <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
              {article.category}
            </Badge>
            {article.featured && (
              <Badge
                variant="outline"
                className="bg-amber-500/10 text-amber-500 hover:bg-amber-500/20 border-amber-500/20"
              >
                Featured
              </Badge>
            )}
          </div>
          <h3 className="mb-2 line-clamp-2 text-xl font-bold tracking-tight text-balance">{article.title}</h3>
          <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">{article.excerpt}</p>
          <div className="flex items-center justify-between text-xs text-muted-foreground">
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
    </Link>
  )
}

export default ArticleCard
