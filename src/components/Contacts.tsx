import Image from "next/image";

import { Container } from "./Container";

import PauseaiImage from '@/images/associations/pauseai.svg'

const Contacts = () => {
  return (
    <div className="py-16">
      <Container>
        <h2 className="font-bold text-center text-3xl sm:text-4xl text-slate-700 tracking-tight">
          Contact the organisations
        </h2>
        <div className="text-xl mx-auto mt-12 grid max-w-lg grid-cols-1 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:gap-x-10 md:grid-cols-3 lg:mx-0 lg:max-w-none ">
          <div className="col-span-1 w-full h-full flex flex-col gap-y-8 justify-around items-center">
            <Image
              className="max-h-24 object-contain"
              src={PauseaiImage}
              alt="Logo PauseAI"
            />
            <span className="text-center text-slate-700">hello@example.org</span>
          </div>

          <div className="col-span-1 w-full h-full flex flex-col gap-y-8 justify-around items-center">
            <Image
              className="max-h-24 object-contain"
              src={PauseaiImage}
              alt="Logo PauseAI"
              unoptimized
            />
            <span className="text-center text-slate-700">hello@example.org</span>
          </div>

          <div className="col-span-1 w-full h-full flex flex-col gap-y-8 justify-around items-center">
            <Image
                className="max-h-24 object-contain"
              src={PauseaiImage}
              alt="Logo PauseAI"
            />
            <span className="text-center text-slate-700">hello@example.org</span>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Contacts;
