import SimplePage from '../../components/SimplePage'

/*
  SYNTEX — honest placeholders for About sub-routes that don't yet have
  publishable content (Leadership, Team, Careers, Departments). These routes
  still resolve (deep links / old bookmarks won't 404), but they DON'T pretend
  to have data. They are intentionally NOT surfaced in the mega-nav.
  Each is a tiny named export so App.jsx can lazy-import them individually.
*/

function Placeholder({ title, line }) {
  return (
    <SimplePage
      eyebrow="About"
      title={title}
      breadcrumb={{ label: 'About', to: '/about' }}
      lead={line}
      sections={[
        {
          heading: 'Not yet published',
          body: 'This information is being prepared and will be published once cleared for release. In the meantime, we\u2019re happy to answer questions directly.',
        },
      ]}
      cta={{ heading: 'Want these details now?', primaryLabel: 'Contact Syntex', primary: '/contact' }}
    />
  )
}

export function Leadership() {
  return <Placeholder title="Leadership" line="Our leadership profiles are being prepared for publication." />
}
export function Team() {
  return <Placeholder title="Team" line="Team and capability profiles are being prepared for publication." />
}
export function Careers() {
  return <Placeholder title="Careers" line="Current openings and how to apply will be posted here." />
}
export function Departments() {
  return <Placeholder title="Departments" line="Our departmental structure is being prepared for publication." />
}

export default Placeholder
