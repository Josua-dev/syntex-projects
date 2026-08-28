import { useEffect, useRef, useState, createElement } from 'react'
export default function Reveal({as='div',delay=0,className='',children,...rest}){
  const ref=useRef(null);const [inView,setInView]=useState(false)
  useEffect(()=>{const el=ref.current;if(!el)return;const io=new IntersectionObserver(([e])=>{if(e.isIntersecting){setInView(true);io.unobserve(el)}},{threshold:0.15,rootMargin:'0px 0px -6% 0px'});io.observe(el);return()=>io.disconnect()},[])
  return createElement(as,{ref,className:`reveal ${inView?'is-in':''} ${className}`.trim(),style:{transitionDelay:`${delay}ms`},...rest},children)
}
