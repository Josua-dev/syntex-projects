import { identity } from '../data/site'
import './FindUsMap.css'
export default function FindUsMap(){
  const { hq, name }=identity
  const address=[hq.line1,hq.line2,hq.line3].filter(Boolean).join(', ')
  const geo=hq.geo
  const embed=geo?`https://www.openstreetmap.org/export/embed.html?bbox=${geo.lon-0.006}%2C${geo.lat-0.004}%2C${geo.lon+0.006}%2C${geo.lat+0.004}&layer=mapnik&marker=${geo.lat}%2C${geo.lon}`:null
  const link=geo?`https://www.openstreetmap.org/?mlat=${geo.lat}&mlon=${geo.lon}#map=16/${geo.lat}/${geo.lon}`:`https://www.openstreetmap.org/search?query=${encodeURIComponent(address+', Namibia')}`
  return(<div className="findus">
    <div className="findus-address"><span className="eyebrow">Find us</span><h3>Head office</h3><address>{[hq.line1,hq.line2,hq.line3].map(l=><span key={l}>{l}</span>)}</address><a className="findus-phone" href={`tel:${identity.phoneHref}`}>{identity.phone}</a><a className="findus-osm" href={link} target="_blank" rel="noopener noreferrer">View on OpenStreetMap →</a></div>
    <div className="findus-map"><img className="findus-photo" src="/images/office-windhoek.jpg" alt={`${name} head office at ${address}`} loading="lazy"/><a className="findus-photo-link" href={link} target="_blank" rel="noopener noreferrer">Open map →</a></div>
  </div>)
}
