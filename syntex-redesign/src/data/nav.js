/* SYNTEX — navigation + search index.
   Only real destinations are surfaced. Placeholder routes are NOT
   listed here (they resolve, but aren't promoted). */

export const nav = [
  {
    label: 'Solutions', path: '/solutions',
    heading: 'Solutions', description: 'Problem-led views over the systems we design, integrate and support.',
    groups: [
      { title: 'By capability', items: [
        { label: 'Security & Access', path: '/solutions/security-access' },
        { label: 'Enterprise Operations', path: '/solutions/enterprise-operations' },
      ]},
      { title: 'By function', items: [
        { label: 'Revenue Collection', path: '/solutions/revenue-collection' },
        { label: 'Governance & Assurance', path: '/solutions/governance-assurance' },
      ]},
    ],
  },
  {
    label: 'Services', path: '/services',
    heading: 'Services', description: 'Each capability delivered end to end — design, integration, deployment and support.',
    groups: [
      { title: 'Security', items: [
        { label: 'Access Control & Biometrics', path: '/services/access-control' },
        { label: 'Border Control Management', path: '/services/border-control' },
      ]},
      { title: 'Enterprise', items: [
        { label: 'Enterprise Business Systems', path: '/services/enterprise-systems' },
        { label: 'Human Resource Systems', path: '/services/human-resources' },
        { label: 'Utility & Billing Systems', path: '/services/utility-billing' },
      ]},
      { title: 'More', items: [
        { label: 'Advisory & Assurance', path: '/services/consulting' },
        { label: 'Hardware Supply', path: '/services/hardware-supply' },
      ]},
    ],
  },
  {
    label: 'Industries', path: '/industries',
    heading: 'Industries', description: 'Sectors where security, revenue integrity and continuity are non-negotiable.',
    groups: [
      { title: 'Primary', items: [
        { label: 'Government', path: '/industries/government' },
        { label: 'Utilities & Energy', path: '/industries/utilities' },
        { label: 'Enterprise', path: '/industries/enterprise' },
      ]},
      { title: 'Also serving', items: [
        { label: 'Financial Services', path: '/industries/financial-services' },
        { label: 'Telecommunications', path: '/industries/telecommunications' },
        { label: 'Education & Health', path: '/industries/education-health' },
      ]},
    ],
  },
  {
    label: 'Projects', path: '/projects',
    heading: 'Projects & deployments', description: 'Where Syntex technology is deployed.',
    groups: [
      { title: 'Explore', items: [
        { label: 'Published deployments', path: '/projects' },
        { label: 'Hardware supply', path: '/hardware' },
        { label: 'Global reach', path: '/global' },
      ]},
    ],
  },
  {
    label: 'About', path: '/about',
    heading: 'About Syntex', description: 'A Namibian ICT company, incorporated 2008 in Windhoek.',
    groups: [
      { title: 'Company', items: [
        { label: 'Our Story', path: '/about/story' },
        { label: 'Vision & Mission', path: '/about/vision-mission' },
        { label: 'Core Values', path: '/about/values' },
      ]},
      { title: 'More', items: [
        { label: 'Insights', path: '/insights' },
        { label: 'Contact', path: '/contact' },
      ]},
    ],
  },
]

export const searchIndex = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'solutions', label: 'Solutions', path: '/solutions' },
  { id: 'sec-access', label: 'Security & Access', path: '/solutions/security-access' },
  { id: 'ent-ops', label: 'Enterprise Operations', path: '/solutions/enterprise-operations' },
  { id: 'services', label: 'Services', path: '/services' },
  { id: 'access-control', label: 'Access Control & Biometrics', path: '/services/access-control' },
  { id: 'border', label: 'Border Control Management', path: '/services/border-control' },
  { id: 'erp', label: 'Enterprise Business Systems', path: '/services/enterprise-systems' },
  { id: 'hr', label: 'Human Resource Systems', path: '/services/human-resources' },
  { id: 'billing', label: 'Utility & Billing Systems', path: '/services/utility-billing' },
  { id: 'consulting', label: 'Advisory & Assurance', path: '/services/consulting' },
  { id: 'hardware', label: 'Hardware Supply', path: '/hardware' },
  { id: 'industries', label: 'Industries', path: '/industries' },
  { id: 'government', label: 'Government', path: '/industries/government' },
  { id: 'utilities', label: 'Utilities & Energy', path: '/industries/utilities' },
  { id: 'projects', label: 'Projects & Deployments', path: '/projects' },
  { id: 'about', label: 'About Syntex', path: '/about' },
  { id: 'contact', label: 'Contact', path: '/contact' },
]
