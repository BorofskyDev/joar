export type TipTapContent = {
  type: 'doc'
  content: TipTapNode[]
}

type TipTapNode = {
  type: string
  attrs?: Record<string, unknown>
  content?: TipTapNode[]
  marks?: TipTapMark[]
  text?: string
}

type TipTapMark = {
  type: string
  attrs?: Record<string, unknown>
}
