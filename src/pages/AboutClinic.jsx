import { motion } from 'framer-motion';
import { ArrowRight, BadgeCheck, Calendar, CreditCard, FileText, MessageCircle, PawPrint, ShieldCheck, Stethoscope, UserRound } from 'lucide-react';
import SEO from '../components/SEO';
import SectionTitle from '../components/SectionTitle';

const values = ['Compassion', 'Medical excellence', 'Trust', 'Transparency', 'Safety', 'Innovation', 'Follow-up care', 'Respect for every pet'];
const standards = ['Cleanliness', 'Accurate diagnosis documentation', 'Owner communication', 'Emergency handling', 'Medical record continuity', 'Service pricing clarity', 'Reminder discipline', 'Audit and admin control'];
const flow = ['Owner', 'Booking', 'Pet Profile', 'Visit', 'Diagnosis', 'Services', 'Invoice', 'Reminder', 'WhatsApp Follow-up', 'Medical History'];

export default function AboutClinic() {
  return (
    <>
      <SEO title="About Premium Veterinary Clinic Egypt" description="Premium Veterinary Clinic mission, vision, values, quality standards, and smart clinic operations." />
      <section className="page-hero text-center">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <span className="pill-gold">Premium Veterinary Clinic</span>
          <h1 className="mt-6 text-4xl font-black tracking-tight text-white md:text-6xl">A warm, modern, technology-enabled pet-care destination.</h1>
          <p className="mt-6 text-lg leading-8 text-white/75">Premium Pet Clinic combines medical care, pet-friendly hospitality, smart booking, digital records, transparent invoices, and WhatsApp follow-up.</p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-2 lg:px-8">
          <div className="rounded-[2rem] bg-navy p-8 text-white shadow-premium"><h2 className="text-3xl font-black text-gold">Mission</h2><p className="mt-5 text-lg leading-8 text-white/75">To deliver premium, trusted, and technology-enabled veterinary care that protects pets and supports owners with clarity, compassion, and professionalism.</p></div>
          <div className="rounded-[2rem] bg-ivory p-8 text-navy shadow-soft"><h2 className="text-3xl font-black">Vision</h2><p className="mt-5 text-lg leading-8 text-slate-600">To become one of Egypt’s most trusted premium veterinary care destinations.</p></div>
        </div>
      </section>

      <section className="bg-ivory py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionTitle eyebrow="Values" title="The behaviors behind premium care" description="The website communicates a clinic culture built around trust, safety, documentation, and follow-up." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{values.map((v) => <div key={v} className="rounded-3xl bg-white p-5 text-center font-black text-navy shadow-soft"><BadgeCheck className="mx-auto mb-3 h-6 w-6 text-emerald" />{v}</div>)}</div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div><SectionTitle align="left" eyebrow="Quality Standards" title="A disciplined clinic experience from start to finish" description="Quality is visible through clean operations, accurate records, owner communication, and clear service pricing." /></div>
            <div className="grid gap-3 sm:grid-cols-2">{standards.map((s) => <div key={s} className="flex items-center gap-3 rounded-3xl border border-slate-200 p-4 shadow-soft"><ShieldCheck className="h-5 w-5 text-gold" /><strong className="text-navy">{s}</strong></div>)}</div>
          </div>
        </div>
      </section>

      <section className="bg-navy py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionTitle light eyebrow="Clinic Operations Diagram" title="Owner → Booking → Medical History" description="A clear operating model prepared for backend integration." />
          <div className="flex flex-wrap items-center justify-center gap-3">
            {flow.map((step, index) => {
              const Icon = [UserRound, Calendar, PawPrint, Stethoscope, FileText, ShieldCheck, CreditCard, Calendar, MessageCircle, FileText][index] || PawPrint;
              return <motion.div key={step} initial={{ opacity: 0, scale: 0.92 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="flex items-center gap-3"><div className="rounded-3xl bg-white p-4 text-navy shadow-soft"><Icon className="mx-auto mb-2 h-6 w-6 text-gold" /><strong>{step}</strong></div>{index < flow.length - 1 && <ArrowRight className="h-5 w-5 text-gold" />}</motion.div>;
            })}
          </div>
        </div>
      </section>
    </>
  );
}
