import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Calendar, HeartPulse, MessageCircle, PawPrint, ShieldCheck, Stethoscope } from 'lucide-react';

const slides = [
  { title: 'Premium Veterinary Care', text: 'Modern, trusted, warm care for pets who are family.' },
  { title: 'Smart Pet Booking & Reminders', text: 'Book visits, receive WhatsApp reminders, and keep follow-ups organized.' },
  { title: 'Emergency Support When It Matters', text: 'Fast emergency action buttons and minimal urgent booking flow.' }
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setIndex((prev) => (prev + 1) % slides.length), 4300);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-navy pt-28 text-white">
      <div className="paw-particles" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(216,181,109,.22),transparent_32%),radial-gradient(circle_at_75%_20%,rgba(31,167,122,.16),transparent_35%),linear-gradient(135deg,#081827_0%,#101827_48%,#1b2737_100%)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 lg:grid-cols-2 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-gold backdrop-blur">
            <ShieldCheck className="h-4 w-4" /> Led by Dr. Hatem · Premium Veterinary Clinic
          </div>
          <AnimatePresence mode="wait">
            <motion.div key={slides[index].title} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.45 }}>
              <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight md:text-7xl">
                Premium Veterinary Care for Pets Who Are Family
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75 md:text-xl">
                <strong className="text-gold">{slides[index].title}.</strong> {slides[index].text} Led by Dr. Hatem, Premium Pet Clinic delivers trusted medical care, smart booking, reminders, and a modern pet health experience designed around comfort, safety, and love.
              </p>
            </motion.div>
          </AnimatePresence>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/booking" className="group inline-flex items-center gap-2 rounded-full bg-gold px-6 py-4 font-black text-navy shadow-premium transition hover:-translate-y-1"><Calendar className="h-5 w-5" /> Book Appointment <span className="text-xs">احجز موعد</span></Link>
            <Link to="/emergency" className="emergency-pulse inline-flex items-center gap-2 rounded-full bg-roseEmergency px-6 py-4 font-black text-white shadow-premium"><HeartPulse className="h-5 w-5" /> Emergency Case</Link>
            <a href="https://wa.me/200000000000" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-4 font-black text-white backdrop-blur transition hover:bg-white/15"><MessageCircle className="h-5 w-5" /> WhatsApp Us</a>
            <Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-4 font-black text-white transition hover:bg-white/10"><Stethoscope className="h-5 w-5" /> View Services</Link>
          </div>
          <div className="mt-8 flex gap-2">
            {slides.map((s, i) => <button key={s.title} onClick={() => setIndex(i)} className={`h-2 rounded-full transition-all ${i === index ? 'w-12 bg-gold' : 'w-3 bg-white/30'}`} aria-label={`Show ${s.title}`} />)}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.1 }} className="relative">
          <div className="floating-card relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/10 p-5 shadow-premium backdrop-blur-xl">
            <div className="h-full rounded-[2rem] bg-[radial-gradient(circle_at_50%_22%,rgba(251,247,239,.98),rgba(234,220,198,.92)_38%,rgba(216,181,109,.18)_78%)] p-6 text-navy">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.25em] text-emerald">Pet 360</p>
                  <h3 className="text-3xl font-black">Bella's Care Card</h3>
                </div>
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-navy text-gold"><PawPrint className="h-7 w-7" /></div>
              </div>
              <div className="mt-8 grid place-items-center">
                <div className="relative grid h-48 w-48 place-items-center rounded-full bg-white shadow-premium">
                  <span className="text-7xl">🐶</span>
                  <span className="absolute -right-2 top-8 rounded-full bg-emerald px-3 py-1 text-xs font-black text-white">Healthy</span>
                  <span className="absolute -bottom-2 left-4 rounded-full bg-gold px-3 py-1 text-xs font-black text-navy">Reminder set</span>
                </div>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-3">
                {['Vaccination', 'Follow-up', 'Invoice', 'History'].map((item) => <div key={item} className="rounded-3xl bg-white/70 p-4 text-sm font-black shadow-soft">{item}</div>)}
              </div>
              <div className="mt-5 rounded-3xl bg-navy p-4 text-white">
                <div className="heartbeat-line" />
                <p className="mt-3 text-sm text-white/75">Smart reminders, digital records, and premium care in one clinic journey.</p>
              </div>
            </div>
          </div>
          <motion.div animate={{ y: [0, -12, 0] }} transition={{ repeat: Infinity, duration: 4 }} className="absolute -left-3 top-24 rounded-3xl bg-white p-4 text-navy shadow-premium">
            <strong>Emergency Ready</strong><p className="text-xs text-slate-500">Fast action flow</p>
          </motion.div>
          <motion.div animate={{ y: [0, 12, 0] }} transition={{ repeat: Infinity, duration: 4.6 }} className="absolute -right-3 bottom-24 rounded-3xl bg-gold p-4 text-navy shadow-premium">
            <strong>WhatsApp Care</strong><p className="text-xs text-navy/70">Reminder preview</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
