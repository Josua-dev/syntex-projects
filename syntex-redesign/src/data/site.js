/* =============================================================
   SYNTEX — verified content model.
   Facts confirmed from syntexnam.com (Home/About/Contact) and a
   verified business listing. Anything not publicly published is
   marked verified:false and must not be presented as fact.
   NOTE: reconcile this with your existing repo site.js if field
   names differ — the redesign pages read the keys defined here.
   ============================================================= */

export const identity = {
  name: 'Syntex Technologies',
  legal: 'Syntex Technologies (Pty) Ltd',
  incorporated: '2008',
  parent: 'the Syntex group',       // adjust/remove if not applicable
  region: 'Windhoek',
  country: 'Namibia',
  emailSales: 'sales@syntexnam.com',
  emailSupport: 'support@syntexnam.com',
  phone: '+264 61 309 171',
  phoneHref: '+26461309171',
  fax: '+264 61 309 172',
  hq: {
    line1: '340 Sam Nujoma Drive',
    line2: 'Klein Windhoek, Windhoek',
    line3: 'Khomas Region, Namibia',
    geo: { lat: -22.57264, lon: 17.1076775 }, // VERIFIED
  },
}

export const company = { founded: 2008 }

export const heroMessage = {
  eyebrow: 'ICT Systems Integrator · Windhoek, Namibia',
  sub: 'Syntex designs, integrates and supports the enterprise software, security, border management, utility billing and infrastructure that Namibian and regional operations depend on — from scoping through to long-term support.',
}

export const vision = {
  text: 'To provide technology solutions in Southern Africa with the highest level of Innovation, Accountability and Consistency.',
  values: [
    { n: '01', title: 'Innovation', text: 'We prioritise innovation and provide cutting-edge solutions that keep clients ahead in a changing world.' },
    { n: '02', title: 'Accountability', text: 'We take responsibility for our actions and deliver on our commitments.' },
    { n: '03', title: 'Consistency', text: 'We strive for consistency so our solutions meet the highest standards and deliver reliable results.' },
    { n: '04', title: 'Integrity', text: 'We prioritise transparency and ethical standards in all our actions and decisions.' },
    { n: '05', title: 'Collaboration', text: 'We work closely with clients, partners and colleagues to achieve shared goals.' },
    { n: '06', title: 'Customer-centricity', text: 'We understand individual client needs and provide customised solutions built on trust.' },
  ],
}

const area = (slug, category, title, intro, body, systems = [], outcomes = []) =>
  ({ slug, category, title, intro, body, systems, outcomes, url: `/services/${slug}` })

export const serviceAreas = [
  area('access-control', 'Security', 'Access Control & Biometrics',
    'Control who enters, and what they can access.',
    'State-of-the-art access control that integrates advanced security technologies with enterprise networking for full-featured, integrated security.',
    ['Biometric readers', 'Card & PIN access', 'Networked door control', 'Audit & reporting'],
    ['Controlled, auditable physical access', 'Integrated with enterprise networks']),
  area('border-control', 'Security', 'Border Control Management',
    'Manage immigration across national borders.',
    'A border control management solution providing a convenient way to manage immigration across national borders — implemented in more than 10 countries.',
    ['Traveller processing', 'Watchlist checks', 'Multi-post deployment'],
    ['Faster, standardised border processing', 'Proven cross-border deployment']),
  area('enterprise-systems', 'Enterprise', 'Enterprise Business Systems',
    'One real-time view of core operations.',
    'Comprehensive software that integrates business processes, functions and resources into a unified system for efficient planning, monitoring and decision-making.',
    ['Process integration', 'Centralised reporting', 'Real-time dashboards'],
    ['A single operating record', 'Faster, better-informed decisions']),
  area('human-resources', 'Enterprise', 'Human Resource Systems',
    'The full employee lifecycle in one place.',
    'HR systems covering applicant tracking, interview scheduling, salary and benefits administration, job history, appraisals, training and certification, attendance, and incident reporting.',
    ['Applicant tracking', 'Payroll & benefits', 'Performance & training', 'Attendance'],
    ['Less administration', 'Compliant, auditable HR records']),
  area('utility-billing', 'Enterprise', 'Utility & Billing Systems',
    'Complete control from meter to disconnection.',
    'A utility and billing system giving organisations complete control over readings, adjustments, complex pricing, receipts, connections and disconnections.',
    ['Meter readings', 'Complex tariffs', 'Receipts & adjustments', 'Connections'],
    ['Accurate revenue collection', 'Full command of billing processes']),
  area('consulting', 'Consulting', 'Advisory & Assurance',
    'Change delivered with governance.',
    'Consulting across project management, change management, business process re-engineering, and ICT & security audit — grounded in best practice and international standards.',
    ['Project management', 'Change management', 'BPR', 'ICT & security audit'],
    ['Lower delivery risk', 'Standards-based governance']),
  area('hardware-supply', 'Infrastructure', 'Hardware Supply & Delivery',
    'Enterprise hardware, delivered to site.',
    'Servers, laptops, desktops, PC accessories and printers — sourced from technology partners and delivered across Namibia.',
    ['Servers', 'Endpoints', 'Printers & scanners'],
    ['One accountable supplier', 'Delivered and supported locally']),
]

