import Link from 'next/link'
import { Container } from './Container'

const Contacts = () => {
  return (
    <div className="pt-16 pb-36">
      <Container className="text-center">
        <h2 className="text-center font-display text-4xl font-bold tracking-tight text-slate-900 mb-4">
          Contactez-nous
        </h2>
          <Link
            className="text-xl text-slate-700 hover:text-brand-700 hover:decoration-brand-800 hover:decoration-2"
            href="mailto:contact@contre-rapport-ia.fr"
          >
            contact@contre-rapport-ia.fr
          </Link>
      </Container>
    </div>
  )
}

export default Contacts
