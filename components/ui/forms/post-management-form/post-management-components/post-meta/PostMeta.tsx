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
  const SUMMARY_LIMIT = 280
  return (
    <div className={styles.postMeta}>
      <FormGroup
        id='title'
        name='title'
        type='text'
        label='Title'
        value={title}
        onChange={onChange}
        className={styles.title}
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
        as='textarea'
        label={`Summary (${summary.length}/${SUMMARY_LIMIT})`}
        value={summary}
        maxLength={SUMMARY_LIMIT}
        onChange={onChange}
        rows={4}
        required 
        className={styles.summary}
      />
    </div>
  )
}
