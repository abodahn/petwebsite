import { Link } from 'react-router-dom';
import { AlertTriangle, HeartPulse, MapPin, MessageCircle, Phone } from 'lucide-react';
import SEO from '../components/SEO';
import SectionTitle from '../components/SectionTitle';
import BookingForm from '../components/BookingForm';
import { emergencySymptoms } from '../data/siteData';

export default function Emergency() {
  return (
    <>
      <SEO title="Pet Emergency | Premium Pet Clinic Egypt" description="Emergency pet support from Premium Pet Clinic: call, WhatsApp, directions, urgent symptoms, and fast emergency booking." />
      <section className="relative overflow-hidden bg-gradient-to-br from-navy via-charcoal to-[#421515] px-4 pb-20 pt-32 text-center text-white lg:px-8">
        <div className="mx-auto max-w-5xl"><span className="inline-flex items-center gap-2 rounded-full bg-roseEmergency px-4 py-2 text-sm font-black"><HeartPulse className="h-4 w-4" /> Emergency / حالة طارئة</span><h1 className="mt-6 text-4xl font-black md:text-7xl">Pet Emergency? Get Help Now.</h1><p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/75">No complicated paperwork. No sign-up required before action. Contact the clinic and start urgent support immediately.</p><div className="mt-8 flex flex-wrap justify-center gap-3"><a href="tel:+200000000000" className="btn-emergency"><Phone className="h-5 w-5" /> Call Now</a><a href="https://wa.me/200000000000" className="btn-gold"><MessageCircle className="h-5 w-5" /> WhatsApp</a><a href="https://maps.google.com" className="btn-glass"><MapPin className="h-5 w-5" /> Directions</a><Link to="/booking" className="btn-glass"><HeartPulse className="h-5 w-5" /> Start Emergency Booking</Link></div></div>
      </section>
      <section className="bg-white py-20"><div className="mx-auto max-w-7xl px-4 lg:px-8"><SectionTitle eyebrow="Emergency Symptoms" title="Do not wait when these signs appear" description="These cards are educational prompts only. Always contact a veterinary professional for advice." /><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{emergencySymptoms.map((s) => <div key={s} className="flex items-center gap-3 rounded-3xl border border-roseEmergency/15 bg-roseEmergency/5 p-5 font-black text-navy"><AlertTriangle className="h-5 w-5 text-roseEmergency" />{s}</div>)}</div></div></section>
      <section className="bg-ivory py-20"><div className="mx-auto max-w-7xl px-4 lg:px-8"><SectionTitle eyebrow="What To Do Now" title="Fast, calm, clear steps" /><div className="grid gap-4 md:grid-cols-5">{['Stay calm', 'Call clinic', 'Share pet condition', 'Do not give medication without doctor advice', 'Come immediately if advised'].map((step, i) => <div key={step} className="rounded-[2rem] bg-white p-6 text-center shadow-soft"><div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-roseEmergency text-xl font-black text-white">{i + 1}</div><strong className="text-navy">{step}</strong></div>)}</div></div></section>
      <section className="bg-white py-20"><div className="mx-auto max-w-5xl px-4 lg:px-8"><SectionTitle eyebrow="Emergency Form" title="Minimal urgent case form" description="Only essential fields are requested so the owner can act quickly." /><BookingForm defaultMode="Emergency Booking" /></div></section>
    </>
  );
}
