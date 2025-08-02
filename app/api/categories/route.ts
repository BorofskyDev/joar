import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/server/prisma' // your prisma wrapper
import { generateSlug } from '@/lib'

export async function POST(req: NextRequest) {
  try {
    const { name, description = '' } = (await req.json()) as {
      name?: string
      description?: string
    }

    if (!name?.trim()) {
      return NextResponse.json({ error: 'Name is required' }, { status: 400 })
    }

    const slug = generateSlug(name)
    const category = await prisma.category.create({
      data: {
        name: name.trim(),
        description: description.trim(),
        slug,
      },
    })

    return NextResponse.json(category, { status: 201 })
  } catch (err) {
    console.error(err)
    return NextResponse.json(
      { error: 'Failed to create category' },
      { status: 500 }
    )
  }
}
