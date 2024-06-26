import Image, { StaticImageData } from "next/image";

import PauseaiImage from '@/images/associations/pauseai.svg'

import { Container } from "./Container";

interface ContactItem {
  img: StaticImageData;
  imgAlt: string;
  email: string;
}

const contacts: Array<ContactItem> = [
  {
    img: PauseaiImage,
    imgAlt: 'PauseAI logo',
    email: 'hello@example.org',
  },
  {
    img: PauseaiImage,
    imgAlt: 'PauseAI logo',
    email: 'hello@example.org',
  },
  {
    img: PauseaiImage,
    imgAlt: 'PauseAI logo',
    email: 'hello@example.org',
  },
]


const OrganisationContact = ({ contact } : { contact: ContactItem}) => {
  return (
    <div className="col-span-1 w-full h-full flex flex-col gap-y-8 justify-around items-center">
      <Image
        className="max-h-24 object-contain"
        src={contact.img}
         alt={contact.imgAlt}
      />
    <span className="text-center text-slate-700">{contact.email}</span>
  </div>
  )
};


const Contacts = () => {
  return (
    <div className="py-16">
      <Container>
        <h2 className="font-display font-bold text-center text-4xl text-slate-900 tracking-tight">
          Contacter les associations
        </h2>
        <div className="text-xl mx-auto mt-12 grid max-w-lg grid-cols-1 items-center gap-x-10 gap-y-12
                        sm:max-w-xl
                        md:grid-cols-3
                        lg:max-w-none ">
          {contacts.map((contact, idx) => (
            <OrganisationContact key={`contact_${idx}`} contact={contact} />
          ))}
        </div>
      </Container>
    </div>
  )
};

export default Contacts;
