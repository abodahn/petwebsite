import SEO from '../components/SEO';
import SectionTitle from '../components/SectionTitle';
import PetJourneyTimeline from '../components/PetJourneyTimeline';

export default function Journey() {
  return (
    <>
      <SEO title="Pet Care Journey | Premium Pet Clinic Egypt" description="A storytelling page showing the full Premium Pet Clinic journey from discovery and booking to invoice, reminders, WhatsApp follow-up, and medical record update." />
      <section className="page-hero text-center"><div className="mx-auto max-w-5xl px-4"><span className="pill-gold">My Pet Journey</span><h1 className="mt-6 text-4xl font-black text-white md:text-6xl">A premium care journey with paw prints at every step.</h1><p className="mt-6 text-lg leading-8 text-white/75">From discovery to the next visit plan, each stage is designed to feel clear, warm, and professionally managed.</p></div></section>
      <section className="bg-ivory py-20"><div className="mx-auto max-w-5xl px-4 lg:px-8"><SectionTitle eyebrow="Animated Journey" title="Discover → Book → Care → Follow-up" description="Use scroll-based animation, paw print transitions, and a pet character walking concept when adding final illustrations." /><PetJourneyTimeline /></div></section>
    </>
  );
}
