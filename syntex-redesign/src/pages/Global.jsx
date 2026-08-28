import SimplePage from '../components/SimplePage'
import { identity } from '../data/site'

/*
  SYNTEX — Global / regional reach.
  Grounded in the one verified international fact: the Border Control Management
  solution has been implemented in more than 10 countries. No other countries,
  offices or figures are claimed.
*/
export default function Global() {
  return (
    <SimplePage
      eyebrow="Reach"
      title="Namibian roots, regional and cross-border delivery."
      lead="Syntex delivers from Windhoek across Southern Africa — and, through its border management systems, well beyond it."
      intro={[
        `${identity.legal} is incorporated and headquartered in Namibia, and delivers technology across Southern Africa. Our reach is defined by the systems we run, not by a list of offices.`,
      ]}
      sections={[
        {
          heading: 'Cross-border systems',
          body: 'Our Border Control Management solution has been implemented in more than 10 countries — a genuinely cross-border deployment footprint that reflects the reliability and standards our systems are built to.',
        },
        {
          heading: 'How we work at distance',
          body: 'Engagements are run with project and change management, business process re-engineering and knowledge transfer, so systems can be operated by local teams once deployed — wherever they are.',
        },
      ]}
    />
  )
}
