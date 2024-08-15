import Link from 'next/link'
import { Container } from '@/components/Container'

export function Introduction() {
  return (
    <section
      id="introduction"
      aria-label="Introduction"
      className="pb-16 pt-20 sm:pb-20 md:pt-36 lg:py-32"
    >
      <Container className="text-lg tracking-tight text-slate-700">
        <p className="font-display text-4xl font-bold tracking-tight text-slate-900">
          Notre contre-expertise, signée par des experts reconnus et des
          associations, pointe les manquements du rapport.
        </p>
        <p className="mt-4">
          En Mars 2024, la Commission a présente son rapport au président, qui
          vise a établir les grandes lignes de la stratégie française. Ce
          rapport est d'une incompétence scandaleuse.
        </p>
        <ul role="list" className="ml-8 mt-8 list-outside list-disc space-y-3">
          {[
            `Le rapport de la Commission de l'IA présente d'énormes manquements, 
            notamment en ignorant les risques existentiels liés à l'IA
            malgré l'avis de nombreux experts. Il semble être influencé par des 
            lobbys américains comme Meta.`,
            `Plus de 50% des experts en IA, 100% des experts en sécurité de 
            l'IA, et 60% des français sont inquiets des risques catastrophiques
            de l'IA, mais le rapport n'en tient pas compte, ce qui est a la fois
            anti-expert et anti-démocratique.`,
            `La législation proposée favoriserait une poignée de grandes 
            entreprises comme Meta au détriment des startups et entreprises
            françaises.`,
            `Yann LeCun, membre très influent de la Commission, semble être en 
            conflit d'intérêts et tenir des propos malhonnêtes pour pousser
            l'agenda de Meta.`,
            `Cédric O et Arthur Mensch, membres de la commission, ont ete au 
            centre d'un scandale de lobbying visant a saboter le projet de
            régulations européens`,
          ].map((item) => (
            <li key={item} className="pl-4 marker:text-brand-600">
              {/* <CheckIcon className="h-8 w-8 flex-none fill-blue-500" /> */}
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4">
          Autant de failles béantes qui ne peuvent que susciter une vive
          inquiétude et appellent de notre part une réaction ferme et
          déterminée. Nous ne pouvons accepter qu'un sujet aussi crucial pour
          notre avenir à tous soit ainsi traité avec ce qui s'apparente, au
          mieux à une forme de légèreté coupable, au pire à une véritable prise
          de contrôle par des intérêts particuliers au détriment de l'intérêt
          général.
        </p>
        <p className="mt-4">
          C'est pourquoi nous publions une contre-expertise détaillée et implacable, qui met en lumière sans
          concession les failles et les angles morts du rapport. Ce travail de
          fond, appuyé par de nombreux experts reconnus, est complété par une
          enquête sur les potentiels conflits d'intérêts ayant influencé les
          travaux de la Commission.
        </p>
        <p className="mt-4">
          Notre démarche se veut à la fois ferme sur les principes et ouverte
          sur le dialogue. Ferme, car nous ne transigerons pas sur la nécessité
          absolue d'un développement éthique et maîtrisé de l'IA, dans le
          respect de nos valeurs humanistes. Mais ouverte, car nous tendons la
          main à toutes les parties prenantes de bonne volonté, à commencer par
          la Commission elle-même, pour bâtir ensemble les solutions de demain.
          Notre objectif n'est pas la polémique stérile mais la construction
          d'un avenir où l'IA sera au service du bien commun.
        </p>
        <p className="mt-8 font-display text-2xl font-bold italic text-slate-900">
          Nous réclamons à la commission un addendum ou un deuxième rapport
          complémentaire qui prendrait en compte les risques futurs de l'IA, en
          auditionnant cette fois des experts en sécurité/alignement de l'IA.
        </p>
        <p className="mt-10">
          <Link
            href="#petition"
            className="text-base font-medium text-brand-700 hover:text-brand-900"
          >
            Signez notre pétition{' '}
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </p>
      </Container>
    </section>
  )
}
