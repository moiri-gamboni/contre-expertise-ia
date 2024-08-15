import Image from "next/image";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

import petitionBg from '@/images/cover.png'
import { Button } from "./Button";

export function Petition() {
  return (
    <section
      id="petition"
      aria-labelledby="petition-title"
      className="-scroll-mt-14 overflow-hidden py-16 pt-24 sm:scroll-mt-16 sm:py-24 lg:py-32 lg:pt-44"
    >
      <div className="mx-auto bg-brand-600 px-6 py-32 sm:px-12 sm:py-40 lg:px-16">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-left lg:text-center">
          <h2
            id="petition-title"
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            <span className="block sm:inline">
              Chaque signature est importante
            </span>
          </h2>
          <p className="mt-3 text-xl tracking-tight text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia odio vitae vestibulum vestibulum. Cras vehicula, nulla et
            volutpat tincidunt, ligula nisi facilisis purus, et bibendum risus
            eros in orci.
          </p>
          <Button variant="solid" color="white" className="mt-8 px-8 py-3">
            Demander un nouveau rapport
          </Button>
        </div>
      </div>
    </section>
  )
}
