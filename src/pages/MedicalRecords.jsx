import { Calendar, CreditCard, FileText, PawPrint, Stethoscope, Thermometer, UserRound, Weight } from 'lucide-react';
import SEO from '../components/SEO';
import SectionTitle from '../components/SectionTitle';

const profile = ['Owner details', 'Pet details', 'Species', 'Breed', 'Age', 'Visit history', 'Diagnosis history', 'Temperature', 'Weight', 'Services received', 'Reminders', 'Invoices'];
const ownerBenefits = ['No lost history', 'Better follow-up', 'Faster future visits', 'Clear treatment tracking', 'Better vaccination control'];
const doctorBenefits = ['Complete history', 'Better diagnosis', 'Follow-up visibility', 'Safer care'];
const history = ['Visit', 'Diagnosis', 'Treatment', 'Reminder', 'Follow-up'];

export default function MedicalRecords() {
  return (
    <>
      <SEO title="Pet Medical Records | Premium Pet Clinic Egypt" description="Digital pet medical records experience: owner details, pet profile, visit history, diagnosis, reminders, invoices, weight, temperature, and follow-up." />
      <section className="page-hero text-center"><div className="mx-auto max-w-5xl px-4"><span className="pill-gold">Medical Records / السجل الطبي</span><h1 className="mt-6 text-4xl font-black text-white md:text-6xl">A complete Pet 360 profile for safer future care.</h1><p className="mt-6 text-lg leading-8 text-white/75">Every visit becomes part of a structured medical history that helps owners and doctors make better follow-up decisions.</p></div></section>
      <section className="bg-white py-20"><div className="mx-auto max-w-7xl px-4 lg:px-8"><SectionTitle eyebrow="Pet 360 Profile" title="Everything important in one pet profile" /><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{profile.map((item, i) => { const icons = [UserRound, PawPrint, PawPrint, PawPrint, Calendar, FileText, Stethoscope, Thermometer, Weight, Stethoscope, Calendar, CreditCard]; const Icon = icons[i] || FileText; return <div key={item} className="rounded-3xl border border-slate-200 bg-ivory p-5 shadow-soft"><Icon className="mb-4 h-6 w-6 text-gold" /><strong className="text-navy">{item}</strong></div>; })}</div></div></section>
      <section className="bg-ivory py-20"><div className="mx-auto max-w-7xl px-4 lg:px-8"><SectionTitle eyebrow="Medical History Timeline" title="Visit → Diagnosis → Treatment → Reminder → Follow-up" /><div className="flex flex-wrap justify-center gap-4">{history.map((h, i) => <div key={h} className="rounded-[2rem] bg-white p-6 text-center shadow-soft"><div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-navy text-gold font-black">{i + 1}</div><strong className="text-navy">{h}</strong></div>)}</div></div></section>
      <section className="bg-white py-20"><div className="mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-2 lg:px-8"><div className="rounded-[2rem] bg-navy p-8 text-white shadow-premium"><h2 className="text-3xl font-black text-gold">Owner Benefits</h2><ul className="mt-6 space-y-4">{ownerBenefits.map((b) => <li key={b} className="flex gap-3"><FileText className="h-5 w-5 text-gold" />{b}</li>)}</ul></div><div className="rounded-[2rem] bg-ivory p-8 text-navy shadow-soft"><h2 className="text-3xl font-black">Doctor Benefits</h2><ul className="mt-6 space-y-4">{doctorBenefits.map((b) => <li key={b} className="flex gap-3"><Stethoscope className="h-5 w-5 text-emerald" />{b}</li>)}</ul></div></div></section>
    </>
  );
}
