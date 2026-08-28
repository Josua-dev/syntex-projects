import './PhotoBg.css'
/* Photographic background using the real office image, with a navy overlay. */
export default function PhotoBg({ overlay = 0.62, src = '/images/office-wide.jpg' }){
  return(<div className="photobg" aria-hidden="true"><img className="photobg-img" src={src} alt="" loading="eager"/><div className="photobg-overlay" style={{'--ov':overlay}}/></div>)
}
