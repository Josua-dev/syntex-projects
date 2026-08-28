import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import './Slideshow.css'
export default function Slideshow({ slides=[], interval=6000, height }){
  const reduce=useReducedMotion()
  const [index,setIndex]=useState(0),[paused,setPaused]=useState(false),[failed,setFailed]=useState({})
  const timer=useRef(null);const count=slides.length
  const go=useCallback(n=>setIndex(((n%count)+count)%count),[count])
  const next=useCallback(()=>go(index+1),[go,index]),prev=useCallback(()=>go(index-1),[go,index])
  useEffect(()=>{ if(reduce||paused||count<=1)return; timer.current=setTimeout(next,interval); return()=>clearTimeout(timer.current) },[index,paused,reduce,count,interval,next])
  const onKey=e=>{ if(e.key==='ArrowRight'){e.preventDefault();next()} else if(e.key==='ArrowLeft'){e.preventDefault();prev()} }
  if(count===0)return null
  const slide=slides[index],isFailed=failed[index]
  return(<section className="slideshow" style={height?{'--slideshow-h':height}:undefined} aria-roledescription="carousel" aria-label="Syntex highlights" onMouseEnter={()=>setPaused(true)} onMouseLeave={()=>setPaused(false)} onFocusCapture={()=>setPaused(true)} onBlurCapture={()=>setPaused(false)} onKeyDown={onKey} tabIndex={0}>
    <div className="slideshow-stage">
      <AnimatePresence mode="sync">
        <motion.div key={index} className="slideshow-slide" initial={reduce?false:{opacity:0,scale:1.04}} animate={reduce?{opacity:1}:{opacity:1,scale:1}} exit={reduce?{opacity:0}:{opacity:0,scale:1.01}} transition={{duration:reduce?0:0.9,ease:[0.16,1,0.3,1]}} aria-roledescription="slide" aria-label={`${index+1} of ${count}`}>
          {isFailed?<div className="slideshow-fallback" aria-hidden="true"/>:<img className="slideshow-img" src={slide.src} alt={slide.alt||''} loading={index===0?'eager':'lazy'} onError={()=>setFailed(f=>({...f,[index]:true}))}/>}
          <div className="slideshow-scrim" aria-hidden="true"/>
        </motion.div>
      </AnimatePresence>
      {(slide.eyebrow||slide.title||slide.text)&&<div className="wrap slideshow-caption-wrap">
        <motion.div key={`cap-${index}`} className="slideshow-caption glass-dark" initial={reduce?false:{opacity:0,y:22}} animate={{opacity:1,y:0}} transition={{duration:reduce?0:0.55,delay:0.15,ease:[0.16,1,0.3,1]}}>
          {slide.eyebrow&&<span className="eyebrow slideshow-eyebrow">{slide.eyebrow}</span>}
          {slide.title&&<h2 className="slideshow-title">{slide.title}</h2>}
          {slide.text&&<p className="slideshow-text">{slide.text}</p>}
          {slide.cta&&<a className="btn btn-primary slideshow-cta" href={slide.cta.href}>{slide.cta.label}</a>}
        </motion.div>
      </div>}
      {count>1&&<><button className="slideshow-arrow prev" onClick={prev} aria-label="Previous slide"><svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></button>
      <button className="slideshow-arrow next" onClick={next} aria-label="Next slide"><svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></button></>}
    </div>
    {count>1&&<div className="slideshow-dots" role="tablist" aria-label="Choose slide">{slides.map((s,i)=><button key={i} role="tab" aria-selected={i===index} aria-label={`Slide ${i+1}`} className={`slideshow-dot ${i===index?'is-active':''}`} onClick={()=>go(i)}><span className="slideshow-dot-fill" style={!reduce&&i===index&&!paused?{animationDuration:`${interval}ms`}:undefined}/></button>)}</div>}
  </section>)
}
