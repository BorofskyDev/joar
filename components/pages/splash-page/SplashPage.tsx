import { PostPreviewCard } from '@/components/ui'
import { splashData } from './splashData'
import styles from './SplashPage.module.scss'
import { PageContainer } from '@/components/layout'

export function SplashPage() {
    return ( 
        <PageContainer>
            <PostPreviewCard {...splashData} />
        </PageContainer>
    )
}

