import { motion } from 'framer-motion';
import { Activity, BarChart3, Bell, ClipboardList, CreditCard, FileText, HeartPulse, LockKeyhole, MessageCircle, Settings, Users, Workflow } from 'lucide-react';
import { adminCards } from '../data/siteData';

const icons = [ClipboardList, HeartPulse, FileText, Bell, MessageCircle, CreditCard, CreditCard, Settings, Users, LockKeyhole, BarChart3, Workflow];

export default function AdminPreview() {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/10 p-4 shadow-premium backdrop-blur-xl md:p-7">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div><p className="text-sm font-black uppercase tracking-[0.25em] text-gold">Clinic Portal Preview</p><h3 className="mt-2 text-2xl font-black text-white">Structured digital workflow</h3></div>
        <div className="flex items-center gap-2 rounded-full bg-emerald/20 px-4 py-2 text-sm font-black text-emerald"><Activity className="h-4 w-4" /> Live-ready UI</div>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {adminCards.map((card, index) => {
          const Icon = icons[index] || ClipboardList;
          return (
            <motion.div key={card} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.03 }} className="rounded-3xl border border-white/10 bg-white p-4 text-navy shadow-soft">
              <div className="mb-5 flex items-center justify-between"><Icon className="h-5 w-5 text-gold" /><span className="text-xs font-black text-emerald">Ready</span></div>
              <strong>{card}</strong>
              <div className="mt-3 h-2 rounded-full bg-slate-100"><div className="h-2 w-2/3 rounded-full bg-gold" /></div>
            </motion.div>
          );
        })}
      </div>
      <p className="mt-6 leading-8 text-white/70">Premium Pet Clinic uses a structured digital workflow to manage appointments, medical history, reminders, invoices, and communication with pet owners without exposing private admin tools publicly.</p>
    </div>
  );
}