export const solutions = [
  { slug: 'security-access', lens: 'By Capability', title: 'Security & Access',
    intro: 'Uncontrolled access and manual border processing create risk and delay.',
    body: 'We combine access control, biometrics and border management into one supported security capability, integrated with enterprise networks.',
    services: ['access-control', 'border-control'] },
  { slug: 'enterprise-operations', lens: 'By Capability', title: 'Enterprise Operations',
    intro: 'Disconnected systems fragment the view of the business.',
    body: 'ERP, HR and utility billing brought into a unified, real-time operating record.',
    services: ['enterprise-systems', 'human-resources', 'utility-billing'] },
  { slug: 'revenue-collection', lens: 'By Function', title: 'Revenue Collection',
    intro: 'Complex tariffs and manual billing leak revenue.',
    body: 'End-to-end metering, complex pricing, receipts and disconnections under full control.',
    services: ['utility-billing', 'enterprise-systems'] },
  { slug: 'governance-assurance', lens: 'By Function', title: 'Governance & Assurance',
    intro: 'Change without governance is change at risk.',
    body: 'Project and change management, BPR and ICT & security audit wrapped around every deployment.',
    services: ['consulting', 'access-control'] },
]

const ind = (slug, title, short, intro, challenge, response, services) =>
  ({ slug, title, short, intro, challenge, response, services })

export const industries = [
  ind('government', 'Government & Public Sector', 'Government',
    'Border control, security and enterprise systems for public institutions.',
    'Public bodies must process people and revenue reliably, securely and to standard.',
    'We deploy border management, access control and enterprise systems that meet those demands.',
    ['border-control', 'access-control', 'enterprise-systems']),
  ind('utilities', 'Utilities & Energy', 'Utilities',
    'Metering, complex billing and revenue management.',
    'Revenue integrity depends on accurate metering and complex tariff handling.',
    'Our utility & billing systems give full control from reading to disconnection.',
    ['utility-billing', 'enterprise-systems']),
  ind('enterprise', 'Enterprise & Corporate', 'Enterprise',
    'ERP, HR and infrastructure for larger organisations.',
    'Growth fragments systems and data across the business.',
    'We integrate enterprise and HR systems and supply the hardware behind them.',
    ['enterprise-systems', 'human-resources', 'hardware-supply']),
  ind('financial-services', 'Financial Services', 'Financial Services',
    'Access control, business systems and ICT audit.',
    'Financial institutions need controlled access and assured systems.',
    'We deliver access control, enterprise systems and ICT & security audit.',
    ['access-control', 'enterprise-systems', 'consulting']),
  ind('telecommunications', 'Telecommunications', 'Telecoms',
    'Networking and infrastructure integration.',
    'Connectivity and infrastructure must stay available and secure.',
    'We integrate networking, security and the supporting hardware.',
    ['access-control', 'hardware-supply']),
  ind('education-health', 'Education & Health', 'Education & Health',
    'HR systems, endpoints and support.',
    'Institutions need dependable systems on constrained budgets.',
    'We supply HR systems, endpoints and ongoing support.',
    ['human-resources', 'hardware-supply']),
]

export const projects = [
  { slug: 'border-control-regional', title: 'Regional Border Control Management', verified: true,
    sector: 'Government', reach: '10+ countries', status: 'In production',
    summary: 'Border control management implemented across more than 10 countries.',
    body: 'A convenient way to manage immigration across national borders, deployed and supported across more than ten countries.',
    systems: ['Traveller processing', 'Multi-post deployment', 'Watchlist checks'],
    outcomes: ['Standardised cross-border processing', 'Proven multi-country reliability'] },
  { slug: 'utility-billing-deployment', title: 'Utility Revenue & Billing Deployment', verified: false,
    sector: 'Utilities',
    summary: 'Complete control of readings, complex tariffs, receipts and disconnections for a utility.',
    body: 'Systems delivered and outcomes achieved are described here; the client is not publicly named.',
    systems: ['Meter readings', 'Complex tariffs', 'Receipts & adjustments'],
    outcomes: ['Improved revenue accuracy'] },
  { slug: 'enterprise-hr-rollout', title: 'Enterprise HR & Payroll Rollout', verified: false,
    sector: 'Enterprise',
    summary: 'Applicant tracking through payroll, appraisals and attendance for a large employer.',
    body: 'Systems delivered and outcomes achieved are described here; the client is not publicly named.',
    systems: ['Applicant tracking', 'Payroll & benefits', 'Attendance'],
    outcomes: ['Reduced HR administration'] },
]

export const partners = ['HP', 'HPE', 'Oracle', 'Dell', 'Lenovo', 'Asus', 'Microsoft', 'Cisco', 'VMware', 'Sophos', 'Veeam', 'ManageEngine']

export const process = [
  { n: '01', title: 'Design', text: 'Architect the environment against business requirements and international standards.' },
  { n: '02', title: 'Integrate', text: 'Bring systems, security and networks into one coherent whole.' },
  { n: '03', title: 'Deploy', text: 'Roll out with project and change management, and knowledge transfer.' },
  { n: '04', title: 'Secure', text: 'Harden access, data and borders with layered controls.' },
  { n: '05', title: 'Support', text: 'Keep it available, monitored and evolving over its lifecycle.' },
]

export const hardware = [
  { name: 'Servers', brands: ['HP', 'Oracle', 'Dell'], note: 'Rack, tower and enterprise-class servers.' },
  { name: 'Laptops, Desktops & PC Accessories', brands: ['HP', 'Lenovo', 'Dell', 'Asus'], note: 'End-user computing for teams of any size.' },
  { name: 'Printers & Scanners', brands: [], note: 'Office print and document capture hardware.' },
]
