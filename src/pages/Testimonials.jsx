import { Star } from 'lucide-react';
import SEO from '../components/SEO';
import SectionTitle from '../components/SectionTitle';
import { testimonials } from '../data/siteData';

export default function Testimonials() {
  return (
    <>
      <SEO title="Testimonials | Premium Pet Clinic Egypt" description="Premium Pet Clinic testimonial cards with owner names, pet names, ratings, service tags, and warm trust-building pet care stories." />
      <section className="page-hero text-center"><div className="mx-auto max-w-5xl px-4"><span className="pill-gold">Testimonials</span><h1 className="mt-6 text-4xl font-black text-white md:text-6xl">Real trust, warm stories, premium care.</h1><p className="mt-6 text-lg leading-8 text-white/75">Use this section to publish verified owner reviews and service tags after launch.</p></div></section>
      <section className="bg-ivory py-20"><div className="mx-auto max-w-7xl px-4 lg:px-8"><SectionTitle eyebrow="Owner Stories" title="Premium testimonial cards" /><div className="grid gap-6 md:grid-cols-2">{testimonials.concat(testimonials).map((t, index) => <article key={`${t.owner}-${index}`} className="rounded-[2rem] bg-white p-7 shadow-soft"><div className="flex items-start gap-4"><div className="grid h-16 w-16 place-items-center rounded-2xl bg-ivory text-4xl">{index % 2 ? '🐱' : '🐶'}</div><div><h3 className="font-black text-navy">{t.owner}</h3><p className="text-sm text-slate-500">Pet: {t.pet} · Service: {t.service} · {t.date}</p><div className="mt-2 flex text-gold">{Array.from({ length: t.rating }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div></div></div><p className="mt-5 leading-8 text-slate-600">“{t.text}”</p></article>)}</div></div></section>
    </>
  );
}
