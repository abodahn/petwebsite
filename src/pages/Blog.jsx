import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import SEO from '../components/SEO';
import SectionTitle from '../components/SectionTitle';
import { blogPosts } from '../data/siteData';

export default function Blog() {
  return (
    <>
      <SEO title="Pet Health Tips Blog | Premium Pet Clinic Egypt" description="Premium Pet Clinic pet health tips: emergency signs, vaccination basics, clinic visit preparation, medical attention signs, follow-up care, and seasonal care." />
      <section className="page-hero text-center"><div className="mx-auto max-w-5xl px-4"><span className="pill-gold">Blog / Pet Health Tips</span><h1 className="mt-6 text-4xl font-black text-white md:text-6xl">Helpful pet care guidance with a premium clinic voice.</h1><p className="mt-6 text-lg leading-8 text-white/75">Educational blog cards designed to support SEO, owner trust, and responsible pet-care decisions.</p></div></section>
      <section className="bg-white py-20"><div className="mx-auto max-w-7xl px-4 lg:px-8"><SectionTitle eyebrow="Articles" title="Pet health, vaccination, emergency, grooming, and more" /><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{blogPosts.map((post, index) => <article key={post.title} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft"><div className="grid h-48 place-items-center bg-ivory text-7xl">{index % 2 ? '🐈' : '🐕'}</div><div className="p-6"><div className="flex items-center justify-between text-sm font-black"><span className="rounded-full bg-gold/20 px-3 py-1 text-navy">{post.category}</span><span className="flex items-center gap-1 text-slate-500"><Clock className="h-4 w-4" /> {post.read}</span></div><h3 className="mt-5 text-xl font-black text-navy">{post.title}</h3><p className="mt-3 leading-7 text-slate-600">{post.excerpt}</p><Link to="/contact" className="mt-5 inline-flex items-center gap-2 font-black text-emerald">Read more <ArrowRight className="h-4 w-4" /></Link></div></article>)}</div></div></section>
    </>
  );
}
