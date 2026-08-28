import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'
const Home=lazy(()=>import('./pages/Home')),About=lazy(()=>import('./pages/About'))
const AboutStory=lazy(()=>import('./pages/about/Story')),AboutVision=lazy(()=>import('./pages/about/Vision')),AboutValues=lazy(()=>import('./pages/about/Values'))
const AboutLeadership=lazy(()=>import('./pages/about/Leadership')),AboutDepartments=lazy(()=>import('./pages/about/Departments')),AboutTeam=lazy(()=>import('./pages/about/Team')),AboutCareers=lazy(()=>import('./pages/about/Careers'))
const Services=lazy(()=>import('./pages/Services')),ServiceDetail=lazy(()=>import('./pages/ServiceDetail'))
const Solutions=lazy(()=>import('./pages/Solutions')),SolutionDetail=lazy(()=>import('./pages/SolutionDetail'))
const Industries=lazy(()=>import('./pages/Industries')),IndustryDetail=lazy(()=>import('./pages/IndustryDetail'))
const Hardware=lazy(()=>import('./pages/Hardware')),Projects=lazy(()=>import('./pages/Projects')),ProjectDetail=lazy(()=>import('./pages/ProjectDetail'))
const Insights=lazy(()=>import('./pages/Insights')),InsightsNews=lazy(()=>import('./pages/insights/News')),InsightsApproach=lazy(()=>import('./pages/insights/Approach')),InsightsResources=lazy(()=>import('./pages/insights/Resources')),InsightsCases=lazy(()=>import('./pages/insights/CaseStudies'))
const Global=lazy(()=>import('./pages/Global')),Contact=lazy(()=>import('./pages/Contact')),NotFound=lazy(()=>import('./pages/NotFound'))
function RouteFallback(){return <div className="route-fallback" role="status" aria-live="polite" aria-busy="true"><span className="visually-hidden">Loading</span><div className="route-fallback-bar"/></div>}
const S=el=><Suspense fallback={<RouteFallback/>}>{el}</Suspense>
export default function App(){
  return(<Routes><Route element={<Layout/>}>
    <Route path="/" element={S(<Home/>)}/>
    <Route path="/about" element={S(<About/>)}/>
    <Route path="/about/story" element={S(<AboutStory/>)}/>
    <Route path="/about/vision-mission" element={S(<AboutVision/>)}/>
    <Route path="/about/values" element={S(<AboutValues/>)}/>
    <Route path="/about/leadership" element={S(<AboutLeadership/>)}/>
    <Route path="/about/departments" element={S(<AboutDepartments/>)}/>
    <Route path="/about/team" element={S(<AboutTeam/>)}/>
    <Route path="/about/careers" element={S(<AboutCareers/>)}/>
    <Route path="/services" element={S(<Services/>)}/>
    <Route path="/services/:slug" element={S(<ServiceDetail/>)}/>
    <Route path="/solutions" element={S(<Solutions/>)}/>
    <Route path="/solutions/:slug" element={S(<SolutionDetail/>)}/>
    <Route path="/industries" element={S(<Industries/>)}/>
    <Route path="/industries/:slug" element={S(<IndustryDetail/>)}/>
    <Route path="/hardware" element={S(<Hardware/>)}/>
    <Route path="/projects" element={S(<Projects/>)}/>
    <Route path="/projects/:slug" element={S(<ProjectDetail/>)}/>
    <Route path="/insights" element={S(<Insights/>)}/>
    <Route path="/insights/news" element={S(<InsightsNews/>)}/>
    <Route path="/insights/approach" element={S(<InsightsApproach/>)}/>
    <Route path="/insights/resources" element={S(<InsightsResources/>)}/>
    <Route path="/insights/case-studies" element={S(<InsightsCases/>)}/>
    <Route path="/global" element={S(<Global/>)}/>
    <Route path="/contact" element={S(<Contact/>)}/>
    <Route path="*" element={S(<NotFound/>)}/>
  </Route></Routes>)
}
