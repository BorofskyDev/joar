import localFont from 'next/font/local'

export const playfair = localFont({
  src: [
    {
      path: './fonts/playfair/Playfair-VariableFont_opsz,wdth,wght.ttf',
      style: 'normal',
    },
    {
      path: './fonts/playfair/Playfair-Italic-VariableFont_opsz,wdth,wght.ttf',
      style: 'italic',
    },
  ],
  display: 'swap',
  variable: '--font-playfair',
})


export const atkinsonNext = localFont({
  src: [
    {
      path: './fonts/atkinson/AtkinsonHyperlegibleNext-VariableFont_wght.ttf',
      style: 'normal',
    },
    {
      path: './fonts/atkinson/AtkinsonHyperlegibleNext-Italic-VariableFont_wght.ttf',
      style: 'italic',
    },
  ],
  display: 'swap',
  variable: '--font-atkinson',
})

export const atkinsonMono = localFont({
  src: [
    {
      path: './fonts/atkinson-mono/AtkinsonHyperlegibleMono-VariableFont_wght.ttf',
      style: 'normal',
    },
    {
      path: './fonts/atkinson-mono/AtkinsonHyperlegibleMono-Italic-VariableFont_wght.ttf',
      style: 'italic',
    },
  ],
  display: 'swap',
  variable: '--font-atkinson-mono',
})
