import { motion } from 'framer-motion';
import { Bell, MessageCircle, PawPrint, Smartphone } from 'lucide-react';

export default function ReminderPhoneMockup() {
  const bubbles = [
    'Hello [Owner Name], this is a friendly reminder from Premium Pet Clinic for [Pet Name]’s [Service Name] appointment tomorrow.',
    'Vaccination follow-up is due soon. Reply to confirm your preferred visit time.',
    'Dr. Hatem’s team: Please monitor appetite and activity today. Contact us if symptoms change.'
  ];
  return (
    <div className="relative mx-auto max-w-sm">
      <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 5 }} className="rounded-[2.5rem] border-8 border-navy bg-white p-4 shadow-premium">
        <div className="rounded-[2rem] bg-gradient-to-b from-ivory to-white p-4">
          <div className="flex items-center justify-between rounded-3xl bg-navy px-4 py-3 text-white">
            <div className="flex items-center gap-2"><PawPrint className="h-5 w-5 text-gold" /><strong>Premium Care</strong></div>
            <Smartphone className="h-5 w-5 text-gold" />
          </div>
          <div className="mt-5 space-y-4">
            {bubbles.map((b, i) => (
              <motion.div key={b} initial={{ opacity: 0, x: 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }} className="rounded-3xl bg-emerald/10 p-4 text-sm leading-6 text-navy">
                <div className="mb-2 flex items-center gap-2 font-black text-emerald"><MessageCircle className="h-4 w-4" /> WhatsApp Reminder</div>{b}
              </motion.div>
            ))}
          </div>
          <div className="mt-5 flex items-center gap-3 rounded-3xl bg-gold/20 p-4 text-sm font-bold text-navy"><Bell className="h-5 w-5 text-gold" /> Template-based messages and owner-friendly notifications.</div>
        </div>
      </motion.div>
    </div>
  );
}
