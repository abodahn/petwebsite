import { motion } from 'framer-motion';
import { PawPrint } from 'lucide-react';

export default function SectionTitle({ eyebrow, title, description, align = 'center', light = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55 }}
      className={`mx-auto mb-10 ${align === 'left' ? 'text-left ml-0' : 'text-center'} max-w-3xl`}
    >
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ${light ? 'bg-white/10 text-gold' : 'bg-gold/15 text-navy'}`}>
          <PawPrint className="h-4 w-4" /> {eyebrow}
        </div>
      )}
      <h2 className={`mt-4 text-3xl font-black tracking-tight md:text-5xl ${light ? 'text-white' : 'text-navy'}`}>{title}</h2>
      {description && <p className={`mt-4 text-base leading-8 md:text-lg ${light ? 'text-white/75' : 'text-slate-600'}`}>{description}</p>}
    </motion.div>
  );
}
