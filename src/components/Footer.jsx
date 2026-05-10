import { Link } from 'react-router-dom';
import { Mail, MapPin, MessageCircle, PawPrint, Phone } from 'lucide-react';
import { allPages, clinic, services } from '../data/siteData';

export default function Footer() {
  return (
    <footer className="bg-navy pt-16 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-12 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gold"><PawPrint className="h-6 w-6 text-navy" /></div>
            <div><strong>{clinic.brand}</strong><p className="text-sm text-gold">{clinic.legalName}</p></div>
          </div>
          <p className="mt-5 leading-7 text-white/70">Premium veterinary care led by {clinic.leader}, combining medical trust, warm hospitality, smart booking, reminders, invoices, and digital pet records.</p>
          <div className="mt-5 flex gap-2">
            {['FB', 'IG', 'WA'].map((s) => <span key={s} className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-sm font-black text-gold">{s}</span>)}
          </div>
        </div>
        <div>
          <h3 className="font-black text-gold">Quick Links</h3>
          <div className="mt-4 grid gap-2">
            {allPages.slice(0, 8).map((p) => <Link key={p.path} to={p.path} className="text-white/70 transition hover:text-gold">{p.label}</Link>)}
          </div>
        </div>
        <div>
          <h3 className="font-black text-gold">Services</h3>
          <div className="mt-4 grid gap-2">
            {services.slice(0, 8).map((s) => <Link key={s.title} to="/services" className="text-white/70 transition hover:text-gold">{s.title}</Link>)}
          </div>
        </div>
        <div>
          <h3 className="font-black text-gold">Contact</h3>
          <div className="mt-4 grid gap-4 text-white/75">
            <p className="flex gap-3"><Phone className="h-5 w-5 text-gold" /> {clinic.phone}</p>
            <p className="flex gap-3"><MessageCircle className="h-5 w-5 text-gold" /> {clinic.whatsapp}</p>
            <p className="flex gap-3"><Mail className="h-5 w-5 text-gold" /> {clinic.email}</p>
            <p className="flex gap-3"><MapPin className="h-5 w-5 text-gold" /> {clinic.address}</p>
          </div>
          <form className="mt-5 flex overflow-hidden rounded-full bg-white/10 p-1">
            <input aria-label="Newsletter email" className="min-w-0 flex-1 bg-transparent px-4 py-2 text-sm outline-none placeholder:text-white/40" placeholder="Email for pet tips" />
            <button className="rounded-full bg-gold px-4 py-2 text-sm font-black text-navy">Join</button>
          </form>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-sm text-white/55">
        © {new Date().getFullYear()} Premium Pet Clinic. Premium veterinary website concept. Replace placeholders with official clinic details.
      </div>
    </footer>
  );
}
