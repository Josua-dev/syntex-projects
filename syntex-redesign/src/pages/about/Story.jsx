import SimplePage from '../../components/SimplePage'
import { identity } from '../../data/site'

export default function Story() {
  return (
    <SimplePage
      eyebrow="About"
      title="Our story"
      breadcrumb={{ label: 'About', to: '/about' }}
      lead={`A Namibian ICT company, incorporated in ${identity.incorporated}.`}
      intro={[
        `${identity.legal} was incorporated in ${identity.incorporated} to solve complex operational and systems challenges for Namibian organisations — and to deliver solutions that genuinely fit each customer, rather than off-the-shelf answers stretched to fit.`,
        `As a subsidiary of ${identity.parent}, Syntex combines local presence with the delivery discipline of a larger group: project management, change management, business process re-engineering and knowledge transfer on every engagement.`,
      ]}
      sections={[
        {
          heading: 'What we set out to do',
          body: 'Become a recognised ICT service provider in the local industry, build lasting technology partnerships, and contribute to the communities we operate in — while keeping innovation, accountability and consistency at the centre of how we work.',
        },
      ]}
    />
  )
}
