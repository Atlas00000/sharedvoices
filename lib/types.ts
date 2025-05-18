import type { ReactNode } from "react"

export interface Article {
  id: string
  title: string
  slug: string
  excerpt: string
  content?: string
  image: string
  category: string
  author: string
  date: string
  readTime: number
  featured?: boolean
}

export interface Stat {
  icon: ReactNode
  value: string
  label: string
}
