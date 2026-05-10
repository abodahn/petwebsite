import { Bell, Calendar, MessageCircle, PawPrint } from 'lucide-react';
import SEO from '../components/SEO';
import SectionTitle from '../components/SectionTitle';
import ReminderPhoneMockup from '../components/ReminderPhoneMockup';

const reminderTypes = ['Appointment reminders', 'Vaccination reminders', 'Follow-up visit reminders', 'Medication reminders', 'Grooming reminders', 'Post-treatment follow-up', 'WhatsApp communication', 'Template-based messages', 'Owner-friendly notifications'];

export default function RemindersWhatsapp() {
  return (
    <>
      <SEO title="Reminders & WhatsApp Care | Premium Pet Clinic Egypt" description="WhatsApp reminders for appointments, vaccinations, medication, grooming, follow-up visits, and template-based owner communication." />
      <section className="page-hero text-center"><div className="mx-auto max-w-5xl px-4"><span className="pill-gold">WhatsApp Care / تواصل واتساب</span><h1 className="mt-6 text-4xl font-black text-white md:text-6xl">Owner-friendly reminders before and after visits.</h1><p className="mt-6 text-lg leading-8 text-white/75">The clinic can send reminders before scheduled visits and follow-up care, keeping owners informed and pets protected.</p></div></section>
      <section className="bg-white py-20"><div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-2 lg:items-center lg:px-8"><div><SectionTitle align="left" eyebrow="Reminder Types" title="Clear follow-up, less missed care" description="Reminder logic is prepared for appointments, vaccination schedules, medication, grooming, and post-treatment follow-up." /><div className="grid gap-3 sm:grid-cols-2">{reminderTypes.map((r) => <div key={r} className="flex items-center gap-3 rounded-3xl border border-slate-200 bg-ivory p-4 font-black text-navy shadow-soft"><Bell className="h-5 w-5 text-gold" />{r}</div>)}</div></div><ReminderPhoneMockup /></div></section>
      <section className="bg-ivory py-20"><div className="mx-auto max-w-7xl px-4 lg:px-8"><SectionTitle eyebrow="Before / After Flow" title="From manual memory to structured reminder discipline" /><div className="grid gap-6 md:grid-cols-2"><div className="rounded-[2rem] bg-white p-8 shadow-soft"><h3 className="text-2xl font-black text-navy">Before</h3><p className="mt-4 leading-8 text-slate-600">Owners may forget vaccination, grooming, or follow-up dates. Clinic communication can become manual and inconsistent.</p></div><div className="rounded-[2rem] bg-navy p-8 text-white shadow-premium"><h3 className="text-2xl font-black text-gold">After</h3><p className="mt-4 leading-8 text-white/75">Reminders are linked to pet profile, service type, date, and WhatsApp template for a clear communication workflow.</p></div></div></div></section>
    </>
  );
}
