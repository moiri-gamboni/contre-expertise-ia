import { StaticImageData } from "next/image"
import openAILogo from '@/images/associations/open_ai.svg'
import openAIWhiteLogo from '@/images/associations/open_ai_white.svg'

export interface Association {
  title: string
  image: StaticImageData
  url: string
  background: 'light' | 'dark'
}

export const associations: Array<Association> = [
  {
    title: 'Open AI',
    image: openAILogo,
    url: '#',
    background: 'light',
  },
  {
    title: 'Open AI2',
    image: openAIWhiteLogo,
    url: '#',
    background: 'dark',
  },
  {
    title: 'Open AI3',
    image: openAILogo,
    url: '#',
    background: 'light',
  },
]
