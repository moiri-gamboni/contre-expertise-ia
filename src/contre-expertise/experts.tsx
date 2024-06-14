import avatarImage3 from '@/images/avatars/avatar-3.png'
import avatarImage4 from '@/images/avatars/avatar-4.png'
import avatarImage5 from '@/images/avatars/avatar-5.png'
import avatarImage6 from '@/images/avatars/avatar-6.png'
import avatarImage7 from '@/images/avatars/avatar-7.png'
import avatarImage8 from '@/images/avatars/avatar-8.png'
import avatarImage9 from '@/images/avatars/avatar-9.png'
import avatarImage10 from '@/images/avatars/avatar-10.png'
import avatarImage11 from '@/images/avatars/avatar-11.png'
import { StaticImageData } from 'next/image'

export interface Person {
  name: string
  role: string
  image?: StaticImageData
}

export const experts: Array<Person> = [
  {
    name: 'Antonio Littel',
    role: 'Frontend Developer',
    image: avatarImage3,
  },
  {
    name: 'Lynn Nolan',
    role: 'Growth Marketer',
    // image: avatarImage4,
  },
  {
    name: 'Krista Prosacco',
    role: 'Professional Designer',
    image: avatarImage9,
  },
  {
    name: 'Cameron Considine',
    role: 'Entrepreneur',
    image: avatarImage7,
  },
  {
    name: 'Regina Wisoky',
    role: 'Design Student',
    image: avatarImage11,
  },
  {
    name: 'Vernon Cummerata',
    role: 'UI Engineer',
    image: avatarImage8,
  },
  {
    name: 'Steven Hackett',
    role: 'Bootcamp Instructor',
    image: avatarImage5,
  },
  {
    name: 'Carla Schoen',
    role: 'Startup Founder',
    image: avatarImage10,
  },
  {
    name: 'Leah Kiehn',
    role: 'Creative Director',
    image: avatarImage6,
  },
  {
    name: 'Steven Hackett2',
    role: 'Bootcamp Instructor',
    image: avatarImage5,
  },
  {
    name: 'Carla Schoen2',
    role: 'Startup Founder',
    image: avatarImage10,
  },
  {
    name: 'Leah Kiehn2',
    role: 'Creative Director',
    image: avatarImage6,
  },
  {
    name: 'Antonio Littel2',
    role: 'Frontend Developer',
    image: avatarImage3,
  },
  {
    name: 'Lynn Nolan2',
    role: 'Growth Marketer',
    image: avatarImage4,
  },
  {
    name: 'Krista Prosacco2',
    role: 'Professional Designer',
    image: avatarImage9,
  },
  {
    name: 'Cameron Considine2',
    role: 'Entrepreneur',
    image: avatarImage7,
  },
  {
    name: 'Regina Wisoky2',
    role: 'Design Student',
    image: avatarImage11,
  },
  {
    name: 'Vernon Cummerata2',
    role: 'UI Engineer',
    image: avatarImage8,
  },
  {
    name: 'Steven Hackett3',
    role: 'Bootcamp Instructor',
    image: avatarImage5,
  },
  {
    name: 'Carla Schoen3',
    role: 'Startup Founder',
    image: avatarImage10,
  },
]
