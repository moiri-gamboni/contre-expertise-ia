import Link from 'next/link'

import { CheckIcon } from '@/components/CheckIcon'
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
          Nôtre contre-expertise, signée par des experts reconnus et des
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
        <p className="mt-8">
          Autant de failles béantes qui ne peuvent que susciter une vive
          inquiétude et appellent de notre part une réaction ferme et
          déterminée. Nous ne pouvons accepter qu'un sujet aussi crucial pour
          notre avenir à tous soit ainsi traité avec ce qui s'apparente, au
          mieux à une forme de légèreté coupable, au pire à une véritable prise
          de contrôle par des intérêts particuliers au détriment de l'intérêt
          général.
        </p>
        <p className="mt-8">
          C'est tout le sens de la démarche dans laquelle nous nous engageons
          aujourd'hui avec le lancement de Pause AI France. En tant
          qu'association pleinement engagée pour une approche responsable et
          éthique de l'IA, il est de notre devoir de tirer la sonnette d'alarme
          face à ces manquements graves. Nous ne pouvons laisser ces conclusions
          erronées et biaisées orienter la politique française sur un sujet
          aussi crucial pour notre avenir commun. L'heure n'est plus à la
          complaisance mais à l'action déterminée.
        </p>
        <p className="mt-8">
          C'est pourquoi nous lançons aujourd'hui ce projet, articulé autour de
          deux volets complémentaires :
        </p>
        <ul role="list" className="ml-8 mt-8 list-outside list-disc space-y-3">
          {[
            `La production d'une contre-expertise détaillée et implacable,qui 
            mettra en lumière sans concession les failles et les angles morts
            du rapport. Ce travail de fond, appuyé par de nombreux experts
            reconnus, sera complété par une enquête sur les potentiels conflits
            d'intérêts ayant influencé les travaux de la Commission.`,
            `L'organisation d'une conférence de presse pour rendre publics ces 
            éléments et poser les bases d'un débat national éclairé sur le
            sujet. Cet événement marquera également le lancement officiel de
            notre antenne française, Pause AI France.`,
          ].map((item) => (
            <li key={item} className="pl-4 marker:text-brand-600">
              {/* <CheckIcon className="h-8 w-8 flex-none fill-blue-500" /> */}
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8">
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
            href="#email-commission"
            className="text-base font-medium text-brand-600 hover:text-brand-800"
          >
            Écrivez aux co-présidents de la commission{' '}
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </p>
      </Container>
    </section>
  )
}
