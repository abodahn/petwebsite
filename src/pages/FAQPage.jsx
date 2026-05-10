import SEO from '../components/SEO';
import SectionTitle from '../components/SectionTitle';
import FAQAccordion from '../components/FAQAccordion';

export default function FAQPage() {
  return (
    <>
      <SEO title="FAQ | Premium Pet Clinic Egypt" description="Frequently asked questions about booking, emergency visits, WhatsApp reminders, medical history, invoices, services, follow-up, cats and dogs, and first visits." />
      <section className="page-hero text-center"><div className="mx-auto max-w-5xl px-4"><span className="pill-gold">FAQ</span><h1 className="mt-6 text-4xl font-black text-white md:text-6xl">Clear answers for pet owners.</h1><p className="mt-6 text-lg leading-8 text-white/75">A smooth accordion experience covering booking, emergency care, reminders, medical history, invoices, and first visits.</p></div></section>
      <section className="bg-ivory py-20"><div className="mx-auto max-w-6xl px-4 lg:px-8"><SectionTitle eyebrow="Questions & Answers" title="Everything owners need before booking" /><FAQAccordion /></div></section>
    </>
  );
}
