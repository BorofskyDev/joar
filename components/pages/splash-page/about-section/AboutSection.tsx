import { Button, Heading, PText, TextLink } from '@/components/ui'
import styles from './AboutSection.module.scss'

export function AboutSection() {
    return (
      <section id='about-section' className={styles.aboutSection}>
        <Heading element='h2' variant='page' className={styles.heading}>
          journal of a recalcitrant
        </Heading>
        <div className={styles.content}>
          <PText>
            Journal of a Recalcitrant is an independent publication for those
            who can&apos;t unsee the cracks. Part personal essay, part cultural
            critique, discussing how faith, philosophy, tech, and various
            systems shape us.{' '}
          </PText>
          <PText>
            This journal exists for people who&apos;ve been burned by institutions
            and still choose to ask hard questions. It&apos;s not here to offer
            answers so much as to refuse easy ones. We choose to embrace
            clarity, honesty, and a recalcitrant approach to all those who&apos;d
            rather us go quietly.
          </PText>
        </div>
        <TextLink href='/about'>Read More About JoaR</TextLink>
        <Button type='button' variant='primary'>Subscribe</Button>
      </section> 
    )
}