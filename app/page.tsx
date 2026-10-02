'use client'

import { useState } from 'react'
import {
  ArrowRight, CalendarDays, Check, ChevronRight, Clock3, HeartPulse, Leaf,
  MapPin, Menu, MessageCircle, Phone, ShieldCheck, Sparkles, Star, Stethoscope,
  Users, X
} from 'lucide-react'

const treatments = [
  ['Women\'s Health', 'Thoughtful support for every stage of life.', '🌿'],
  ['Digestive Health', 'Gentle care for everyday digestive wellbeing.', '◌'],
  ['Skin & Hair Care', 'Natural routines for healthier skin and hair.', '✦'],
  ['Pain Management', 'Personalized support for comfort and mobility.', '⌁'],
  ['Lifestyle Disorders', 'Practical care for sustainable wellbeing.', '◒'],
  ['Respiratory Care', 'Holistic guidance for easier breathing.', '〰'],
]

const queueSteps = ['Registered', 'Token Generated', 'Waiting', 'Called', 'Consultation']

export default function Page() {
  const [page, setPage] = useState('home')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [bookingStep, setBookingStep] = useState(1)
  const [selectedTime, setSelectedTime] = useState('10:30 AM')
  const [queueChecked, setQueueChecked] = useState(false)
  const [dashboard, setDashboard] = useState<'reception' | 'doctor' | null>(null)

  const go = (next: string) => { setPage(next); setMobileOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }) }

  return (
    <main className="min-h-screen overflow-hidden bg-[#f8f6f1] text-[#173d3b]">
      <div className="bg-[#173d3b] px-5 py-2 text-center text-[11px] font-semibold tracking-wide text-[#dcece0]">Ayurveda · Homoeopathy · Holistic Care <span className="mx-2 text-[#a7c7b6]">|</span> Open today 9:00 AM – 6:00 PM</div>
      <header className="sticky top-0 z-30 border-b border-[#dfe8e1] bg-[#f8f6f1]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <button onClick={() => go('home')} className="flex items-center gap-3 text-left" aria-label="Annapoorna Clinic home"><span className="grid size-10 place-items-center rounded-2xl bg-[#dcece0] text-[#28756b]"><HeartPulse size={21} /></span><span className="leading-none"><strong className="block font-serif text-lg tracking-tight">Annapoorna</strong><span className="text-[10px] font-semibold uppercase tracking-[.2em] text-[#72908a]">Clinic</span></span></button>
          <nav className="hidden items-center gap-6 text-sm font-medium text-[#56726d] lg:flex" aria-label="Main navigation">{[['Home','home'],['About','about'],['Treatments','treatments'],['Our Doctor','doctor'],['Gallery','gallery'],['Contact','contact']].map(([label,id]) => <button key={id} onClick={() => go(id)} className="transition-colors hover:text-[#28756b]">{label}</button>)}</nav>
          <div className="hidden items-center gap-2 sm:flex"><button onClick={() => go('queue')} className="rounded-full border border-[#bdd2c5] px-4 py-2.5 text-xs font-bold text-[#28756b] transition hover:bg-[#eaf3eb]">Check Queue</button><button onClick={() => go('booking')} className="rounded-full bg-[#28756b] px-4 py-2.5 text-xs font-bold text-white shadow-lg shadow-[#28756b]/15 transition hover:bg-[#1f6159]">Book Appointment</button></div>
          <button className="lg:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">{mobileOpen ? <X /> : <Menu />}</button>
        </div>
        {mobileOpen && <div className="border-t border-[#dfe8e1] bg-[#f8f6f1] px-5 py-4 lg:hidden"><div className="grid gap-4 text-left text-sm font-semibold">{['home','about','treatments','doctor','gallery','contact','booking','queue'].map(id => <button key={id} onClick={() => go(id)} className="capitalize">{id === 'booking' ? 'Book Appointment' : id === 'queue' ? 'Check Queue' : id}</button>)}</div></div>}
      </header>

      {page === 'home' && <Home go={go} />}
      {page === 'booking' && <Booking step={bookingStep} setStep={setBookingStep} selectedTime={selectedTime} setSelectedTime={setSelectedTime} go={go} />}
      {page === 'queue' && <Queue checked={queueChecked} setChecked={setQueueChecked} go={go} />}
      {page === 'about' && <Editorial title="About Annapoorna Clinic" eyebrow="Our story" copy="A neighborhood clinic built around thoughtful conversations, personalized care, and the belief that healing should feel human." go={go} />}
      {page === 'treatments' && <Treatments go={go} />}
      {page === 'doctor' && <Doctor go={go} />}
      {page === 'gallery' && <Gallery />}
      {page === 'contact' && <Contact />}
      {dashboard && <Dashboard kind={dashboard} close={() => setDashboard(null)} />}

      <div className="fixed bottom-5 right-5 z-20 flex flex-col gap-2"><a href="https://wa.me/919866618659" className="grid size-12 place-items-center rounded-full bg-[#28756b] text-white shadow-xl transition hover:-translate-y-1" aria-label="WhatsApp clinic"><MessageCircle size={20} /></a><a href="tel:+919866618659" className="grid size-12 place-items-center rounded-full bg-[#c47b5a] text-white shadow-xl transition hover:-translate-y-1" aria-label="Call clinic"><Phone size={19} /></a></div>
      <footer className="bg-[#173d3b] px-5 py-12 text-[#c5d9d0] lg:px-8"><div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4"><div className="md:col-span-2"><div className="flex items-center gap-3 text-white"><span className="grid size-10 place-items-center rounded-2xl bg-[#dcece0] text-[#28756b]"><HeartPulse size={21} /></span><strong className="font-serif text-xl">Annapoorna Clinic</strong></div><p className="mt-4 max-w-sm text-sm leading-6 text-[#9dbdb2]">Ayurveda & Homoeopathy care rooted in compassion, clarity, and community.</p></div><div><h3 className="font-semibold text-white">Explore</h3><div className="mt-4 grid gap-3 text-sm"><button className="text-left hover:text-white" onClick={() => go('about')}>About us</button><button className="text-left hover:text-white" onClick={() => go('treatments')}>Treatments</button><button className="text-left hover:text-white" onClick={() => go('doctor')}>Our Doctor</button></div></div><div><h3 className="font-semibold text-white">Visit us</h3><p className="mt-4 text-sm leading-6">8-7, 89/46, Road Number 1<br />B.N Reddy Nagar, Hyderabad<br />Telangana 500079</p><a href="tel:+919866618659" className="mt-3 block text-sm text-[#e2ae82]">098666 18659</a></div></div><div className="mx-auto mt-10 max-w-7xl border-t border-[#315851] pt-5 text-xs text-[#87aaa0]">© 2026 Annapoorna Clinic</div></footer>
    </main>
  )
}

function Home({ go }: { go: (page: string) => void }) {
  return <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8"><h1 className="font-serif text-5xl">Annapoorna Clinic</h1><p className="mt-4 text-lg text-[#708780]">Traditional healing with personalized care</p><button onClick={() => go('booking')} className="mt-8 rounded-full bg-[#28756b] px-6 py-3.5 text-sm font-bold text-white">Book Appointment</button></section>
}

function Booking({ step, setStep, selectedTime, setSelectedTime, go }: any) {
  return <section className="mx-auto max-w-2xl px-5 py-16 lg:px-8"><h1 className="font-serif text-5xl">Book an Appointment</h1><p className="mt-3 text-[#708780]">Schedule your consultation</p><button onClick={() => setStep(3)} className="mt-8 rounded-full bg-[#28756b] px-6 py-3.5 text-sm font-bold text-white">Confirm Booking</button></section>
}

function Queue({ checked, setChecked, go }: any) {
  return <section className="mx-auto max-w-2xl px-5 py-16 lg:px-8"><h1 className="font-serif text-5xl">Check Queue</h1><p className="mt-3 text-[#708780]">Enter your details to check wait time</p><input className="mt-4 w-full rounded-lg border px-4 py-2" placeholder="Mobile number" /><button onClick={() => setChecked(true)} className="mt-4 rounded-full bg-[#28756b] px-6 py-3 text-sm font-bold text-white">Check Status</button></section>
}

function Editorial({ title, eyebrow, copy, go }: any) {
  return <section className="mx-auto max-w-2xl px-5 py-16 lg:px-8"><p className="text-xs font-bold uppercase text-[#c47b5a]">{eyebrow}</p><h1 className="mt-3 font-serif text-5xl">{title}</h1><p className="mt-6 text-lg text-[#708780]">{copy}</p><button onClick={() => go('booking')} className="mt-8 rounded-full bg-[#28756b] px-6 py-3.5 text-sm font-bold text-white">Book Now</button></section>
}

function Treatments({ go }: any) {
  return <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8"><h1 className="font-serif text-5xl">Our Treatments</h1><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{treatments.map(([name, desc]) => <button key={name} onClick={() => go('booking')} className="rounded-2xl border border-[#dfe8e1] bg-white p-6 text-left hover:shadow-lg"><h3 className="font-serif text-xl">{name}</h3><p className="mt-2 text-sm text-[#708780]">{desc}</p></button>)}</div></section>
}

function Doctor({ go }: any) {
  return <section className="mx-auto max-w-2xl px-5 py-16 lg:px-8"><h1 className="font-serif text-5xl">Our Doctor</h1><p className="mt-4 text-lg text-[#708780]">Dr. Sangeeta - Experienced in Ayurveda and Homoeopathy</p><button onClick={() => go('booking')} className="mt-8 rounded-full bg-[#28756b] px-6 py-3.5 text-sm font-bold text-white">Book with Doctor</button></section>
}

function Gallery() {
  return <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8"><h1 className="font-serif text-5xl">Gallery</h1><div className="mt-10 grid gap-4 sm:grid-cols-2"><div className="h-48 rounded-2xl bg-[#dcece0]"></div><div className="h-48 rounded-2xl bg-[#e5eddb]"></div></div></section>
}

function Contact() {
  return <section className="mx-auto max-w-2xl px-5 py-16 lg:px-8"><h1 className="font-serif text-5xl">Contact Us</h1><p className="mt-4">8-7, 89/46, Road Number 1, Hyderabad</p><a href="tel:+919866618659" className="mt-4 block text-[#28756b] font-bold">098666 18659</a></section>
}

function Dashboard({ kind, close }: { kind: 'reception'|'doctor', close: ()=>void }) {
  return <div className="fixed inset-0 z-50 bg-white p-8"><button onClick={close} className="mb-4 text-xl">✕</button><h1 className="font-serif text-3xl">{kind === 'doctor' ? 'Doctor Dashboard' : 'Reception Dashboard'}</h1></div>
}
