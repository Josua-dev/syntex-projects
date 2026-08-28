import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'

/*
  SYNTEX route tree — real route-level code splitting via React.lazy.
  Initial bundle carries only the shell (Layout + nav + footer) and the Home
  chunk. Honest placeholders (About/Insights) are named exports pulled from a
  single module each. Removed the stray `'use client'` and the broken anime.js
  global effect (see App.jsx notes in the redesign report).
*/

// --- Primary pages ---
const Home           = lazy(() => import('./pages/Home'))
const About          = lazy(() => import('./pages/About'))
const Services       = lazy(() => import('./pages/Services'))
const ServiceDetail  = lazy(() => import('./pages/ServiceDetail'))
const Solutions      = lazy(() => import('./pages/Solutions'))
const SolutionDetail = lazy(() => import('./pages/SolutionDetail'))
const Industries     = lazy(() => import('./pages/Industries'))
const IndustryDetail = lazy(() => import('./pages/IndustryDetail'))
const Hardware       = lazy(() => import('./pages/Hardware'))
const Projects       = lazy(() => import('./pages/Projects'))
const ProjectDetail  = lazy(() => import('./pages/ProjectDetail'))
const Insights       = lazy(() => import('./pages/Insights'))
const Global         = lazy(() => import('./pages/Global'))
const Contact        = lazy(() => import('./pages/Contact'))
const NotFound       = lazy(() => import('./pages/NotFound'))

// --- About sub-pages ---
const AboutStory       = lazy(() => import('./pages/about/Story'))
const AboutVision      = lazy(() => import('./pages/about/Vision'))
const AboutValues      = lazy(() => import('./pages/about/Values'))
const AboutLeadership  = lazy(() => import('./pages/about/Placeholders').then(m => ({ default: m.Leadership })))
const AboutTeam        = lazy(() => import('./pages/about/Placeholders').then(m => ({ default: m.Team })))
const AboutCareers     = lazy(() => import('./pages/about/Placeholders').then(m => ({ default: m.Careers })))
const AboutDepartments = lazy(() => import('./pages/about/Placeholders').then(m => ({ default: m.Departments })))

// --- Insights sub-pages ---
const InsightsApproach  = lazy(() => import('./pages/insights/Approach'))
const InsightsNews      = lazy(() => import('./pages/insights/Placeholders').then(m => ({ default: m.News })))
const InsightsResources = lazy(() => import('./pages/insights/Placeholders').then(m => ({ default: m.Resources })))
const InsightsCases     = lazy(() => import('./pages/insights/Placeholders').then(m => ({ default: m.CaseStudies })))

// Layout-stable fallback — reserves height to avoid CLS between chunks.
function RouteFallback() {
  return (
    <div className="route-fallback" role="status" aria-live="polite" aria-busy="true">
      <span className="visually-hidden">Loading…</span>
      <div className="route-fallback-bar" />
    </div>
  )
}

// Small helper to keep the route list readable.
const S = (El) => (
  <Suspense fallback={<RouteFallback />}>{El}</Suspense>
)

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={S(<Home />)} />

        {/* About */}
        <Route path="/about" element={S(<About />)} />
        <Route path="/about/story" element={S(<AboutStory />)} />
        <Route path="/about/vision-mission" element={S(<AboutVision />)} />
        <Route path="/about/values" element={S(<AboutValues />)} />
        <Route path="/about/leadership" element={S(<AboutLeadership />)} />
        <Route path="/about/team" element={S(<AboutTeam />)} />
        <Route path="/about/careers" element={S(<AboutCareers />)} />
        <Route path="/about/departments" element={S(<AboutDepartments />)} />

        {/* Services */}
        <Route path="/services" element={S(<Services />)} />
        <Route path="/services/:slug" element={S(<ServiceDetail />)} />

        {/* Solutions */}
        <Route path="/solutions" element={S(<Solutions />)} />
        <Route path="/solutions/:slug" element={S(<SolutionDetail />)} />

        {/* Industries */}
        <Route path="/industries" element={S(<Industries />)} />
        <Route path="/industries/:slug" element={S(<IndustryDetail />)} />

        {/* Hardware */}
        <Route path="/hardware" element={S(<Hardware />)} />

        {/* Projects */}
        <Route path="/projects" element={S(<Projects />)} />
        <Route path="/projects/:slug" element={S(<ProjectDetail />)} />

        {/* Insights */}
        <Route path="/insights" element={S(<Insights />)} />
        <Route path="/insights/approach" element={S(<InsightsApproach />)} />
        <Route path="/insights/news" element={S(<InsightsNews />)} />
        <Route path="/insights/resources" element={S(<InsightsResources />)} />
        <Route path="/insights/case-studies" element={S(<InsightsCases />)} />

        {/* Global + Contact */}
        <Route path="/global" element={S(<Global />)} />
        <Route path="/contact" element={S(<Contact />)} />

        <Route path="*" element={S(<NotFound />)} />
      </Route>
    </Routes>
  )
}
