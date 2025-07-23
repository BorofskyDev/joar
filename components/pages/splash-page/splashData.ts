import { PostPreviewCardProps } from '@/components/ui/'

export const splashData: PostPreviewCardProps = {
  img: {
    src: '/img/blogimg.webp',
    alt: 'a marble statue of Mary mother of Jesus holding the body of Jesus in death, set against a smoky black background and a ray of light shining solely on the statue and nothing else in view',
  },
  catHref: '/categories/religion',
  catName: 'Religion',
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
export const dummyPosts = [
  {
    id: 'post1',
    title: 'thoughts on religion while I watch my father die',
    summary:
      "In the last few months of my father's life, despite all he had done to me and despite all I had done for him, he asked me for forgiveness. Such is the way of religion.",
    slug: 'thoughts-on-religion-while-i-watch-my-father-die',
    imageUrl: '/img/blogimg.webp',
    imageAlt:
      'a marble statue of Mary mother of Jesus holding the body of Jesus in death, set against a smoky black background and a ray of light shining solely on the statue and nothing else in view',
    featured: true,
    createdAt: new Date('2025-07-21'),
    category: {
      name: 'Religion',
      slug: 'religion',
    },
    author: {
      name: 'Joel',
      image: '/img/joel-hat-cutout.png',
      link: '/about/joel',
    },
  },
  {
    id: 'post2',
    title: 'always fear the toolmaker more than the tool',
    summary:
      "AI isn't a sentient force or inevitable doom. It's just a tool, just like the first sharpened stone our ancestors used. And much like those old tools, the danger isn't the tool itself, it's the person wielding it.",
    slug: 'always-fear-the-toolmaker-more-than-the-tool',
    imageUrl: '/img/ai.webp',
    imageAlt:
      'graphic image of circuits and wires that look similar to a human brain',
    featured: false,
    createdAt: new Date('2025-07-20'),
    category: {
      name: 'Philosophy',
      slug: 'philosophy',
    },
    author: {
      name: 'Joel',
      image: '/img/joel-hat-cutout.png',
      link: '/about/joel',
    },
  },
  {
    id: 'post3',
    title: 'the coming economic devastation',
    summary:
      "trump's aggressive policies and reckless tariff wars are pushing the US economy toward a collapse. Ultimately, hubris will doom us all.",
    slug: 'the-coming-economic-devastation',
    imageUrl: '/img/graph.webp',
    imageAlt: 'graphic image of a downward trend in economic indicators',
    featured: false,
    createdAt: new Date('2025-07-19'),
    category: {
      name: 'Politics',
      slug: 'politics',
    },
    author: {
      name: 'Joel',
      image: '/img/joel-hat-cutout.png',
      link: '/about/joel',
    },
  },
  {
    id: 'post4',
    title:
      'between love and orthodoxy: part 1 - a reflection on the conservative takeover of american christianity',
    summary:
      "Think of the worst person you know. Not media personality, not politician, but someone you know in person who is someone you actively avoid. Chances are, they're a Christian. Why is that?",
    slug: 'between-love-and-orthodoxy-part-1',
    imageUrl: '/img/bible.webp',
    imageAlt:
      'a 3D printed heart placed on an open bible open to 1 Corinthians 14.',
    featured: false,
    createdAt: new Date('2025-07-18'),
    category: {
      name: 'Between Love and Orthodoxy',
      slug: 'between-love-and-orthodoxy',
    },
    author: {
      name: 'Joel',
      image: '/img/joel-hat-cutout.png',
      link: '/about/joel',
    },
  },
  {
    id: 'post5',
    title: 'a principled stance against bullies',
    summary:
      "We've all faced bullies, but what do we do when bullies become world leaders? You fight back, it's the only thing you can do.",
    slug: 'a-principled-stance-against-bullies',
    imageUrl: '/img/ukraine.webp',
    imageAlt:
      'ukrainian soldiers in tanks with ukrainian flags saluting in a parade',
    featured: false,
    createdAt: new Date('2025-07-17'),
    category: {
      name: 'philosophy',
      slug: 'philosophy',
    },
    author: {
      name: 'Joel',
      image: '/img/joel-hat-cutout.png',
      link: '/about/joel',
    },
  },
  {
    id: 'post6',
    title: 'reality tv, social media, and the death of america',
    summary:
      "America has always been a nation centered around celebrity and individualism, but the combiation of relality TV and social media have put this ethos on steroids. And it's come with severe consequences.",
    slug: 'reality-tv-social-media-and-the-death-of-america',
    imageUrl: '/img/reality.webp',
    imageAlt:
      'renaissance painting of the birth of Christ, indicating the celebrity surrounding events of significance',
    featured: false,
    createdAt: new Date('2025-07-16'),
    category: {
      name: 'culture',
      slug: 'culture',
    },
    author: {
      name: 'Joel',
      image: '/img/joel-hat-cutout.png',
      link: '/about/joel',
    },
  },
]
