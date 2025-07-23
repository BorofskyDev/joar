import { mapPostToPreview } from '@/lib'
import { dummyPosts } from '@/components/pages/splash-page/splashData'
import { WrapSectionContainer } from '@/components/layout'
import { Button, PostPreviewCard } from '@/components/ui'
import styles from './PostsSection.module.scss'

export function PostsSection() {
  const previews = dummyPosts
    .filter((post) => !post.featured)
    .map(mapPostToPreview)
    .slice(0, 3)
  return (
    <div className={styles.postsSection}>
      <WrapSectionContainer id='all-posts' title='Posts'>
        {previews.map((post, idx) => {
          return <PostPreviewCard key={idx} {...post} />
        })}
      </WrapSectionContainer>
      <Button type='button' variant='primary'>
        Load More Posts
      </Button>
    </div>
  )
}
