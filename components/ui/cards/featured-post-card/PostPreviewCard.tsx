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
  catName: string
  img: Image
  title: string
  summary: string
  author: Author
  date: string
  slug: string
  featured?: boolean
}

export function PostPreviewCard({
  catHref,
  catName,
  img,
  title,
  summary,
  author,
  date,
  slug,
  featured,
}: PostPreviewCardProps) {
  return (
    <article
      className={`${styles.postPreviewCard} ${featured ? styles.featured : styles.default}`}
    >
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
        {catName}
      </TextLink>
      <LinkHeading href={slug} className={styles.title}>
        {title}
      </LinkHeading>
      <PText className={styles.summary}>{summary}</PText>
      <div className={styles.meta}>
        <div className={styles.authorInfo}>
          <div className={styles.authorImageWrapper}>
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
          </div>
          <TextLink href={author.link} className={styles.author}>
            {author.name}
          </TextLink>
        </div>
        <PText variant='body-sm' className={styles.date}>
          {date}
        </PText>
      </div>
    </article>
  )
}
