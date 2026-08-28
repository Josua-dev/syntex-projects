import SimplePage from '../../components/SimplePage'
import { process } from '../../data/site'

export default function Approach() {
  return (
    <SimplePage
      eyebrow="Insights"
      title="Our engineering approach"
      breadcrumb={{ label: 'Insights', to: '/insights' }}
      lead="How Syntex takes a complex systems problem from first audit to a supported, standards-based environment."
      intro={[
        'We favour integration over isolated point products, design against international standards, and build systems a client\u2019s own team can operate confidently once we hand over.',
      ]}
      sections={[
        {
          heading: 'The delivery lifecycle',
          items: Array.isArray(process)
            ? process.map((s) => ({ label: `${s.n}. ${s.title}`, text: s.text }))
            : [],
        },
      ]}
    />
  )
}
