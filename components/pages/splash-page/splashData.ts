import { PostPreviewCardProps } from '@/components/ui/'

export const splashData: PostPreviewCardProps = {
  img: {
    src: '/img/blogimg.webp',
    alt: 'a marble statue of Mary mother of Jesus holding the body of Jesus in death, set against a smoky black background and a ray of light shining solely on the statue and nothing else in view',
  },
  catHref: '/categories/religion',
  title: 'thoughts on religion while I watch my father die',
  summary:
    "In the last few months of my father's life, despite all he had done to me and despite all I had done for him, he asked me for forgiveness. Such is the way of religion.",
  author: {
    name: 'Joel',
    image: '/img/joel-hat-cutout.png',
    link: '/about/joel',
  },
  date: 'July 21, 2025',
  slug: '/blog/thoughts-on-religion-while-i-watch-my-father-die',
  featured: true,
}
