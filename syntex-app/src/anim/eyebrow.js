import anime from 'animejs'
const HANDLED='data-eyebrow-animated'
const prefersReduced=()=>window.matchMedia('(prefers-reduced-motion: reduce)').matches
function animateEyebrow(el,i=0){ if(el.getAttribute(HANDLED)==='done')return; el.setAttribute(HANDLED,'done'); anime({targets:el,translateY:[12,0],opacity:[0,1],easing:'easeOutQuad',duration:600,delay:i*80}) }
export function initEyebrows(root=document){
  if(prefersReduced()){ root.querySelectorAll('.eyebrow').forEach(el=>{el.style.opacity='1';el.setAttribute(HANDLED,'done')}); return ()=>{} }
  const prime=el=>{ if(el.getAttribute(HANDLED)!=='done') el.style.opacity='0' }
  const io=new IntersectionObserver((es,obs)=>{ es.filter(e=>e.isIntersecting).map(e=>e.target).forEach((el,i)=>{animateEyebrow(el,i);obs.unobserve(el)}) },{threshold:0.2,rootMargin:'0px 0px -8% 0px'})
  const scan=()=>root.querySelectorAll('.eyebrow').forEach(el=>{ if(el.getAttribute(HANDLED)==='done'||el.hasAttribute('data-eyebrow-observed'))return; el.setAttribute('data-eyebrow-observed','1'); prime(el); io.observe(el) })
  scan(); const mo=new MutationObserver(()=>scan()); mo.observe(root.body||root,{childList:true,subtree:true})
  return ()=>{io.disconnect();mo.disconnect()}
}
