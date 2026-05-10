import { motion } from 'framer-motion';
import { CheckCircle, PawPrint } from 'lucide-react';
import { journeySteps } from '../data/siteData';

export default function PetJourneyTimeline({ compact = false }) {
  const items = compact ? journeySteps.slice(1, 10) : journeySteps;
  return (
    <div className="relative">
      <div className="absolute left-5 top-6 hidden h-[calc(100%-3rem)] w-1 rounded-full bg-gold/30 md:block" />
      <div className={compact ? 'grid gap-4 md:grid-cols-3' : 'grid gap-5'}>
        {items.map(([title, text], index) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, x: compact ? 0 : -18, y: compact ? 18 : 0 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: Math.min(index * 0.035, 0.28) }}
            className={`relative rounded-[2rem] border border-slate-200 bg-white p-5 shadow-soft ${compact ? '' : 'md:ml-16'}`}
          >
            <div className={`${compact ? '' : 'md:absolute md:-left-16 md:top-5'} grid h-11 w-11 place-items-center rounded-2xl bg-navy text-gold shadow-soft`}>
              {index === items.length - 1 ? <CheckCircle className="h-5 w-5" /> : <PawPrint className="h-5 w-5" />}
            </div>
            <div className="mt-4 flex items-start gap-3 md:mt-0">
              <span className="text-sm font-black text-gold">{String(index + 1).padStart(2, '0')}</span>
              <div><h3 className="font-black text-navy">{title}</h3><p className="mt-2 leading-7 text-slate-600">{text}</p></div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
