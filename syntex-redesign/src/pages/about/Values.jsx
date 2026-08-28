import SimplePage from '../../components/SimplePage'
import { vision } from '../../data/site'

export default function Values() {
  return (
    <SimplePage
      eyebrow="About"
      title="Core values"
      breadcrumb={{ label: 'About', to: '/about' }}
      lead="The principles behind every Syntex engagement — applied consistently, regardless of client size or sector."
      sections={[
        {
          heading: 'What we stand for',
          items: Array.isArray(vision.values)
            ? vision.values.map((v) => ({ label: v.title, text: v.text }))
            : [],
        },
      ]}
    />
  )
}
