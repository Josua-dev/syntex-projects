import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import CtaBand from '../components/CtaBand'
import { hardware, partners } from '../data/site'
import './Hardware.css'

/*
  SYNTEX — Hardware supply & delivery.
  Verified from site.js. Honest framing: hardware is procured from technology
  partners and delivered to site — presented by category, with the specific
  brands supplied. No invented stock, pricing or exclusive-distributor claims.
*/

// Prefer a structured hardware[] model if present; else a sensible default
// derived from the verified corporate description.
const categories = Array.isArray(hardware) && hardware.length
  ? hardware
  : [
      { name: 'Servers', brands: ['HP', 'Oracle', 'Dell'], note: 'Rack, tower and enterprise-class servers.' },
      { name: 'Laptops, Desktops & PC Accessories', brands: ['HP', 'Lenovo', 'Dell', 'Asus'], note: 'End-user computing for teams of any size.' },
      { name: 'Printers & Scanners', brands: [], note: 'Office print and document capture hardware.' },
    ]

export default function Hardware() {
  return (
    <>
      <section className="hw-hero">
        <div className="wrap">
          <span className="eyebrow">Hardware</span>
          <h1>Enterprise hardware, procured and delivered to your site.</h1>
          <p>
            Syntex supplies the physical infrastructure behind the systems we
            deploy — sourced from established technology partners and delivered
            across Namibia. Tell us the specification and we'll handle the rest.
          </p>
        </div>
      </section>

      <section className="wrap hw-grid">
        {categories.map((c, i) => (
          <Reveal key={c.name} delay={i * 60} className="hw-card">
            <span className="hw-n">{String(i + 1).padStart(2, '0')}</span>
            <h2>{c.name}</h2>
            {c.note && <p>{c.note}</p>}
            {Array.isArray(c.brands) && c.brands.length > 0 && (
              <ul className="hw-brands">
                {c.brands.map((b) => <li key={b}>{b}</li>)}
              </ul>
            )}
          </Reveal>
        ))}
      </section>

      <section className="hw-note-band">
        <div className="wrap">
          <p>
            Hardware is supplied through our technology partner network. Brands
            shown are those Syntex supplies; availability and specification are
            confirmed per order.
          </p>
        </div>
      </section>

      <CtaBand
        heading="Need hardware specified, supplied and delivered?"
        primaryLabel="Request a quote"
        primary="/contact"
      />
    </>
  )
}
