// anime.js v4 animations for syntex-site — full corrected file.
// v4 API only. Reduced-motion guarded. Selector bug fixed.
import { animate, stagger, svg, splitText, onScroll } from 'animejs'

function prefersReduced() {
  return typeof window !== 'undefined' && window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function animateHeroDiagram() {
  if (prefersReduced()) {
    document.querySelectorAll('.hero-diagram svg path').forEach((p) => { p.style.strokeDashoffset = '0' })
    document.querySelectorAll('.node-pulse').forEach((n) => { n.style.opacity = '0.9' })
    return
  }
  const drawable = svg.createDrawable('.hero-diagram svg path')
  animate(drawable, { draw: [0, 1], duration: 1500, ease: 'inOutQuad' })
  animate('.node-pulse', { opacity: [0, 1], translateY: [-20, 0], duration: 600, delay: stagger(50, { from: 'center' }), ease: 'outCubic' })
  animate('.diagram-caption text', { opacity: [0, 1], duration: 600, delay: 200 })
}

export function startHeroOnReveal() {
  const target = document.querySelector('.hero-diagram')
  if (!target) return
  if (prefersReduced()) { animateHeroDiagram(); return }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { animateHeroDiagram(); io.disconnect() } })
  }, { threshold: 0.1 })
  io.observe(target)
}

export function animateServiceCards() {
  if (prefersReduced()) return
  animate('.service-card', { opacity: [0, 1], translateY: [30, 0], scale: [0.95, 1], duration: 600, delay: stagger(100, { from: 'center' }), ease: 'outCubic' })
}

export function animateValueCards() {
  if (prefersReduced()) return
  animate('.value-card', { opacity: [0, 1], translateY: [30, 0], duration: 600, delay: stagger(150, { from: 'center' }), ease: 'outCubic' })
}

export function animateProcessSteps() {
  if (prefersReduced()) return
  animate('.step', { opacity: [0, 1], translateX: [30, 0], duration: 500, delay: stagger(80, { from: 'center' }), ease: 'outCubic' })
}

export function animateOnScroll() {
  if (prefersReduced()) return
  onScroll('.sectors, .values, .services, .process, .capabilities', {
    onEnter: () => {
      animate('.sectors .sector-list li, .values .value-card, .service-card, .process .step, .capabilities .cap-item',
        { opacity: [0, 1], translateY: [40, 0], duration: 800, delay: stagger(100, { from: 'center' }), ease: 'outQuad' })
    },
  })
}

export function animateCounter(el, end, duration = 2000) {
  if (!el) return
  if (prefersReduced()) { el.textContent = end; return }
  const c = { value: 0 }
  animate(c, { value: end, duration, ease: 'outExpo', onUpdate: () => { el.textContent = Math.round(c.value) }, onComplete: () => { el.textContent = end } })
}

export function initAllAnimations() {
  startHeroOnReveal()
  if (prefersReduced()) return
  // animateServiceCards(); animateValueCards(); animateProcessSteps(); animateOnScroll();
}
