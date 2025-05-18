import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { prisma } from "@/lib/prisma"
import { authOptions } from "../../auth/[...nextauth]/route"
import slugify from "slugify"

// GET /api/stories/[storyId] - Get a single story
export async function GET(
  req: Request,
  { params }: { params: { storyId: string } }
) {
  try {
    const story = await prisma.story.findUnique({
      where: {
        id: params.storyId,
      },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            image: true,
          },
        },
        categories: true,
        tags: true,
      },
    })

    if (!story) {
      return new NextResponse("Story not found", { status: 404 })
    }

    return NextResponse.json(story)
  } catch (error) {
    console.error("[STORY_GET]", error)
    return new NextResponse("Internal error", { status: 500 })
  }
}

// PATCH /api/stories/[storyId] - Update a story
export async function PATCH(
  req: Request,
  { params }: { params: { storyId: string } }
) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.email) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    const body = await req.json()
    const { title, content, excerpt, coverImage, status, categories, tags } = body

    const story = await prisma.story.findUnique({
      where: {
        id: params.storyId,
      },
      include: {
        author: true,
      },
    })

    if (!story) {
      return new NextResponse("Story not found", { status: 404 })
    }

    if (story.author.email !== session.user.email) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    const updatedStory = await prisma.story.update({
      where: {
        id: params.storyId,
      },
      data: {
        title,
        slug: title ? slugify(title, { lower: true, strict: true }) : undefined,
        content,
        excerpt,
        coverImage,
        status,
        publishedAt: status === "PUBLISHED" ? new Date() : undefined,
        categories: {
          set: categories?.map((id: string) => ({ id })) || [],
        },
        tags: {
          set: tags?.map((id: string) => ({ id })) || [],
        },
      },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            image: true,
          },
        },
        categories: true,
        tags: true,
      },
    })

    return NextResponse.json(updatedStory)
  } catch (error) {
    console.error("[STORY_PATCH]", error)
    return new NextResponse("Internal error", { status: 500 })
  }
}

// DELETE /api/stories/[storyId] - Delete a story
export async function DELETE(
  req: Request,
  { params }: { params: { storyId: string } }
) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.email) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    const story = await prisma.story.findUnique({
      where: {
        id: params.storyId,
      },
      include: {
        author: true,
      },
    })

    if (!story) {
      return new NextResponse("Story not found", { status: 404 })
    }

    if (story.author.email !== session.user.email) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    await prisma.story.delete({
      where: {
        id: params.storyId,
      },
    })

    return new NextResponse(null, { status: 204 })
  } catch (error) {
    console.error("[STORY_DELETE]", error)
    return new NextResponse("Internal error", { status: 500 })
  }
} 