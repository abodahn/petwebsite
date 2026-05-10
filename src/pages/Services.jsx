import { useMemo, useState } from 'react';
import SEO from '../components/SEO';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/siteData';

const filters = ['All', 'Dogs', 'Cats', 'Emergency', 'Preventive', 'Grooming', 'Medical', 'Follow-up'];
const categories = [
  ['Preventive Care', 'Vaccination, wellness checkups, parasite control, and nutrition advice.'],
  ['Medical Care', 'General consultation, diagnosis, follow-up visits, and chronic condition monitoring.'],
  ['Emergency Care', 'Urgent consultation, emergency triage, immediate support, and call/direction CTAs.'],
  ['Surgery & Procedures', 'Minor procedures, surgical preparation, post-operation follow-up, and consent placeholders.'],
  ['Dental Care', 'Dental checks, cleaning, and oral health support.'],
  ['Grooming & Hygiene', 'Bathing, nail trimming, coat care, and hygiene support.'],
  ['Diagnostics', 'Lab tests, imaging placeholders, and medical reports.'],
  ['Pharmacy & Products', 'Prescriptions, medication follow-up, and pet care products.']
];

export default function Services() {
  const [filter, setFilter] = useState('All');
  const filtered = useMemo(() => {
    if (filter === 'All') return services;
    if (filter === 'Dogs' || filter === 'Cats') return services.filter((s) => s.pet.includes(filter));
    return services.filter((s) => s.category.toLowerCase().includes(filter.toLowerCase()) || s.title.toLowerCase().includes(filter.toLowerCase()));
  }, [filter]);

  return (
    <>
      <SEO title="Veterinary Services | Premium Pet Clinic Egypt" description="Explore Premium Pet Clinic services: checkups, vaccination, emergency care, surgery support, dental care, grooming, diagnostics, pharmacy, and wellness plans." />
      <section className="page-hero text-center"><div className="mx-auto max-w-5xl px-4"><span className="pill-gold">Services</span><h1 className="mt-6 text-4xl font-black text-white md:text-6xl">Complete veterinary services for cats and dogs.</h1><p className="mt-6 text-lg leading-8 text-white/75">Clear categories, booking CTAs, reminder concepts, and pricing placeholders ready for clinic operations.</p></div></section>
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionTitle eyebrow="Service Categories" title="Choose the right care path" description="Each category is written in simple owner-friendly language while supporting premium medical positioning." />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">{categories.map(([title, desc]) => <div key={title} className="rounded-[2rem] bg-ivory p-6 shadow-soft"><h3 className="font-black text-navy">{title}</h3><p className="mt-3 leading-7 text-slate-600">{desc}</p></div>)}</div>
        </div>
      </section>
      <section className="bg-ivory py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-8 flex flex-wrap justify-center gap-3">{filters.map((f) => <button key={f} onClick={() => setFilter(f)} className={`rounded-full px-5 py-3 text-sm font-black transition ${filter === f ? 'bg-navy text-white' : 'bg-white text-navy shadow-soft hover:bg-gold'}`}>{f}</button>)}</div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{filtered.map((service) => <ServiceCard key={service.title} service={service} />)}</div>
        </div>
      </section>
    </>
  );
}
