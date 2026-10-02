'use client'

import { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import { ArrowLeft, ArrowRight, CalendarDays, Check, Clock3, HeartPulse, Leaf, MapPin, Menu, MessageCircle, Phone, Sparkles, X } from 'lucide-react'

const treatments = [
  { name: "Women's Health", text: 'Thoughtful support for every stage of life.' },
  { name: 'Digestive Health', text: 'Gentle, practical care for everyday balance.' },
  { name: 'Skin & Hair Care', text: 'Natural routines for healthier skin and hair.' },
  { name: 'Pain Management', text: 'Personalized support for comfort and mobility.' },
  { name: 'Lifestyle Wellness', text: 'Small, sustainable changes that feel achievable.' },
  { name: 'Respiratory Care', text: 'Holistic guidance for easier breathing.' },
]

const nav = ['About', 'Treatments', 'Our Doctor', 'Contact']

function DoctorKid() {
  return <group position={[0, 1.72, 0.28]} scale={0.5}>
    <mesh position={[0, 0.96, 0]}><sphereGeometry args={[0.34, 24, 16]} /><meshStandardMaterial color="#efbd91" roughness={0.8} /></mesh>
    <mesh position={[0, 1.16, -0.05]} scale={[1.05, 0.6, 0.9]}><sphereGeometry args={[0.35, 24, 16]} /><meshStandardMaterial color="#263b35" roughness={0.9} /></mesh>
    <mesh position={[0, 0.42, 0]} scale={[0.62, 0.72, 0.36]}><boxGeometry args={[1, 1, 1]} /><meshStandardMaterial color="#ffffff" roughness={0.6} /></mesh>
    <mesh position={[0, 0.45, 0.19]} scale={[0.22, 0.55, 0.03]}><boxGeometry args={[1, 1, 1]} /><meshStandardMaterial color="#2d826d" roughness={0.55} /></mesh>
    <mesh position={[-0.27, 0.4, 0]} rotation={[0, 0, -0.3]} scale={[0.15, 0.58, 0.15]}><capsuleGeometry args={[0.5, 1, 8, 12]} /><meshStandardMaterial color="#ffffff" /></mesh>
    <mesh position={[0.27, 0.4, 0]} rotation={[0, 0, 0.3]} scale={[0.15, 0.58, 0.15]}><capsuleGeometry args={[0.5, 1, 8, 12]} /><meshStandardMaterial color="#ffffff" /></mesh>
    <mesh position={[-0.16, -0.18, 0]} scale={[0.17, 0.5, 0.17]}><capsuleGeometry args={[0.5, 1, 8, 12]} /><meshStandardMaterial color="#2d826d" /></mesh>
    <mesh position={[0.16, -0.18, 0]} scale={[0.17, 0.5, 0.17]}><capsuleGeometry args={[0.5, 1, 8, 12]} /><meshStandardMaterial color="#2d826d" /></mesh>
    <mesh position={[-0.16, -0.48, 0.05]} scale={[0.22, 0.1, 0.32]}><sphereGeometry args={[1, 16, 8]} /><meshStandardMaterial color="#ffffff" /></mesh>
    <mesh position={[0.16, -0.48, 0.05]} scale={[0.22, 0.1, 0.32]}><sphereGeometry args={[1, 16, 8]} /><meshStandardMaterial color="#ffffff" /></mesh>
    <mesh position={[0, 0.6, 0.35]} rotation={[Math.PI / 2, 0, 0]}><torusGeometry args={[0.17, 0.018, 8, 32, Math.PI * 1.7]} /><meshBasicMaterial color="#c47752" /></mesh>
    <mesh position={[0, 0.49, 0.35]}><sphereGeometry args={[0.055, 12, 8]} /><meshStandardMaterial color="#c47752" metalness={0.5} /></mesh>
  </group>
}

function GlobeScene() {
  const globe = useRef<THREE.Group>(null)
  const reducedMotion = useRef(false)
  useEffect(() => { reducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches }, [])
  useFrame((_, delta) => { if (globe.current && !reducedMotion.current) globe.current.rotation.y += delta * 0.16 })
  return <>
    <ambientLight intensity={1.6} />
    <directionalLight position={[3, 4, 5]} intensity={2.4} color="#fff6df" />
    <pointLight position={[-3, -2, 3]} intensity={2} color="#86bf91" />
    <group ref={globe} position={[0, -0.62, 0]}>
      <mesh><sphereGeometry args={[1.48, 64, 64, 0, Math.PI * 2, 0, Math.PI / 2]} /><meshStandardMaterial color="#4f9871" roughness={0.38} metalness={0.04} /></mesh>
      <mesh scale={[1.01, 1.01, 1.01]}><sphereGeometry args={[1.48, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2]} /><meshBasicMaterial color="#b6dfaa" wireframe transparent opacity={0.22} /></mesh>
      <DoctorKid />
      <group position={[-1.45, 0.35, 0.25]} rotation={[0.1, 0.3, -0.55]}><mesh scale={[0.16, 0.48, 0.03]}><sphereGeometry args={[1, 16, 8]} /><meshStandardMaterial color="#c7dfa9" /></mesh><mesh position={[0, 0, 0.04]} rotation={[0, 0, 0.2]} scale={[0.02, 0.38, 0.01]}><cylinderGeometry args={[1, 1, 1, 8]} /><meshStandardMaterial color="#477f62" /></mesh></group>
      <group position={[1.38, -0.38, 0.25]} rotation={[-0.2, -0.25, 0.55]}><mesh scale={[0.14, 0.42, 0.03]}><sphereGeometry args={[1, 16, 8]} /><meshStandardMaterial color="#b8d9a8" /></mesh><mesh position={[0, 0, 0.04]} rotation={[0, 0, -0.2]} scale={[0.02, 0.34, 0.01]}><cylinderGeometry args={[1, 1, 1, 8]} /><meshStandardMaterial color="#477f62" /></mesh></group>
    </group>
    <OrbitControls enableZoom={false} enablePan={false} rotateSpeed={0.35} enableDamping dampingFactor={0.08} />
  </>
}

function WellnessOrb() {
  return <div className="wellness-orb-shell" aria-label="Rotating green wellness globe with a child doctor and medicinal leaves"><Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 5.4], fov: 35 }} gl={{ antialias: true, alpha: true }}><GlobeScene /></Canvas></div>
}

