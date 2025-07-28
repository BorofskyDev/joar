import { Node, mergeAttributes } from '@tiptap/core'

export const FigureImage = Node.create({
  name: 'figureImage',
  group: 'block',
  atom: true,

  addAttributes() {
    return {
      src: {
        default: null,
      },
      alt: {
        default: '',
      },
      caption: {
        default: '',
      },
    }
  },

  parseHTML() {
    return [
      {
        tag: 'figure[data-type="figure-image"]',
      },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    const { src, alt, caption } = HTMLAttributes

    return [
      'figure',
      mergeAttributes({ 'data-type': 'figure-image' }),
      ['img', { src, alt }],
      caption ? ['figcaption', {}, caption] : '',
    ]
  },
})
