import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Bell, Calendar, CheckCircle, CreditCard, HeartPulse, MessageCircle, PawPrint, ShieldCheck, Sparkles, Stethoscope } from 'lucide-react';
import SEO from '../components/SEO';
import HeroSlider from '../components/HeroSlider';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import PetJourneyTimeline from '../components/PetJourneyTimeline';
import AnimatedCounter from '../components/AnimatedCounter';
import AdminPreview from '../components/AdminPreview';
import { featureHighlights, services, testimonials, trustBadges, whyChoose } from '../data/siteData';

export default function Home() {
  return (
    <>
      <SEO title="Premium Pet Clinic Egypt | Dr. Hatem Veterinary Care" description="Premium Pet Clinic Egypt led by Dr. Hatem: trusted veterinary care, booking, emergency support, WhatsApp reminders, pet medical records, and invoices." />
      <HeroSlider />

      <section className="bg-white py-8">
        <div className="mx-auto grid max-w-7xl gap-3 px-4 sm:grid-cols-2 lg:grid-cols-6 lg:px-8">
          {trustBadges.map((badge) => <div key={badge} className="rounded-3xl border border-slate-200 bg-ivory px-4 py-4 text-center text-sm font-black text-navy shadow-soft"><CheckCircle className="mx-auto mb-2 h-5 w-5 text-emerald" />{badge}</div>)}
        </div>
      </section>

      <section className="bg-ivory py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionTitle eyebrow="Services Preview" title="Premium care services, clearly presented" description="Each service card supports booking, reminder concepts, pricing placeholders, and future API integration." />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service) => <ServiceCard key={service.title} service={service} />)}
          </div>
          <div className="mt-10 text-center"><Link to="/services" className="inline-flex items-center gap-2 rounded-full bg-navy px-7 py-4 font-black text-white shadow-soft">View All Services <Stethoscope className="h-5 w-5" /></Link></div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionTitle align="left" eyebrow="Why Choose Us" title="Medical trust with hospitality-level care" description="The experience is built to be warm, premium, and operationally disciplined from booking to follow-up." />
              <div className="grid gap-3 sm:grid-cols-2">
                {whyChoose.map((item) => <motion.div key={item} whileHover={{ x: 4 }} className="flex items-center gap-3 rounded-3xl border border-slate-200 bg-white p-4 shadow-soft"><ShieldCheck className="h-5 w-5 text-gold" /><strong className="text-navy">{item}</strong></motion.div>)}
              </div>
            </div>
            <div className="rounded-[2rem] bg-navy p-6 text-white shadow-premium">
              <div className="heartbeat-line" />
              <div className="mt-8 grid grid-cols-2 gap-4">
                <AnimatedCounter value={12} label="Care modules" suffix="" />
                <AnimatedCounter value={3} label="Booking modes" suffix="" />
                <AnimatedCounter value={10} label="Smart features" suffix="+" />
                <AnimatedCounter value={24} label="Emergency visibility" suffix="/7" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionTitle eyebrow="Pet Care Journey" title="From booking to WhatsApp follow-up" description="A complete animated journey designed for pet owners, clinic teams, and future operational integration." />
          <PetJourneyTimeline compact />
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionTitle eyebrow="Feature Highlights" title="A digital clinic experience, not just a website" description="The frontend is prepared for owners, pets, bookings, reminders, invoices, payment methods, users, roles, and audit logs." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {featureHighlights.map((item, index) => {
              const Icon = [Calendar, HeartPulse, PawPrint, Bell, MessageCircle, CreditCard, Sparkles, ShieldCheck, PawPrint, CheckCircle][index] || Sparkles;
              return <motion.div key={item} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.025 }} className="rounded-3xl border border-slate-200 bg-white p-5 text-center shadow-soft"><Icon className="mx-auto mb-3 h-6 w-6 text-gold" /><strong className="text-navy">{item}</strong></motion.div>;
            })}
          </div>
        </div>
      </section>

      <section className="bg-navy py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionTitle light eyebrow="Digital Workflow" title="Clinic portal preview for confidence" description="A public-facing preview of the internal operating model without exposing private tools." />
          <AdminPreview />
        </div>
      </section>

      <section className="bg-ivory py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionTitle eyebrow="Testimonials" title="Warm words from pet owners" description="Use real client testimonials after launch. These placeholders show the intended premium tone." />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((t) => <article key={t.owner} className="rounded-[2rem] bg-white p-6 shadow-soft"><div className="mb-4 text-3xl">🐾</div><div className="text-gold">★★★★★</div><p className="mt-4 leading-7 text-slate-600">“{t.text}”</p><div className="mt-5 font-black text-navy">{t.owner}</div><div className="text-sm text-slate-500">{t.pet} · {t.service}</div></article>)}
          </div>
        </div>
      </section>

      <section className="bg-navy px-4 py-20 text-white lg:px-8">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-white/10 bg-white/10 p-8 text-center shadow-premium backdrop-blur-xl md:p-12">
          <PawPrint className="mx-auto h-10 w-10 text-gold" />
          <h2 className="mt-5 text-3xl font-black md:text-5xl">Your pet deserves premium care. Book your visit today.</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-8 text-white/70">Book normally, use easy booking for simple visits, or start emergency support immediately.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/booking" className="rounded-full bg-gold px-7 py-4 font-black text-navy">Book Now</Link>
            <a href="tel:+200000000000" className="rounded-full bg-white px-7 py-4 font-black text-navy">Call Clinic</a>
            <Link to="/emergency" className="emergency-pulse rounded-full bg-roseEmergency px-7 py-4 font-black text-white">Emergency Support</Link>
          </div>
        </div>
      </section>
    </>
  );
}
