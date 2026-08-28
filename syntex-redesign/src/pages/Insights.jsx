import { Link } from 'react-router-dom'
import SimplePage from '../components/SimplePage'

/*
  SYNTEX — Insights hub.
  The original surfaced several empty Insights sub-routes. Rather than a wall of
  "Coming Soon", this hub is honest: it states the intent and links only to the
  approach content that exists, with a clearly-labelled note for what's planned.
*/
export default function Insights() {
  return (
    <SimplePage
      eyebrow="Insights"
      title="How we think about enterprise technology."
      lead="Practical perspective from the team that designs, integrates and supports these systems."
      sections={[
        {
          heading: 'Our engineering approach',
          body: 'The principles behind every Syntex engagement — standards-led design, integration over point products, and knowledge transfer so clients stay in control.',
        },
      ]}
      cta={{ heading: 'Prefer to talk it through?', primaryLabel: 'Talk to Syntex', primary: '/contact' }}
    >
      <p className="sp-intro" style={{ marginTop: 'var(--s-6)' }}>
        <Link to="/insights/approach" className="about-inline-link">
          Read our approach →
        </Link>
      </p>
      <p style={{ color: 'var(--ink-faint)', fontSize: '0.85rem' }}>
        News, resources and case studies are published as they are cleared for
        release — we don't post placeholder content.
      </p>
    </SimplePage>
  )
}
