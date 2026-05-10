import { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Calendar, CheckCircle, CreditCard, HeartPulse, MessageCircle, PawPrint, UserRound } from 'lucide-react';
import { services } from '../data/siteData';

const fieldClass = 'w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/20';
const labelClass = 'text-sm font-black text-navy';

export default function BookingForm({ defaultMode = 'Normal Booking' }) {
  const modes = ['Normal Booking', 'Easy Booking', 'Emergency Booking'];
  const [mode, setMode] = useState(defaultMode);
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    console.log('Booking form payload ready for API:', { mode, ...data });
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-premium md:p-8">
      <div className="mb-6 grid gap-3 md:grid-cols-3">
        {modes.map((item) => (
          <button key={item} type="button" onClick={() => { setMode(item); setSent(false); }} className={`rounded-2xl px-4 py-3 text-sm font-black transition ${mode === item ? item.includes('Emergency') ? 'bg-roseEmergency text-white' : 'bg-navy text-white' : 'bg-slate-100 text-navy hover:bg-ivory'}`}>
            {item}
          </button>
        ))}
      </div>

      {sent && (
        <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="mb-6 flex items-start gap-3 rounded-3xl bg-emerald/10 p-4 text-emerald">
          <CheckCircle className="mt-1 h-5 w-5" /> <p><strong>Booking request captured.</strong> This frontend is ready to connect to the clinic API for owners, pets, bookings, reminders, invoices, and WhatsApp templates.</p>
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {mode === 'Emergency Booking' ? <EmergencyFields /> : mode === 'Easy Booking' ? <EasyFields /> : <NormalFields />}
        <div className="rounded-3xl bg-ivory p-4 text-sm leading-7 text-slate-700">
          <strong className="text-navy">Smart validation concept:</strong> missing required fields can trigger pet-friendly popup alerts, service reminder suggestions, and invoice creation options after confirmation.
        </div>
        <button className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 font-black text-white shadow-soft transition hover:-translate-y-0.5 ${mode === 'Emergency Booking' ? 'emergency-pulse bg-roseEmergency' : 'bg-navy'}`}>
          {mode === 'Emergency Booking' ? <HeartPulse className="h-5 w-5" /> : <Calendar className="h-5 w-5" />} Submit {mode}
        </button>
      </form>
    </div>
  );
}

function Input({ label, name, type = 'text', required = false, placeholder = '' }) {
  return <label className="grid gap-2"><span className={labelClass}>{label}{required ? ' *' : ''}</span><input className={fieldClass} name={name} type={type} required={required} placeholder={placeholder} /></label>;
}

function Select({ label, name, required = false, children }) {
  return <label className="grid gap-2"><span className={labelClass}>{label}{required ? ' *' : ''}</span><select className={fieldClass} name={name} required={required}>{children}</select></label>;
}

function Textarea({ label, name, required = false, placeholder = '' }) {
  return <label className="grid gap-2 md:col-span-2"><span className={labelClass}>{label}{required ? ' *' : ''}</span><textarea className={`${fieldClass} min-h-32`} name={name} required={required} placeholder={placeholder} /></label>;
}

function NormalFields() {
  return (
    <>
      <div className="flex items-center gap-3 rounded-3xl bg-navy p-4 text-white"><UserRound className="h-5 w-5 text-gold" /><strong>Owner and pet information</strong></div>
      <div className="grid gap-4 md:grid-cols-2">
        <Input label="Owner name" name="ownerName" required />
        <Input label="Mobile number" name="mobile" required />
        <Input label="WhatsApp number" name="whatsapp" placeholder="Optional if different" />
        <Input label="Email" name="email" type="email" />
        <Input label="Pet name" name="petName" required />
        <Select label="Species" name="species" required><option>Dog</option><option>Cat</option><option>Other</option></Select>
        <Input label="Breed" name="breed" />
        <Input label="Age" name="age" />
        <Select label="Gender" name="gender"><option>Female</option><option>Male</option><option>Not specified</option></Select>
        <Select label="Service selection" name="service" required>{services.map((s) => <option key={s.title}>{s.title}</option>)}</Select>
        <Select label="Preferred doctor" name="doctor"><option>Dr. Hatem</option><option>First available doctor</option></Select>
        <Input label="Preferred date" name="date" type="date" required />
        <Input label="Preferred time" name="time" type="time" required />
        <Input label="Weight optional" name="weight" placeholder="kg" />
        <Input label="Temperature optional" name="temperature" placeholder="°C" />
        <Select label="Payment method" name="payment"><option>Cash</option><option>Visa</option><option>InstaPay</option><option>Other</option></Select>
        <Select label="Reminder preference" name="reminder"><option>WhatsApp reminder</option><option>SMS placeholder</option><option>Email placeholder</option><option>No reminder</option></Select>
        <Select label="WhatsApp reminder opt-in" name="whatsappOptIn"><option>Yes</option><option>No</option></Select>
        <Textarea label="Diagnosis / visit reason" name="reason" required placeholder="Tell us what you noticed and when it started." />
        <Textarea label="Notes" name="notes" placeholder="Any special behavior, medication, allergies, or previous clinic notes." />
      </div>
    </>
  );
}

function EasyFields() {
  return (
    <>
      <div className="flex items-center gap-3 rounded-3xl bg-emerald p-4 text-white"><PawPrint className="h-5 w-5" /><strong>Fast booking for returning or simple cases</strong></div>
      <div className="grid gap-4 md:grid-cols-2">
        <Input label="Owner name" name="ownerName" required />
        <Input label="Mobile number" name="mobile" required />
        <Input label="Pet name" name="petName" required />
        <Select label="Service" name="service" required>{services.map((s) => <option key={s.title}>{s.title}</option>)}</Select>
        <Input label="Date" name="date" type="date" required />
        <Input label="Time" name="time" type="time" required />
        <Textarea label="Notes" name="notes" placeholder="Short note for the clinic team." />
      </div>
    </>
  );
}

function EmergencyFields() {
  return (
    <>
      <div className="flex items-center gap-3 rounded-3xl bg-roseEmergency p-4 text-white"><AlertTriangle className="h-5 w-5" /><strong>Emergency flow: no sign-up, no payment before action</strong></div>
      <div className="grid gap-4 md:grid-cols-2">
        <Input label="Owner name" name="ownerName" required />
        <Input label="Mobile number" name="mobile" required />
        <Input label="Pet name" name="petName" required />
        <Input label="Current location" name="location" placeholder="Area / landmark" />
        <Textarea label="Emergency description" name="description" required placeholder="Breathing, bleeding, poisoning, trauma, seizure, vomiting, collapse, or other urgent signs." />
      </div>
      <div className="grid gap-3 md:grid-cols-3">
        <a href="tel:+200000000000" className="inline-flex items-center justify-center gap-2 rounded-full bg-roseEmergency px-4 py-3 font-black text-white"><HeartPulse className="h-5 w-5" /> Call Now</a>
        <a href="https://wa.me/200000000000" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald px-4 py-3 font-black text-white"><MessageCircle className="h-5 w-5" /> WhatsApp</a>
        <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-navy px-4 py-3 font-black text-white"><CreditCard className="h-5 w-5" /> Directions</a>
      </div>
    </>
  );
}
