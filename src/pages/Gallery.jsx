import { useState } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import SectionTitle from '../components/SectionTitle';
import { galleryItems } from '../data/siteData';

const filters = ['All', 'Clinic environment', 'Pets we care for', 'Medical care moments', 'Grooming', 'Happy pets', 'Team', 'Equipment', 'Before/after care'];

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const items = filter === 'All' ? galleryItems : galleryItems.filter((i) => i === filter);
  return (
    <>
      <SEO title="Gallery | Premium Pet Clinic Egypt" description="Premium Pet Clinic gallery placeholders for clinic environment, pets, medical care moments, grooming, happy pets, team, equipment, and before/after care." />
      <section className="page-hero text-center"><div className="mx-auto max-w-5xl px-4"><span className="pill-gold">Gallery</span><h1 className="mt-6 text-4xl font-black text-white md:text-6xl">A warm visual story of premium pet care.</h1><p className="mt-6 text-lg leading-8 text-white/75">Replace placeholders with real clinic photos, pet care moments, team photos, equipment, and happy pet stories.</p></div></section>
      <section className="bg-white py-20"><div className="mx-auto max-w-7xl px-4 lg:px-8"><SectionTitle eyebrow="Masonry Gallery" title="Filter by care moment" /><div className="mb-8 flex flex-wrap justify-center gap-3">{filters.map((f) => <button key={f} onClick={() => setFilter(f)} className={`rounded-full px-4 py-2 text-sm font-black ${filter === f ? 'bg-navy text-white' : 'bg-ivory text-navy'}`}>{f}</button>)}</div><div className="columns-1 gap-5 sm:columns-2 lg:columns-3">{items.concat(items).map((item, index) => <motion.div key={`${item}-${index}`} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`mb-5 break-inside-avoid overflow-hidden rounded-[2rem] bg-ivory shadow-soft ${index % 3 === 0 ? 'min-h-80' : 'min-h-60'}`}><div className="grid h-full min-h-[inherit] place-items-center p-8 text-center"><div className="text-6xl">{index % 2 ? '🐱' : '🐶'}</div><h3 className="mt-5 text-xl font-black text-navy">{item}</h3><p className="mt-3 text-sm leading-6 text-slate-600">Real photo placeholder with premium overlay animation and lightbox behavior.</p></div></motion.div>)}</div></div></section>
    </>
  );
}
