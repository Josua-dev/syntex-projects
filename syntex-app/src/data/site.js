export const identity = {
  name: 'Syntex Technologies (Pty) Ltd', legal: 'Syntex Technologies (Pty) Ltd',
  incorporated: 2008, parent: 'Syntex Investment', tagline: 'Synergy to Excel.',
  country: 'Namibia', region: 'Windhoek',
  hq: { line1: '340 Sam Nujoma Drive', line2: 'Klein Windhoek, Windhoek', line3: 'Khomas Region, Namibia' },
  phone: '+264 61 309 171', phoneHref: '+26461309171', fax: '+264 61 309 172',
  emailSales: 'sales@syntexnam.com', emailSupport: 'support@syntexnam.com',
}
export const serviceAreas = [
  { slug:'access-control-biometrics', title:'Access Control & Biometric Systems', category:'Security', categorySlug:'security', url:'/services/access-control-biometrics', intro:'Access control software for securing a single site or a portfolio of buildings.', body:'Access control software that ties doors, identity verification, and monitoring into one networked system, administered across a single site or a portfolio of buildings.', keywords:['access control','biometric','fingerprint','site security'] },
  { slug:'border-control-management', title:'Border Control Management', category:'Security', categorySlug:'security', url:'/services/border-control-management', intro:'A system for managing immigration across national borders, implemented in more than ten countries.', body:'A convenient way to manage immigration across national borders. Implemented in more than ten countries, built for the throughput and audit requirements of national border posts.', keywords:['border control','immigration','national borders','10+ countries'] },
  { slug:'security-management', title:'Security Management Systems', category:'Security', categorySlug:'security', url:'/services/security-management', intro:'Centralised security management that unifies access, alarm, and monitoring.', body:'A security management system that unifies access control, alarms, and monitoring into one operating picture across a site or portfolio of buildings.', keywords:['security management','centralised','monitoring','alarms'] },
  { slug:'ict-security-audit', title:'ICT & Security Audit', category:'Security', categorySlug:'security', url:'/services/ict-security-audit', intro:'A structured review of existing infrastructure and access controls.', body:'A structured review of existing infrastructure and access controls, forming the baseline for any security deployment or upgrade.', keywords:['audit','ICT audit','security audit','compliance'] },
  { slug:'enterprise-resource-planning', title:'Enterprise Resource Planning (ERP)', category:'Enterprise Systems', categorySlug:'enterprise', url:'/services/enterprise-resource-planning', intro:'Unified systems for planning, monitoring, and decision-making.', body:'Comprehensive software to integrate and manage business processes, functions, and resources in one unified system for real-time planning and decision-making.', keywords:['ERP','integration','business processes','planning'] },
  { slug:'hr-payroll', title:'HR & Payroll Systems', category:'Enterprise Systems', categorySlug:'enterprise', url:'/services/hr-payroll', intro:'Applicant tracking, salary administration, benefits, performance, and HR management.', body:'Applicant tracking and interview scheduling, salary administration, benefits and deductions, job history, performance appraisals, training records, and disciplinary record-keeping in one system.', keywords:['HR','payroll','applicant tracking','performance'] },
  { slug:'utility-billing', title:'Utility & Billing Systems', category:'Utility & Billing', categorySlug:'utility', url:'/services/utility-billing', intro:'Complete control over meter readings, tariff billing, receipts, connections.', body:'Complete control over meter readings and adjustments, complex tariff billing, receipting, connections, and disconnections — built for municipal and utility-scale operations.', keywords:['utility','billing','meter','tariff','municipal'] },
  { slug:'project-change-management', title:'Project & Change Management', category:'Consulting', categorySlug:'consulting', url:'/services/project-change-management', intro:'Structured project management run alongside change management.', body:'Structured project management run alongside change management, so system adoption is planned from the start rather than left to chance after go-live.', keywords:['project management','change management','delivery'] },
  { slug:'business-process-reengineering', title:'Business Process Re-Engineering', category:'Consulting', categorySlug:'consulting', url:'/services/business-process-reengineering', intro:'A review of existing workflows to identify where a system should change how work is done.', body:'A review of existing operational workflows to identify where a new system should change how work is actually done, not just digitise the current process.', keywords:['business process','re-engineering','workflow'] },
  { slug:'business-technology-consulting', title:'Business & Technology Consulting', category:'Consulting', categorySlug:'consulting', url:'/services/business-technology-consulting', intro:'Project management, change management, re-engineering, and ICT & security audit.', body:'Project management, change management, business process re-engineering, and ICT & security audit, delivered end-to-end as part of every engagement.', keywords:['consulting','advisory','change'] },
  { slug:'knowledge-transfer', title:'Knowledge Transfer', category:'Consulting', categorySlug:'consulting', url:'/services/knowledge-transfer', intro:'Structured handover and training built into every engagement.', body:'Structured handover and training built into every engagement, so your team can operate and extend the system independently once deployed.', keywords:['training','knowledge transfer','handover'] },
]
export const hardware = {
  intro: 'Enterprise hardware procured from our technology partners and delivered to your site.',
  categories: [
    { slug:'servers', title:'Servers', brands:['HP','Oracle','Dell'], note:'Server hardware from HP, Oracle, and Dell, specified against the workload the system is deployed for.' },
    { slug:'laptops-desktops', title:'Laptops & Desktops', brands:['HP','Lenovo','Dell','Asus'], note:'End-user computing hardware, procured and delivered to site alongside your software rollout.' },
    { slug:'printers-scanners', title:'Printers & Scanners', brands:['HP','Canon'], note:'Print and scan hardware specified for the volume and document type your operation runs.' },
  ],
}
export const solutions = [
  { slug:'enterprise-systems', title:'Enterprise Systems', lens:'By Capability', intro:'One integrated record across planning, HR, and finance.', body:'ERP, HR & payroll, and utility billing drawn together so every function works from the same operating record.', services:['enterprise-resource-planning','hr-payroll','utility-billing'] },
  { slug:'security-access', title:'Security & Access', lens:'By Capability', intro:'Protecting people, sites, and national borders with integrated identity technology.', body:'Access control, biometric identity, border management, security management, and the audits that baseline them.', services:['access-control-biometrics','border-control-management','security-management','ict-security-audit'] },
  { slug:'border-control', title:'Border Control', lens:'By Capability', intro:'Immigration and border management deployed across national border posts.', body:'The border control management system implemented in more than ten countries, shown as a dedicated solution.', services:['border-control-management'] },
  { slug:'financial-systems', title:'Financial Systems', lens:'By Function', intro:'Billing, receipting, and financial management for revenue-critical operations.', body:'Utility tariff billing, receipting, and the financial modules inside an ERP deployment.', services:['utility-billing','enterprise-resource-planning'] },
  { slug:'human-resources', title:'Human Resources', lens:'By Function', intro:'The full HR and payroll lifecycle, from applicant tracking to pay administration.', body:'Applicant tracking and interview scheduling, salary administration, benefits, performance, training, and disciplinary records.', services:['hr-payroll'] },
  { slug:'utility-management', title:'Utility Management', lens:'By Function', intro:'Metering, tariffs, and connections for municipal and utility-scale operations.', body:'Complete control over meter readings and adjustments, complex tariff billing, receipting, connections, and disconnections.', services:['utility-billing'] },
]
export const partners = ['VMware','Cisco','Dell','HP','HPE','Microsoft','Oracle Partner','Oracle Advanced','Sophos','VEEAM','ManageEngine','Amplify']
export const projects = [
  { slug:'border-control-management', title:'Border Control Management', category:'Security', status:'Deployed 10+ Countries', verified:true, meta:['Cross-border deployments','Government'], overview:'Immigration and border management technology deployed across national border posts.', services:[1,3], industry:'government' },
  { slug:'access-control-biometric-rollout', title:'Access Control & Biometric Rollout', category:'Security', status:'In Production', verified:false, meta:['Windhoek, Khomas','Enterprise Client'], overview:'Access control and biometric system rolled out across a portfolio of buildings.', services:[0], industry:'enterprise' },
  { slug:'municipal-utility-billing', title:'Municipal Utility & Billing System', category:'Utility', status:'In Production', verified:false, meta:['Namibia-wide','Municipal Client'], overview:'Utility metering, tariff billing, receipting, connections, and disconnections for a municipal-scale operation.', services:[6], industry:'utilities' },
  { slug:'erp-implementation-integration', title:'ERP Implementation & Integration', category:'Enterprise Systems', status:'Completed', verified:false, meta:['Windhoek, Khomas','Mid-Market Client'], overview:'Enterprise resource planning implementation and integration into an existing environment.', services:[4,7,8,10], industry:'enterprise' },
  { slug:'hr-payroll-rollout', title:'HR & Payroll System Rollout', category:'Enterprise Systems', status:'In Production', verified:false, meta:['Windhoek, Khomas','Enterprise Client'], overview:'Human resources and payroll system rollout covering applicant tracking through pay administration.', services:[5,10], industry:'enterprise' },
  { slug:'ict-security-audit-engagement', title:'ICT & Security Audit Engagement', category:'Consulting', status:'Completed', verified:false, meta:['Windhoek, Khomas','Enterprise Client'], overview:'An ICT and security audit establishing the baseline for subsequent deployments.', services:[3,7], industry:'enterprise' },
]
export const industries = [
  { slug:'government', title:'Government & Border Control', short:'Government', intro:'Security, border control, and enterprise systems for public-sector operations.', note:'Serves national border control (10+ countries) and government departments.' },
  { slug:'utilities', title:'Municipalities & Utilities', short:'Utilities', intro:'Metering, tariff billing, and revenue-management systems for municipal-scale operations.', note:'Utility & billing systems delivered Namibia-wide.' },
  { slug:'financial-services', title:'Financial Services', short:'Financial Services', intro:'Enterprise systems and financial management infrastructure.', note:'Listed among the sectors Syntex serves.' },
  { slug:'enterprise', title:'Enterprise & Mid-Market', short:'Enterprise', intro:'ERP, HR & payroll, and integrated business processes for mid-market and enterprise clients.', note:'Core focus for ERP and HR & payroll delivery.' },
]
export const process = [
  { n:'01', title:'Discovery & Audit', text:'ICT and security audit, business process review, and requirements gathering before any solution is proposed.' },
  { n:'02', title:'Solution Design', text:'Systems architecture planning tailored to your industry, scale, and existing infrastructure.' },
  { n:'03', title:'Build & Integration', text:'Development, configuration, and integration of ERP, HR, billing, or security systems into your environment.' },
  { n:'04', title:'Hardware & Deployment', text:'Hardware supply, delivery, and on-site deployment coordinated alongside the software rollout.' },
  { n:'05', title:'Change Management', text:'Ongoing support, training, and knowledge transfer to help your organisation adopt the new system fully.' },
]
export const vision = {
  text: 'To be a trusted provider of technology solutions across Southern Africa, measured by the standard of our innovation, our accountability, and our consistency.',
  values: [
    { n:'01', title:'Innovation', text:'Solutions matched to the client\u2019s actual constraints and infrastructure, not a fixed product template.' },
    { n:'02', title:'Accountability', text:'The team that scopes an engagement stays accountable through delivery, with project and change management structured in from day one.' },
    { n:'03', title:'Consistency', text:'The same process discipline applies whether the engagement is a single hardware order or a multi-year systems rollout.' },
  ],
}
