'use client'

import { Button } from '@/components/ui'
import { useCreatePost } from '@/lib'
import { RichTextEditor } from '@/components/ui'
import { PostMeta } from './post-management-components'
import styles from './PostManager.module.scss'

interface PostManagerProps {
  edit?: boolean // default = false
}

export function PostManager({ edit = false }: PostManagerProps) {
  const {
    title,
    slug,
    summary,
    content,
    handleInputChange,
    setContent,
    handleSubmit,
    loading,
    error,
  } = useCreatePost()

  return (
    <form onSubmit={handleSubmit} className={styles.postManager}>
      <PostMeta
        title={title}
        slug={slug}
        summary={summary}
        onChange={handleInputChange}
      />

      <RichTextEditor value={content} onChange={setContent} />

      <Button type='submit' variant='primary' disabled={loading}>
        {loading
          ? edit
            ? 'Saving Changes…'
            : 'Publishing…'
          : edit
          ? 'Save Changes'
          : 'Save Post'}
      </Button>

      {error && <p className={styles.error}>{error}</p>}
    </form>
  )
}
