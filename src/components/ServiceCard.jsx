import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, BadgeCheck, Calendar, HeartPulse, Microscope, Pill, Scissors, ShieldCheck, Smile, Stethoscope, Syringe } from 'lucide-react';

const iconMap = { Stethoscope, Syringe, HeartPulse, ShieldCheck, Smile, Scissors, Microscope, Pill, Calendar, BadgeCheck };

export default function ServiceCard({ service }) {
  const Icon = iconMap[service.icon] || Stethoscope;
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -8, scale: 1.01 }}
      className="group rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft transition hover:shadow-premium"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="grid h-14 w-14 place-items-center rounded-2xl bg-navy text-gold transition group-hover:rotate-3 group-hover:scale-110"><Icon className="h-7 w-7" /></div>
        <span className="rounded-full bg-emerald/10 px-3 py-1 text-xs font-black text-emerald">{service.category}</span>
      </div>
      <h3 className="mt-6 text-xl font-black text-navy">{service.title}</h3>
      <p className="mt-3 min-h-20 leading-7 text-slate-600">{service.description}</p>
      <div className="mt-5 flex flex-wrap gap-2 text-xs font-bold">
        <span className="rounded-full bg-gold/15 px-3 py-1 text-navy">{service.pet}</span>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-600">{service.price}</span>
        <span className="rounded-full bg-emerald/10 px-3 py-1 text-emerald">Reminder ready</span>
      </div>
      <div className="mt-6 flex gap-3">
        <Link to="/booking" className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-navy px-4 py-3 text-sm font-black text-white transition hover:bg-charcoal">Book this service <ArrowRight className="h-4 w-4" /></Link>
        <Link to="/reminders-whatsapp" className="rounded-full border border-slate-200 px-4 py-3 text-sm font-black text-navy hover:bg-ivory">Reminder</Link>
      </div>
    </motion.article>
  );
}
