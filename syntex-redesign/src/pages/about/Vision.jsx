import SimplePage from '../../components/SimplePage'
import { vision } from '../../data/site'

export default function Vision() {
  return (
    <SimplePage
      eyebrow="About"
      title="Vision & mission"
      breadcrumb={{ label: 'About', to: '/about' }}
      lead={vision.text}
      sections={[
        {
          heading: 'Our mission',
          body: 'Become a recognised ICT service provider in the local industry; foster strategic partnerships that add value for clients; commit to the social development of the communities we operate in; and encourage a culture of innovation, accountability and consistency among our people.',
        },
        {
          heading: 'What guides the work',
          items: Array.isArray(vision.values)
            ? vision.values.map((v) => ({ label: v.title, text: v.text }))
            : [],
        },
      ]}
    />
  )
}
