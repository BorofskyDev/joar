import { PostPreviewCard } from '@/components/ui'
import { splashData } from './splashData'
import { PageContainer } from '@/components/layout'
import styles from './SplashPage.module.scss'

export function SplashPage() {
    return ( 
        <PageContainer>
            <PostPreviewCard {...splashData} />
        </PageContainer>
    )
}

