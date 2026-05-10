import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { faqs } from '../data/siteData';

export default function FAQAccordion({ limit }) {
  const [active, setActive] = useState(0);
  const items = limit ? faqs.slice(0, limit) : faqs;
  return (
    <div className="mx-auto max-w-4xl space-y-3">
      {items.map(([q, a], index) => (
        <div key={q} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft">
          <button onClick={() => setActive(active === index ? -1 : index)} className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-black text-navy" aria-expanded={active === index}>
            <span>{q}</span><ChevronDown className={`h-5 w-5 shrink-0 transition ${active === index ? 'rotate-180 text-gold' : ''}`} />
          </button>
          <AnimatePresence initial={false}>
            {active === index && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}>
                <p className="border-t border-slate-100 px-6 py-5 leading-8 text-slate-600">{a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
