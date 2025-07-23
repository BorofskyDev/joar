import { Button, Heading, PText, TextLink } from '@/components/ui'
import { ContentContainer, CtaSectionContainer } from '@/components/layout'

export function AboutSection() {
  return (
    <CtaSectionContainer id='about-section'>
      <Heading element='h2' variant='page'>
        journal of a recalcitrant
      </Heading>
      <ContentContainer>
        <PText>
          Journal of a Recalcitrant is an independent publication for those who
          can&apos;t unsee the cracks. Part personal essay, part cultural
          critique, discussing how faith, philosophy, tech, and various systems
          shape us.{' '}
        </PText>
        <PText>
          This journal exists for people who&apos;ve been burned by institutions
          and still choose to ask hard questions. It&apos;s not here to offer
          answers so much as to refuse easy ones. We choose to embrace clarity,
          honesty, and a recalcitrant approach to all those who&apos;d rather us
          go quietly.
        </PText>
      </ContentContainer>
      <TextLink href='/about'>Read More About JoaR</TextLink>
      <Button type='button' variant='primary'>
        Subscribe
      </Button>
    </CtaSectionContainer>
  )
}
