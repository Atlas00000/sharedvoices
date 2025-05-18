"use client"

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"
import dynamic from "next/dynamic"

// Import the editor dynamically to avoid SSR issues
const Editor = dynamic(() => import("@/components/editor"), {
  ssr: false,
  loading: () => <p>Loading editor...</p>,
})

interface Story {
  id?: string
  title: string
  content: string
  excerpt: string
  coverImage: string
  status: "DRAFT" | "PUBLISHED" | "ARCHIVED"
  categories: { id: string; name: string }[]
  tags: { id: string; name: string }[]
}

export default function StoryEditorPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [story, setStory] = useState<Story>({
    title: "",
    content: "",
    excerpt: "",
    coverImage: "",
    status: "DRAFT",
    categories: [],
    tags: [],
  })

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login")
    }
  }, [status, router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch("/api/stories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(story),
      })

      if (!response.ok) throw new Error("Failed to create story")

      const data = await response.json()
      toast.success("Story created successfully")
      router.push(`/stories/${data.slug}`)
    } catch (error) {
      toast.error("Failed to create story")
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setStory((prev) => ({ ...prev, [name]: value }))
  }

  const handleEditorChange = (content: string) => {
    setStory((prev) => ({ ...prev, content }))
  }

  if (status === "loading") {
    return <div>Loading...</div>
  }

  return (
    <div className="container mx-auto py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Create New Story</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                name="title"
                value={story.title}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <Label htmlFor="excerpt">Excerpt</Label>
              <Textarea
                id="excerpt"
                name="excerpt"
                value={story.excerpt}
                onChange={handleChange}
                rows={3}
              />
            </div>

            <div>
              <Label htmlFor="coverImage">Cover Image URL</Label>
              <Input
                id="coverImage"
                name="coverImage"
                type="url"
                value={story.coverImage}
                onChange={handleChange}
              />
            </div>

            <div>
              <Label>Content</Label>
              <div className="mt-2 border rounded-md">
                <Editor
                  value={story.content}
                  onChange={handleEditorChange}
                  placeholder="Write your story here..."
                />
              </div>
            </div>

            <div>
              <Label htmlFor="status">Status</Label>
              <select
                id="status"
                name="status"
                value={story.status}
                onChange={(e) =>
                  setStory((prev) => ({
                    ...prev,
                    status: e.target.value as Story["status"],
                  }))
                }
                className="w-full p-2 border rounded-md"
              >
                <option value="DRAFT">Draft</option>
                <option value="PUBLISHED">Published</option>
                <option value="ARCHIVED">Archived</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end space-x-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => router.back()}
              disabled={isLoading}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Saving..." : "Save Story"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
} 