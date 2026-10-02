import { ArrowRight, CalendarDays, ChevronRight, Clock3, HeartPulse, MapPin, Phone, Star } from 'lucide-react'

const navigation = ['Overview', 'About', 'Reviews', 'Contact']

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f8f6f1] text-[#173d3b]">
      <header className="border-b border-[#dfe8e1] bg-[#f8f6f1]/95">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="Annapoorna Clinic home">
            <span className="grid size-10 place-items-center rounded-2xl bg-[#dcece0] text-[#28756b]"><HeartPulse size={21} strokeWidth={2.4} /></span>
            <span className="leading-none"><strong className="block font-serif text-lg tracking-tight">Annapoorna</strong><span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#72908a]">Clinic</span></span>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-medium text-[#56726d] md:flex" aria-label="Main navigation">
            {navigation.map((item) => <a key={item} href={`#${item.toLowerCase()}`} className="transition-colors hover:text-[#28756b]">{item}</a>)}
          </nav>
          <a href="#appointment" className="rounded-full bg-[#28756b] px-4 py-2.5 text-xs font-bold text-white shadow-sm transition hover:bg-[#1f6159]">Book a visit</a>
        </div>
      </header>

      <section id="top" className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-12 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:py-24">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#cfe2d4] bg-[#edf6ef] px-3 py-1.5 text-xs font-bold text-[#3c776e]"><span className="size-1.5 rounded-full bg-[#63a887]" /> Caring for families since 1998</div>
          <h1 className="max-w-xl font-serif text-[clamp(2.8rem,12vw,5.75rem)] leading-[.95] tracking-[-.055em] text-[#173d3b]">Care that feels <em className="font-normal text-[#c47b5a]">human.</em></h1>
          <p className="mt-6 max-w-md text-[15px] leading-7 text-[#617b76]">Personal, thoughtful healthcare for every stage of life. A trusted neighborhood clinic where your wellbeing always comes first.</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#appointment" className="inline-flex items-center gap-2 rounded-full bg-[#28756b] px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#28756b]/15">Make an appointment <ArrowRight size={16} /></a>
            <a href="#overview" className="rounded-full border border-[#bdd2c5] px-5 py-3.5 text-sm font-bold text-[#28756b]">Explore the clinic</a>
          </div>
          <div className="mt-9 flex items-center gap-5 text-xs text-[#718a84]"><span className="flex items-center gap-1.5"><Star size={15} fill="#d2944d" className="text-[#d2944d]" /> <strong className="text-[#315d57]">4.8</strong> patient rating</span><span className="h-4 w-px bg-[#cbdad0]" /><span>English · Telugu</span></div>
        </div>
        <div className="relative mx-auto w-full max-w-[430px]">
          <div className="absolute -right-3 -top-3 size-24 rounded-full bg-[#e5eddb]" />
          <div className="absolute -bottom-4 -left-4 size-28 rounded-full bg-[#f0d8c7]" />
          <div className="relative overflow-hidden rounded-[2rem] bg-[#dcece0] p-3 shadow-2xl shadow-[#173d3b]/10"><div className="flex aspect-[.9] flex-col justify-between overflow-hidden rounded-[1.5rem] bg-[#aacbbb] p-6"><div className="flex justify-between"><span className="rounded-full bg-white/70 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#28756b]">Your health, our purpose</span><HeartPulse className="text-white" size={22} /></div><div><p className="font-serif text-4xl leading-tight text-white">A gentler<br />way to heal.</p><p className="mt-3 max-w-[190px] text-xs leading-5 text-white/80">Modern care, rooted in compassion and community.</p></div></div></div>
          <div className="absolute -bottom-5 right-3 rounded-2xl bg-white p-3 shadow-xl"><div className="flex items-center gap-2"><span className="grid size-8 place-items-center rounded-xl bg-[#fff1e7] text-[#c47b5a]"><Clock3 size={16} /></span><span className="text-[11px] font-bold leading-4 text-[#315d57]">Open today<br /><span className="font-normal text-[#849792]">9:00 AM – 6:00 PM</span></span></div></div>
        </div>
      </section>

      <section id="overview" className="border-y border-[#dfe8e1] bg-white/55"><div className="mx-auto grid max-w-6xl gap-6 px-5 py-12 md:grid-cols-3 lg:px-8"><div className="md:col-span-3"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#c47b5a]">Why families choose us</p><h2 className="mt-2 max-w-lg font-serif text-3xl leading-tight tracking-tight text-[#173d3b]">Whole-person care, close to home.</h2></div>{[['01','A human touch','We listen carefully, explain clearly, and make every visit comfortable.'],['02','Trusted expertise','Thoughtful diagnosis and practical treatment for your everyday health.'],['03','Care for everyone','Welcoming, multilingual care for individuals and families.']].map(([number,title,body]) => <div key={number} className="rounded-2xl border border-[#dfe8e1] bg-[#fbfcf8] p-5"><span className="text-xs font-bold text-[#c47b5a]">{number}</span><h3 className="mt-8 font-serif text-xl text-[#173d3b]">{title}</h3><p className="mt-2 text-sm leading-6 text-[#708780]">{body}</p></div>)}</div></section>

      <section id="about" className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-[.8fr_1.2fr] lg:px-8"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-[#c47b5a]">About Annapoorna</p><h2 className="mt-3 font-serif text-4xl leading-tight tracking-tight">A clinic built around <span className="text-[#28756b]">you.</span></h2></div><div className="grid gap-6 text-sm leading-7 text-[#617b76] md:grid-cols-2"><p>For more than two decades, Annapoorna Clinic has been a dependable part of the community. Our approach is simple: quality treatment, honest guidance, and a warm welcome for every patient.</p><p>We believe good healthcare should be accessible and personal. From your first conversation to your follow-up, our team is here to help you feel informed and cared for.</p></div></section>

      <section id="reviews" className="bg-[#173d3b] text-[#f5f6ed]"><div className="mx-auto max-w-6xl px-5 py-14 lg:px-8"><div className="flex flex-wrap items-end justify-between gap-5"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-[#e2ae82]">Kind words</p><h2 className="mt-2 font-serif text-3xl">What our patients say</h2></div><div className="flex items-center gap-2 text-sm"><Star size={17} fill="#e2ae82" className="text-[#e2ae82]" /> <strong>4.8 / 5</strong> from our community</div></div><blockquote className="mt-8 max-w-2xl font-serif text-2xl leading-snug text-[#e7eee5]">“The doctors take the time to understand you. I always leave feeling heard, reassured, and in good hands.”<footer className="mt-4 font-sans text-xs font-bold uppercase tracking-widest text-[#9dbdb2]">— A happy patient</footer></blockquote></div></section>

      <section id="appointment" className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-[1fr_.8fr] lg:px-8"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-[#c47b5a]">Let&apos;s talk</p><h2 className="mt-3 font-serif text-4xl leading-tight tracking-tight">Your next step starts here.</h2><p className="mt-4 max-w-md text-sm leading-6 text-[#708780]">Call us or send a request and our team will help find a convenient time for your visit.</p><div className="mt-7 flex flex-col gap-3 text-sm font-semibold text-[#315d57]"><a href="tel:+919876543210" className="flex items-center gap-3"><span className="grid size-9 place-items-center rounded-xl bg-[#e5f0e7] text-[#28756b]"><Phone size={16} /></span>+91 98765 43210</a><span className="flex items-center gap-3"><span className="grid size-9 place-items-center rounded-xl bg-[#fff0e6] text-[#c47b5a]"><MapPin size={16} /></span>12, Main Road, Hyderabad</span></div></div><div className="rounded-3xl bg-[#edf5ee] p-6"><h3 className="font-serif text-2xl">Request a visit</h3><form className="mt-5 space-y-3" action="tel:+919876543210"><label className="sr-only" htmlFor="name">Your name</label><input id="name" placeholder="Your name" className="w-full rounded-xl border border-[#d3e2d7] bg-white px-4 py-3 text-sm outline-none placeholder:text-[#9aada7] focus:border-[#28756b]" /><label className="sr-only" htmlFor="phone">Phone number</label><input id="phone" type="tel" placeholder="Phone number" className="w-full rounded-xl border border-[#d3e2d7] bg-white px-4 py-3 text-sm outline-none placeholder:text-[#9aada7] focus:border-[#28756b]" /><button type="submit" className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#28756b] px-4 py-3.5 text-sm font-bold text-white">Call to confirm <ChevronRight size={16} /></button></form></div></section>

      <footer id="contact" className="border-t border-[#dfe8e1] px-5 py-7 text-xs text-[#718a84]"><div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 md:flex-row lg:px-8"><span>© 2024 Annapoorna Clinic</span><span>Compassionate care. Every day.</span></div></footer>
    </main>
  )
}