function AnimatedStat({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const node = document.querySelector('[data-statistics]')
    if (!node) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setStarted(true)
        observer.disconnect()
      }
    }, { threshold: 0.35 })
    observer.observe(node)
    if (reducedMotion) setStarted(true)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion) {
      setCount(value)
      return
    }
    let frame = 0
    const start = performance.now()
    const animate = (now: number) => {
      const progress = Math.min((now - start) / 1250, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(value * eased))
      if (progress < 1) frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [started, value])

  return <>{count}{suffix}</>
}

export default function Page() {
  const [menu, setMenu] = useState(false)
  const [queue, setQueue] = useState(false)
  const [doctorInfo, setDoctorInfo] = useState(false)
  const [selectedTreatment, setSelectedTreatment] = useState<(typeof treatments)[number] | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0)
    }
    updateScrollProgress()
    window.addEventListener('scroll', updateScrollProgress, { passive: true })
    return () => window.removeEventListener('scroll', updateScrollProgress)
  }, [])

  useEffect(() => {
    const revealItems = document.querySelectorAll<HTMLElement>('[data-reveal]')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.14, rootMargin: '0px 0px -8% 0px' })
    revealItems.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setMenu(false) }
  const openDoctors = () => { setDoctorInfo(true); setMenu(false) }

  return (
    <main className="clinic-glow min-h-screen overflow-x-hidden text-[#173f39]">
      <div className="scroll-progress" aria-hidden="true"><span style={{ width: `${scrollProgress}%` }} /></div>
      <div className="scroll-orb scroll-orb-one" aria-hidden="true" />
      <div className="scroll-orb scroll-orb-two" aria-hidden="true" />
      <div className="bg-[#173f39] px-5 py-2.5 text-center text-[11px] font-medium tracking-wide text-[#e7eee5]">Ayurveda · Homoeopathy · Holistic Care <span className="mx-3 text-[#a6c2a8]">|</span> Open today 9:00 AM – 6:00 PM</div>
      <header className="sticky top-0 z-40 border-b border-[#dfe7dc] bg-[#f7f5ef]/95 backdrop-blur-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <button onClick={() => scrollTo('home')} className="flex items-center gap-3 text-left"><span className="grid size-11 place-items-center rounded-full bg-[#dce9d9] text-[#317363]"><HeartPulse size={22} /></span><span><strong className="block font-serif text-xl leading-none tracking-tight">Annapoorna</strong><span className="text-[10px] font-semibold uppercase tracking-[.25em] text-[#79928a]">Clinic · అన్నపూర్ణ</span></span></button>
          <nav className="hidden items-center gap-7 text-sm font-medium text-[#52736b] lg:flex">{nav.map((item) => <button key={item} onClick={() => item === 'Our Doctor' ? openDoctors() : scrollTo(item.toLowerCase())} className="transition hover:text-[#c47752]">{item}</button>)}</nav>
          <div className="hidden items-center gap-2 sm:flex"><button onClick={() => setQueue(true)} className="rounded-full border border-[#b7cdbb] px-4 py-2.5 text-xs font-bold text-[#317363] transition hover:bg-[#e7f0e4]">Check Queue</button><button onClick={() => scrollTo('booking')} className="rounded-full bg-[#c47752] px-5 py-2.5 text-xs font-bold text-white shadow-lg shadow-[#c47752]/20 transition hover:-translate-y-0.5 hover:bg-[#ae6544]">Book Appointment</button></div>
          <button className="lg:hidden" onClick={() => setMenu(!menu)} aria-label="Toggle menu">{menu ? <X /> : <Menu />}</button>
        </div>
        {menu && <div className="border-t border-[#dfe7dc] bg-[#f7f5ef] px-5 py-5 lg:hidden"><div className="grid gap-4 text-sm font-semibold">{[...nav, 'Book Appointment', 'Check Queue'].map((item) => <button key={item} onClick={() => item === 'Check Queue' ? setQueue(true) : item === 'Book Appointment' ? scrollTo('booking') : item === 'Our Doctor' ? openDoctors() : scrollTo(item.toLowerCase())} className="text-left">{item}</button>)}</div></div>}
      </header>

      <section id="home" className="relative overflow-hidden border-b border-[#e0e7dc]">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 lg:grid-cols-[.9fr_1.1fr] lg:px-8 lg:py-20">
          <div className="relative z-10" style={{ fontFamily: "inherit" }}><div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#cbdcc8] bg-white/70 px-3.5 py-2 text-[11px] font-bold uppercase tracking-[.16em] text-[#317363]"><span className="grid size-5 place-items-center rounded-full bg-[#dce9d9]"><Leaf size={12} /></span> Care that starts with listening</div><h1 className="max-w-xl font-serif text-5xl leading-[.98] tracking-[-.04em] text-[#173f39] sm:text-7xl">Feel better, naturally.</h1><p className="mt-7 max-w-lg text-base leading-7 text-[#617a72]">A warm, neighborhood clinic where Ayurveda and Homoeopathy meet thoughtful conversations, practical guidance, and care designed around you.</p><div className="mt-9 flex flex-wrap gap-3"><button onClick={() => scrollTo('booking')} className="group flex items-center gap-3 rounded-full bg-[#317363] px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-[#317363]/20 transition hover:-translate-y-1">Book an Appointment <ArrowRight size={17} className="transition group-hover:translate-x-1" /></button><button onClick={() => setQueue(true)} className="rounded-full border border-[#b8cdbb] bg-white/60 px-6 py-3.5 text-sm font-bold text-[#317363] transition hover:bg-white">Check Queue</button></div><div data-statistics className="mt-12 grid max-w-lg grid-cols-2 gap-3 sm:grid-cols-3"><div className="rounded-2xl border border-[#dce7d8] bg-white/70 p-3"><strong className="block font-serif text-3xl font-bold tracking-tight text-[#173f39]"><AnimatedStat value={15} suffix="+" /></strong><span className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#617a72]">Years of care</span></div><div className="rounded-2xl border border-[#dce7d8] bg-white/70 p-3"><strong className="block font-serif text-3xl font-bold tracking-tight text-[#173f39]"><AnimatedStat value={50} suffix="+" /></strong><span className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#617a72]">Treatment areas</span></div><div className="rounded-2xl border border-[#dce7d8] bg-white/70 p-3"><strong className="block font-serif text-3xl font-bold tracking-tight text-[#173f39]">1:1</strong><span className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#617a72]">Personalized care</span></div></div></div>
          <WellnessOrb />
        </div>
      </section>

      <section className="benefits-marquee border-b border-[#dfe7dc] bg-white" aria-label="Clinic benefits"><div className="marquee-window"><div className="marquee-track">{[...Array(2)].flatMap(() => [['Ayurveda Care', 'Rooted in natural wisdom', Leaf], ['Homoeopathy', 'Gentle, considered support', HeartPulse], ['Personalized Plans', 'Care that listens first', Sparkles], ['Easy Appointments', 'Book or check your queue', CalendarDays]]).map(([title, text, Icon], index) => <div key={`${title as string}-${index}`} className="marquee-item"><span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#edf3e9] text-[#317363]"><Icon size={19} /></span><span><strong className="block font-serif text-lg text-[#173f39]">{title as string}</strong><small className="text-xs text-[#779087]">{text as string}</small></span></div>)}</div></div></section>

      <section id="about" data-reveal className="mx-auto grid max-w-7xl gap-8 px-5 py-24 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:px-8"><div className="max-w-3xl rounded-[2rem] border border-[#dce7d8] bg-white p-8 shadow-sm sm:p-12"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-[#c47752]">Our approach</p><h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">A clinic built around listening.</h2><p className="mt-6 text-base leading-8 text-[#617a72]">At Annapoorna Clinic, we believe good care begins with time, attention, and an honest conversation. Our approach brings together Ayurveda and Homoeopathy with practical guidance that fits real life.</p><p className="mt-4 text-base leading-8 text-[#617a72]">From your first visit to your follow-up, we want you to feel informed, comfortable, and supported at every step.</p><button onClick={() => scrollTo('booking')} className="mt-8 flex items-center gap-2 text-sm font-bold text-[#317363]">Know more about us <ArrowRight size={17} /></button></div></div><div className="relative overflow-hidden rounded-[2rem] rounded-tr-[6rem] shadow-xl shadow-[#173f39]/10"><img src="/images/ayurvedic-medicines.png" alt="Ayurvedic herbs and medicines arranged on a clinic table" className="h-[320px] w-full object-cover sm:h-[390px]" /><div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-[#f7f5ef]/90 p-4 backdrop-blur"><p className="text-xs font-bold uppercase tracking-widest text-[#c47752]">Rooted in nature</p><p className="mt-1 font-serif text-xl text-[#173f39]">Simple remedies, thoughtfully chosen.</p></div></div></section>

      <section id="treatments" data-reveal className="bg-[#e8efe3] px-5 py-24 lg:px-8"><div className="mx-auto max-w-7xl"><div className="flex flex-wrap items-end justify-between gap-5"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-[#c47752]">Thoughtful treatment</p><h2 className="mt-4 font-serif text-4xl sm:text-5xl">Natural solutions for every stage of life.</h2></div><p className="max-w-sm text-sm leading-6 text-[#617a72]">Personalized care for common concerns, with room for your story and your goals.</p></div><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{treatments.map((item) => <article key={item.name} onClick={() => setSelectedTreatment(item)} className="group cursor-pointer overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"><div className="flex h-24 items-end justify-between bg-[#f5f7ef] p-5"><span className="grid size-11 place-items-center rounded-full bg-[#dce9d9] text-[#317363]"><Leaf size={19} /></span><span className="grid size-9 place-items-center rounded-full bg-white text-[#317363] shadow-sm"><ArrowRight size={16} /></span></div><div className="p-5"><h3 className="font-serif text-2xl">{item.name}</h3><p className="mt-2 text-sm leading-6 text-[#708780]">{item.text}</p><button onClick={() => scrollTo('booking')} className="mt-5 text-xs font-bold uppercase tracking-widest text-[#c47752]">Explore care</button></div></article>)}</div></div></section>

      <section id="doctor" data-reveal className="bg-[#f0f4eb] px-5 py-24 lg:px-8"><div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[.8fr_1fr]"><div className="relative overflow-hidden rounded-[2rem] rounded-br-[6rem] shadow-xl shadow-[#173f39]/10"><img src="/images/annapoorna-doctor.png" alt="Dr. Sangeeta in the clinic" className="h-[360px] w-full object-cover sm:h-[440px]" /><div className="absolute bottom-4 left-4 rounded-2xl bg-[#f7f5ef]/95 px-4 py-3 backdrop-blur"><p className="text-xs font-bold uppercase tracking-widest text-[#c47752]">Patient-first care</p><p className="mt-1 text-sm font-semibold text-[#173f39]">Time to listen. Space to heal.</p></div></div><div className="max-w-3xl"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#c47752]">Meet your doctor</p><h2 className="mt-4 font-serif text-5xl">Care begins with a conversation.</h2><p className="mt-6 text-base leading-8 text-[#617a72]">Dr. Sangeeta brings a thoughtful, patient-first approach to every consultation. Her focus is on understanding the person behind the concern and making care feel clear and approachable.</p><div className="mt-8 grid gap-4 sm:grid-cols-2">{['Personalized consultations', 'Ayurveda & Homoeopathy', 'Comfortable clinic setting', 'Clear next steps'].map((text) => <div key={text} className="flex items-center gap-3 text-sm font-semibold"><span className="grid size-7 place-items-center rounded-full bg-[#dce9d9] text-[#317363]"><Check size={14} /></span>{text}</div>)}</div><button onClick={() => scrollTo('booking')} className="mt-9 rounded-full bg-[#317363] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#245c50]">Book with Dr. Sangeeta</button></div></div></section>


      <section id="booking" data-reveal className="bg-[#173f39] px-5 py-24 text-white lg:px-8"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_.8fr] lg:items-center"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-[#d9a37f]">Your next step</p><h2 className="mt-4 max-w-xl font-serif text-5xl leading-tight">Begin your journey to better health.</h2><p className="mt-5 max-w-lg leading-7 text-[#c6d8ca]">Tell us a little about yourself and our team will help you find a suitable consultation time.</p><div className="mt-8 flex flex-wrap gap-5 text-sm text-[#d8e5d8]"><span className="flex items-center gap-2"><Clock3 size={17} /> 9:00 AM – 6:00 PM</span><span className="flex items-center gap-2"><Phone size={17} /> 098666 18659</span></div></div><div role="form" onClick={(event) => event.stopPropagation()} className="rounded-3xl bg-[#f7f5ef] p-6 text-[#173f39] shadow-2xl sm:p-8"><h3 className="font-serif text-3xl">Book an appointment</h3>{submitted ? <div className="mt-7 rounded-2xl bg-[#e5f0e1] p-5"><Check className="text-[#317363]" /><p className="mt-3 font-serif text-2xl">Request received.</p><p className="mt-2 text-sm leading-6 text-[#617a72]">We will contact you shortly to confirm your consultation.</p></div> : <><div className="mt-6 grid gap-4 sm:grid-cols-2"><div className="grid gap-1.5 text-xs font-bold text-[#52736b]">Full name<input required name="name" aria-label="Full name" placeholder="Your full name" className="rounded-xl border border-[#d6e1d4] bg-white px-4 py-3 text-sm font-normal outline-none focus:border-[#317363]" /></div><div className="grid gap-1.5 text-xs font-bold text-[#52736b]">Phone number<input required name="phone" type="tel" aria-label="Phone number" placeholder="Your phone number" className="rounded-xl border border-[#d6e1d4] bg-white px-4 py-3 text-sm font-normal outline-none focus:border-[#317363]" /></div><div className="grid gap-1.5 text-xs font-bold text-[#52736b]">Consultation type<select name="consultation" aria-label="Consultation type" className="rounded-xl border border-[#d6e1d4] bg-white px-4 py-3 text-sm font-normal outline-none focus:border-[#317363]"><option>Consultation type</option><option>Ayurveda</option><option>Homoeopathy</option><option>Not sure yet</option></select>Preferred day<input name="preferredDay" aria-label="Preferred day" placeholder="e.g. Monday" className="rounded-xl border border-[#d6e1d4] bg-white px-4 py-3 text-sm outline-none focus:border-[#317363]" /></div><textarea placeholder="What would you like help with?" rows={3} className="mt-4 w-full resize-none rounded-xl border border-[#d6e1d4] bg-white px-4 py-3 text-sm outline-none focus:border-[#317363]" /><button className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-[#c47752] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#ae6544]">Request appointment <ArrowRight size={16} /></button></div></>}</div></div></section>

      <section id="contact" data-reveal className="mx-auto grid max-w-7xl gap-8 px-5 py-20 lg:grid-cols-3 lg:px-8"><div className="lg:col-span-2"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#c47752]">Find us</p><h2 className="mt-4 font-serif text-4xl">A friendly clinic, close to home.</h2><p className="mt-5 max-w-xl text-base leading-7 text-[#617a72]">8-7, 89/46, Road Number 1, Nagarjuna Sagar Road, Chaitanya Nagar, B.N Reddy Nagar, Hyderabad, Telangana 500079</p><div className="mt-8 flex flex-wrap gap-3"><a href="tel:+919866618659" className="flex items-center gap-2 rounded-full bg-[#317363] px-5 py-3 text-sm font-bold text-white"><Phone size={16} /> Call clinic</a><a href="https://wa.me/919866618659" className="flex items-center gap-2 rounded-full border border-[#b8cdbb] px-5 py-3 text-sm font-bold text-[#317363]"><MessageCircle size={16} /> WhatsApp us</a></div></div><div className="rounded-2xl bg-[#e8efe3] p-6"><MapPin className="text-[#c47752]" /><h3 className="mt-5 font-serif text-2xl">Visit today</h3><p className="mt-2 text-sm leading-6 text-[#617a72]">Open Monday to Saturday<br />9:00 AM – 6:00 PM</p><a href="https://maps.google.com/?q=BN+Reddy+Nagar+Hyderabad" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#317363]">Get directions <ArrowRight size={16} /></a></div></section>

      <footer className="bg-[#102f2b] px-5 py-12 text-[#c4d9c8] lg:px-8"><div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-4"><div className="lg:col-span-2"><div className="flex items-center gap-3 text-white"><span className="grid size-10 place-items-center rounded-full bg-[#dce9d9] text-[#317363]"><HeartPulse size={20} /></span><strong className="font-serif text-xl">Annapoorna Clinic</strong></div><p className="mt-4 max-w-sm text-sm leading-6 text-[#91b2a0]">Ayurveda & Homoeopathy care rooted in compassion, clarity, and community.</p></div><div><h4 className="font-semibold text-white">Explore</h4><div className="mt-4 grid gap-3 text-sm"><button onClick={() => scrollTo('about')} className="text-left hover:text-white">About us</button><button onClick={() => scrollTo('treatments')} className="text-left hover:text-white">Treatments</button><button onClick={() => scrollTo('doctor')} className="text-left hover:text-white">Our Doctor</button></div></div><div><h4 className="font-semibold text-white">Contact</h4><p className="mt-4 text-sm leading-6">098666 18659<br />B.N Reddy Nagar, Hyderabad<br />Mon–Sat · 9 AM–6 PM</p></div></div><div className="mx-auto mt-10 max-w-7xl border-t border-[#2b5048] pt-5 text-xs text-[#779b8b]">© 2026 Annapoorna Clinic · Privacy · Terms</div></footer>

      <div className="fixed bottom-5 right-5 z-30 flex flex-col gap-2"><a href="https://wa.me/919866618659" aria-label="WhatsApp clinic" className="grid size-12 place-items-center rounded-full bg-[#317363] text-white shadow-xl transition hover:-translate-y-1"><MessageCircle size={20} /></a><a href="tel:+919866618659" aria-label="Call clinic" className="grid size-12 place-items-center rounded-full bg-[#c47752] text-white shadow-xl transition hover:-translate-y-1"><Phone size={19} /></a></div>
      {selectedTreatment && <div className="fixed inset-0 z-50 grid place-items-center bg-[#102f2b]/70 p-5 backdrop-blur-md" onClick={() => setSelectedTreatment(null)}><div role="dialog" aria-modal="true" aria-labelledby="treatment-dialog-title" className="w-full max-w-lg overflow-hidden rounded-[2rem] border border-white/50 bg-[#f7f5ef] shadow-2xl" onClick={(event) => event.stopPropagation()}><div className="flex items-start justify-between border-b border-[#dce7d8] bg-[#eef4e9] p-6"><div><span className="grid size-12 place-items-center rounded-full bg-[#dce9d9] text-[#317363]"><Leaf size={22} /></span><p className="mt-5 text-xs font-bold uppercase tracking-[.2em] text-[#c47752]">Personalized care</p><h2 id="treatment-dialog-title" className="mt-2 font-serif text-3xl text-[#173f39]">{selectedTreatment.name}</h2></div><button onClick={() => setSelectedTreatment(null)} aria-label="Close treatment information" className="grid size-9 place-items-center rounded-full bg-white text-[#52736b] shadow-sm transition hover:bg-[#e5f0e1]"><X size={18} /></button></div><div className="p-6"><p className="text-base leading-7 text-[#617a72]">{selectedTreatment.text}</p><p className="mt-4 text-sm leading-6 text-[#617a72]">Our practitioners take time to understand your symptoms, daily routine, and goals before creating a gentle, practical care plan tailored to you.</p><div className="mt-6 grid gap-3 sm:grid-cols-3"><div className="rounded-2xl bg-[#e8efe3] p-3 text-center"><strong className="block text-sm text-[#173f39]">Listen first</strong><span className="mt-1 block text-xs text-[#708780]">Thoughtful consultation</span></div><div className="rounded-2xl bg-[#f9e9df] p-3 text-center"><strong className="block text-sm text-[#173f39]">Natural care</strong><span className="mt-1 block text-xs text-[#708780]">Clear guidance</span></div><div className="rounded-2xl bg-[#eee9f5] p-3 text-center"><strong className="block text-sm text-[#173f39]">Your pace</strong><span className="mt-1 block text-xs text-[#708780]">Supportive follow-up</span></div></div><button onClick={() => { setSelectedTreatment(null); scrollTo('booking') }} className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-[#317363] py-3.5 text-sm font-bold text-white transition hover:bg-[#245c50]">Discuss your care <ArrowRight size={16} /></button></div></div></div>}
      {queue && <div className="fixed inset-0 z-50 grid place-items-center bg-[#102f2b]/60 p-5 backdrop-blur-sm"><div className="w-full max-w-md rounded-3xl bg-[#f7f5ef] p-7 shadow-2xl"><div className="flex items-start justify-between"><div><p className="text-xs font-bold uppercase tracking-widest text-[#c47752]">Live clinic queue</p><h2 className="mt-2 font-serif text-3xl">Check your queue</h2></div><button onClick={() => setQueue(false)} aria-label="Close queue"><X /></button></div><input placeholder="Enter mobile number" className="mt-7 w-full rounded-xl border border-[#d6e1d4] bg-white px-4 py-3 outline-none focus:border-[#317363]" /><button onClick={() => setQueue(false)} className="mt-4 w-full rounded-full bg-[#317363] py-3.5 text-sm font-bold text-white">Check status</button><div className="mt-6 flex items-center gap-4 rounded-2xl bg-[#e5f0e1] p-4"><span className="grid size-12 place-items-center rounded-full bg-white font-serif text-xl text-[#c47752]">A-125</span><div><p className="font-semibold">Currently waiting</p><p className="text-sm text-[#617a72]">4 patients ahead · 25–35 min</p></div></div></div></div>}
      {doctorInfo && <div className="fixed inset-0 z-50 grid place-items-center bg-[#102f2b]/70 p-3 backdrop-blur-md sm:p-5"><div role="dialog" aria-modal="true" aria-labelledby="doctor-dialog-title" className="w-full max-w-4xl max-h-[calc(100vh-24px)] overflow-hidden rounded-[2rem] border border-white/50 bg-[#f7f5ef] shadow-2xl"><div className="flex items-start justify-between border-b border-[#dce7d8] px-5 py-4 sm:px-7"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-[#c47752]">Our doctors · Annapoorna Clinic</p><h2 id="doctor-dialog-title" className="mt-2 font-serif text-4xl text-[#173f39] sm:text-5xl">Meet your care team</h2><p className="mt-2 max-w-xl text-sm leading-6 text-[#617a72]">Two experienced practitioners, one shared belief: care should feel personal, clear, and kind.</p></div><button onClick={() => setDoctorInfo(false)} aria-label="Back to clinic page" className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-2 text-xs font-bold text-[#52736b] shadow-sm transition hover:bg-[#e5f0e1]"><ArrowLeft size={15} /> Back</button></div><div className="grid gap-5 p-6 sm:grid-cols-2 sm:p-9"><article className="overflow-hidden rounded-3xl border border-[#dce7d8] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"><div className="relative h-56 overflow-hidden bg-[#dce9d9]"><img src="/images/annapoorna-doctor.png" alt="Dr. Sanggetha, Ayurvedic physician" className="h-full w-full object-cover object-top" /><span className="absolute bottom-3 left-3 rounded-full bg-[#f7f5ef]/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#c47752]">Ayurveda</span></div><div className="p-5 sm:p-6"><h3 className="font-serif text-2xl text-[#173f39]">Dr. Sanggetha B.A.M.S</h3><p className="mt-1 text-xs font-semibold uppercase tracking-wide text-[#79928a]">Ayurvedic Physician · 10+ years</p><p className="mt-4 text-sm leading-6 text-[#617a72]">A compassionate Ayurvedic physician focused on women&apos;s wellness, digestive health, lifestyle conditions, and personalized care plans grounded in natural healing.</p><div className="mt-4 flex flex-wrap gap-2"><span className="rounded-full bg-[#edf3e9] px-3 py-1.5 text-xs font-semibold text-[#317363]">Personalized care</span><span className="rounded-full bg-[#edf3e9] px-3 py-1.5 text-xs font-semibold text-[#317363]">Lifestyle guidance</span></div></div></article><article className="overflow-hidden rounded-3xl border border-[#dce7d8] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"><div className="relative h-56 overflow-hidden bg-[#dce9d9]"><img src="/images/dr-mallesh.png" alt="Dr. Mallesh, homoeopathic physician" className="h-full w-full object-cover object-top" /><span className="absolute bottom-3 left-3 rounded-full bg-[#f7f5ef]/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#c47752]">Homoeopathy</span></div><div className="p-5 sm:p-6"><h3 className="font-serif text-2xl text-[#173f39]">Dr. Mallesh B.H.M.S</h3><p className="mt-1 text-xs font-semibold uppercase tracking-wide text-[#79928a]">Homoeopathic Physician · 8+ years</p><p className="mt-4 text-sm leading-6 text-[#617a72]">A thoughtful homoeopathic physician known for attentive consultations, clear explanations, and gentle individualized support for chronic and recurring concerns.</p><div className="mt-4 flex flex-wrap gap-2"><span className="rounded-full bg-[#edf3e9] px-3 py-1.5 text-xs font-semibold text-[#317363]">Holistic support</span><span className="rounded-full bg-[#edf3e9] px-3 py-1.5 text-xs font-semibold text-[#317363]">Follow-up care</span></div></div></article></div><div className="flex flex-col gap-3 border-t border-[#dce7d8] bg-[#edf3e9] px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-9"><div><p className="font-serif text-xl text-[#173f39]">Ready to talk through your health?</p><p className="mt-1 text-sm text-[#617a72]">Choose a convenient time and let&apos;s take the first step together.</p></div><button onClick={() => { setDoctorInfo(false); scrollTo('booking') }} className="shrink-0 rounded-full bg-[#317363] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#317363]/20 transition hover:-translate-y-0.5 hover:bg-[#245c50]">Book a consultation <ArrowRight className="ml-2 inline" size={16} /></button></div></div></div>}
    </main>
  )
}

