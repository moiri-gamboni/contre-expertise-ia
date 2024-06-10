import Image from "next/image";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

import petitionBg from '@/images/cover.png'

export function Petition() {
  return (
    <section
      id="petition"
      aria-labelledby="petition-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="6" id="petition-title">
          Petition
        </SectionHeading>
      </Container>
      <div className="bg-white">
        <div className="mx-auto py-16 sm:py-24">
          <div className="relative overflow-hidden">
            <div className="relative bg-brand-600 px-6 py-32 sm:px-12 sm:py-40 lg:px-16">
              <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  <span className="block sm:inline">Chaque signature est importante</span>
                </h2>
                <p className="mt-3 text-xl text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras vehicula, nulla et volutpat tincidunt, ligula nisi facilisis purus, et bibendum risus eros in orci.
                </p>
                <a
                  href="#"
                  className="mt-8 block w-full rounded-md border border-transparent bg-white px-8 py-3 text-base font-semibold text-gray-900 hover:bg-gray-100 sm:w-auto"
                >
                  Demander un nouveau rapport
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
