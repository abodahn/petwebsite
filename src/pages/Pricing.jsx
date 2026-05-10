import { Link } from 'react-router-dom';
import { CreditCard, Percent } from 'lucide-react';
import SEO from '../components/SEO';
import SectionTitle from '../components/SectionTitle';
import { pricing } from '../data/siteData';

export default function Pricing() {
  return (
    <>
      <SEO title="Pricing and Service Fees | Premium Pet Clinic Egypt" description="Premium Pet Clinic service fee placeholders for consultations, vaccination, grooming, emergency, diagnostics, follow-up, and wellness packages." />
      <section className="page-hero text-center"><div className="mx-auto max-w-5xl px-4"><span className="pill-gold">Pricing / Service Fees</span><h1 className="mt-6 text-4xl font-black text-white md:text-6xl">Transparent service fee structure, ready for official prices.</h1><p className="mt-6 text-lg leading-8 text-white/75">Use placeholders until exact prices are approved. The design supports discounts, packages, and invoice generation.</p></div></section>
      <section className="bg-ivory py-20"><div className="mx-auto max-w-7xl px-4 lg:px-8"><SectionTitle eyebrow="Service Fees" title="Premium pricing cards with invoice readiness" /><div className="overflow-hidden rounded-[2rem] bg-white shadow-premium"><div className="grid grid-cols-4 bg-navy p-4 text-sm font-black text-white"><span>Service</span><span>Category</span><span>Base Price</span><span>Options</span></div>{pricing.map((row) => <div key={row[0]} className="grid grid-cols-1 gap-2 border-t border-slate-100 p-4 md:grid-cols-4"><strong className="text-navy">{row[0]}</strong><span className="text-slate-600">{row[1]}</span><span className="font-bold text-emerald">{row[2]}</span><span className="text-slate-600">{row[3]}</span></div>)}</div><div className="mt-8 grid gap-6 md:grid-cols-3"><div className="rounded-[2rem] bg-white p-6 shadow-soft"><Percent className="mb-4 h-7 w-7 text-gold" /><h3 className="font-black text-navy">Discount option</h3><p className="mt-3 leading-7 text-slate-600">Prepared for fixed value or percentage discounts in the service configuration model.</p></div><div className="rounded-[2rem] bg-white p-6 shadow-soft"><CreditCard className="mb-4 h-7 w-7 text-gold" /><h3 className="font-black text-navy">Transparent invoice</h3><p className="mt-3 leading-7 text-slate-600">Invoice preview can show services, fees, discounts, payment method, and total.</p></div><div className="rounded-[2rem] bg-white p-6 shadow-soft"><CreditCard className="mb-4 h-7 w-7 text-gold" /><h3 className="font-black text-navy">Wellness packages</h3><p className="mt-3 leading-7 text-slate-600">Premium membership concepts for preventive care and reminder discipline.</p></div></div><div className="mt-10 text-center"><Link to="/contact" className="btn-dark">Request exact service fee</Link><Link to="/booking" className="ml-3 btn-gold">Book visit</Link></div></div></section>
    </>
  );
}
