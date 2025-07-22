import Image from 'next/image'
import { LinkHeading, PText, TextLink } from '@/components/ui'
import styles from './PostPreviewCard.module.scss'

interface Image {
  src: string
  alt?: string
}

interface Author {
  name: string
  image: string
  link: string
}

export interface PostPreviewCardProps {
  catHref: string
  img: Image
  title: string
  summary: string
  author: Author
  date: string
  slug: string
}

export function PostPreviewCard({
  catHref,
  img,
  title,
  summary,
  author,
  date,
  slug,
}: PostPreviewCardProps) {
  return (
    <article className={styles.postPreviewCard}>
      <Image
        width={1690}
        height={960}
        layout='responsive'
        objectFit='cover'
        src={img.src}
        alt={img.alt || title}
        className={styles.image}
      />
      <TextLink href={catHref} className={styles.category}>
        {catHref.split('/').pop()}
      </TextLink>
      <LinkHeading href={slug} className={styles.title}>
        {title}
      </LinkHeading>
      <PText className={styles.summary}>{summary}</PText>
      <div className={styles.meta}>
        <TextLink href={author.link} className={styles.author}>
          {author.name}
        </TextLink>
        <Image
          width={40}
          height={40}
          src={author.image}
          className={styles.authorImage}
          layout='responsive'
          objectFit='cover'
          aria-hidden='true'
          alt={author.name || ``}
        />
        <PText variant='body-sm' className={styles.date}>
          {date}
        </PText>
      </div>
    </article>
  )
}
