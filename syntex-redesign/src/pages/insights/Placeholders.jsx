import SimplePage from '../../components/SimplePage'

/*
  SYNTEX — honest placeholders for Insights sub-routes without published
  content yet (News, Resources, Case Studies). Routes resolve, but claim
  nothing. Not surfaced in the mega-nav until populated.
*/
function Placeholder({ title, line }) {
  return (
    <SimplePage
      eyebrow="Insights"
      title={title}
      breadcrumb={{ label: 'Insights', to: '/insights' }}
      lead={line}
      sections={[
        {
          heading: 'Nothing published yet',
          body: 'We publish here only when there is something real to share \u2014 no placeholder posts. Check back, or reach out directly.',
        },
      ]}
    />
  )
}

export function News() {
  return <Placeholder title="News" line="Company and project news will be posted here as it is released." />
}
export function Resources() {
  return <Placeholder title="Resources" line="Guides and technical resources are being prepared." />
}
export function CaseStudies() {
  return <Placeholder title="Case studies" line="Published case studies will appear here once clients approve release." />
}

export default Placeholder
