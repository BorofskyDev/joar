'use client'

import { PageContainer } from '@/components/layout'
import { Heading, PostManager } from '@/components/ui'


import styles from './CreatePostPage.module.scss'

export function CreatePostPage() {

  return (
    <PageContainer className={styles.createPostPage}>
      <Heading element='h1' variant='page'>
        Create Post
      </Heading>

      <PostManager />
    </PageContainer>
  )
}
