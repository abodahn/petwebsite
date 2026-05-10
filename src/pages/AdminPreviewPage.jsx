import SEO from '../components/SEO';
import SectionTitle from '../components/SectionTitle';
import AdminPreview from '../components/AdminPreview';

export default function AdminPreviewPage() {
  return (
    <>
      <SEO title="Clinic Portal Preview | Premium Pet Clinic Egypt" description="Public-facing preview of Premium Pet Clinic internal workflow: bookings, emergency cases, records, reminders, WhatsApp, invoices, payments, users, roles, audit log, and reports." />
      <section className="page-hero text-center"><div className="mx-auto max-w-5xl px-4"><span className="pill-gold">Admin / Clinic Portal Preview</span><h1 className="mt-6 text-4xl font-black text-white md:text-6xl">A structured digital workflow behind premium care.</h1><p className="mt-6 text-lg leading-8 text-white/75">This page explains the internal system concept without exposing private admin tools.</p></div></section>
      <section className="bg-navy py-20"><div className="mx-auto max-w-7xl px-4 lg:px-8"><SectionTitle light eyebrow="Dashboard Mockup" title="Bookings, records, reminders, invoices, reports, and audit controls" /><AdminPreview /></div></section>
    </>
  );
}
