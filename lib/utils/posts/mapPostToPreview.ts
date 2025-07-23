import { PostPreviewCardProps } from '@/components/ui'

interface Post {
  imageUrl: string
  imageAlt?: string
  title: string
  summary: string
  
  category: {
    name: string
    slug: string
  }
  author: {
    name: string
    image: string
    link: string
  }
  createdAt: Date
  slug: string
  featured: boolean
}

export function mapPostToPreview(post: Post): PostPreviewCardProps {
  return {
    
    img: {
      src: post.imageUrl,
      alt: post.imageAlt || post.title,
    },
    catHref: `/categories/${post.category.slug}`,
    catName: post.category.name,
    title: post.title,
    summary: post.summary,
    author: {
      name: post.author.name,
      image: post.author.image,
      link: post.author.link,
    },
    date: post.createdAt.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
    slug: `/blog/${post.slug}`,
    featured: post.featured,
  }
}
