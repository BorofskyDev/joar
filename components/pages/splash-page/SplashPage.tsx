import { PostPreviewCard } from '@/components/ui'
import { splashData } from './splashData'
import { PageContainer } from '@/components/layout'
import styles from './SplashPage.module.scss'
import { AboutSection } from './about-section/AboutSection'
import { PostsSection } from './posts-section/PostsSection'

export function SplashPage() {
    return ( 
        <PageContainer className={styles.splashPage}>
            <PostPreviewCard {...splashData} />
            <AboutSection />
            <PostsSection />
        </PageContainer>
    )
}

