'use client'

import { FormGroup } from '@/components/ui'
import styles from './PostMeta.module.scss'

interface PostMetaProps {
  title: string
  slug: string
  summary: string
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
}

export function PostMeta({ title, slug, summary, onChange }: PostMetaProps) {
  return (
    <div className={styles.postMeta}>
      <FormGroup
        id='title'
        name='title'
        type='text'
        label='Title'
        value={title}
        onChange={onChange}
        required
      />
   <div className={styles.slug}>
    <label htmlFor='slug' className={styles.slugLabel}>
        Slug: 
    </label>
    <span className={styles.slugValue}>{slug || '-'}</span>
   </div>
      <FormGroup
        id='summary'
        name='summary'
        type='text'
        label='Summary'
        value={summary}
        onChange={onChange}
        className={styles.summary}
        required
      />
    </div>
  )
}
