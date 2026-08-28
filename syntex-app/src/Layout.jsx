import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import MegaNav from './components/MegaNav'
import Footer from './components/Footer'
import SearchModal from './components/SearchModal'
import { ScrollToTop } from './ScrollToTop'
import { initEyebrows } from './anim/eyebrow'
export default function Layout(){
  const [searchOpen,setSearchOpen]=useState(false)
  const location=useLocation()
  const overHero=location.pathname==='/'
  useEffect(()=>{ const onKey=e=>{ if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){e.preventDefault();setSearchOpen(v=>!v)} }; window.addEventListener('keydown',onKey); return ()=>window.removeEventListener('keydown',onKey) },[])
  useEffect(()=>{ const c=initEyebrows(document); return c },[])
  return(<><a href="#main" className="skip-link">Skip to content</a><ScrollToTop/><MegaNav overHero={overHero} onOpenSearch={()=>setSearchOpen(true)}/><main id="main"><Outlet/></main><Footer/><SearchModal open={searchOpen} onClose={()=>setSearchOpen(false)}/></>)
}
