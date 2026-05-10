import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, HeartPulse, MessageCircle, PawPrint, ShieldCheck, Sparkles, Stethoscope } from 'lucide-react';
import SEO from '../components/SEO';
import SectionTitle from '../components/SectionTitle';

const principles = [
  'Every pet is treated as family',
  'Every visit is documented',
  'Every owner receives clear updates',
  'Every treatment has a follow-up plan',
  'Every emergency gets priority handling'
];

const philosophy = ['Compassionate care', 'Medical accuracy', 'Transparent communication', 'Preventive care', 'Digital clinic transformation', 'Staff discipline and service standards'];

export default function AboutDoctor() {
  return (
    <>
      <SEO title="About Dr. Hatem | Premium Pet Clinic Egypt" description="Meet Dr. Hatem, CEO and Lead Veterinary Doctor of Premium Pet Clinic, focused on compassionate care, medical accuracy, and modern clinic operations." />
      <section className="page-hero">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 lg:grid-cols-2 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
            <span className="pill-gold">About Dr. Hatem</span>
            <h1 className="mt-6 text-4xl font-black tracking-tight text-white md:text-6xl">Leading Premium Veterinary Care with Trust, Precision, and Compassion.</h1>
            <p className="mt-6 text-lg leading-8 text-white/75">Dr. Hatem is positioned as the clinic leader and trusted face of Premium Veterinary Clinic, combining warm pet care, clear owner communication, ethical practice, and structured digital operations.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/booking" className="btn-gold"><Calendar className="h-5 w-5" /> Book with Dr. Hatem</Link>
              <a href="https://wa.me/200000000000" className="btn-glass"><MessageCircle className="h-5 w-5" /> Ask a Question</a>
              <Link to="/emergency" className="btn-emergency"><HeartPulse className="h-5 w-5" /> Emergency Case</Link>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} className="rounded-[2.5rem] border border-white/10 bg-white/10 p-5 shadow-premium backdrop-blur-xl">
            <div className="rounded-[2rem] bg-ivory p-8 text-navy">
              <div className="mx-auto grid h-56 w-56 place-items-center rounded-full bg-white shadow-premium"><span className="text-8xl">👨‍⚕️</span></div>
              <div className="mt-7 text-center"><h2 className="text-3xl font-black">Dr. Hatem</h2><p className="mt-2 font-bold text-emerald">CEO / Lead Veterinary Doctor</p></div>
              <div className="mt-6 grid grid-cols-3 gap-3 text-center text-sm font-black">
                <div className="rounded-2xl bg-white p-3">Trust</div><div className="rounded-2xl bg-white p-3">Care</div><div className="rounded-2xl bg-white p-3">Follow-up</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionTitle eyebrow="Professional Story" title="A clinic leader focused on care quality and owner trust" description="Premium care is not only about treatment. It is about disciplined communication, documented visits, safe follow-up, and a calm experience for both pets and owners." />
          <div className="grid gap-6 lg:grid-cols-3">
            {philosophy.map((item, index) => <motion.div key={item} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.04 }} className="rounded-[2rem] border border-slate-200 bg-ivory p-6 shadow-soft"><Sparkles className="mb-4 h-7 w-7 text-gold" /><h3 className="font-black text-navy">{item}</h3><p className="mt-3 leading-7 text-slate-600">A core leadership principle shaping how the clinic communicates, documents, and follows up with pet owners.</p></motion.div>)}
          </div>
        </div>
      </section>

      <section className="bg-ivory py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div><SectionTitle align="left" eyebrow="Signature Care Principles" title="Clear principles behind every visit" description="The clinic experience is designed to reduce confusion and increase confidence." /></div>
            <div className="grid gap-4">
              {principles.map((p) => <div key={p} className="flex items-center gap-4 rounded-3xl bg-white p-5 shadow-soft"><ShieldCheck className="h-6 w-6 text-emerald" /><strong className="text-navy">{p}</strong></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionTitle light eyebrow="Doctor Timeline" title="Experience, milestones, certifications, achievements" description="Replace the placeholders below with Dr. Hatem’s official biography, certificates, and clinic milestones." />
          <div className="grid gap-5 md:grid-cols-4">
            {['Veterinary practice milestone', 'Premium clinic leadership', 'Digital care transformation', 'Emergency-first culture'].map((m, i) => <div key={m} className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-soft"><PawPrint className="mb-4 h-7 w-7 text-gold" /><div className="text-sm font-black text-gold">Step {i + 1}</div><h3 className="mt-2 font-black">{m}</h3><p className="mt-3 leading-7 text-white/65">Official details placeholder for accurate medical and professional data.</p></div>)}
          </div>
        </div>
      </section>
    </>
  );
}
