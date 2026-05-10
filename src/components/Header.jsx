import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, HeartPulse, Languages, Menu, PawPrint, X } from 'lucide-react';
import { navItems } from '../data/siteData';

export default function Header() {
  const [open, setOpen] = useState(false);
  const linkClass = ({ isActive }) =>
    `rounded-full px-3 py-2 text-sm font-semibold transition ${isActive ? 'bg-gold text-navy' : 'text-white/80 hover:bg-white/10 hover:text-white'}`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-navy/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-gold to-emerald shadow-soft">
            <PawPrint className="h-6 w-6 text-navy" />
          </div>
          <div>
            <div className="text-base font-black tracking-wide text-white">Premium Pet Clinic</div>
            <div className="text-xs text-gold">Premium Veterinary Clinic</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => <NavLink key={item.path} to={item.path} className={linkClass}>{item.label}</NavLink>)}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <button className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-sm font-semibold text-white/85 hover:bg-white/10" aria-label="Switch language">
            <Languages className="h-4 w-4" /> EN / AR
          </button>
          <Link to="/booking" className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-black text-navy shadow-soft transition hover:-translate-y-0.5 hover:bg-ivory">
            <Calendar className="h-4 w-4" /> Book / احجز
          </Link>
          <Link to="/emergency" className="emergency-pulse inline-flex items-center gap-2 rounded-full bg-roseEmergency px-4 py-2 text-sm font-black text-white shadow-soft">
            <HeartPulse className="h-4 w-4" /> Emergency / طوارئ
          </Link>
        </div>

        <button className="rounded-2xl bg-white/10 p-3 text-white lg:hidden" onClick={() => setOpen(true)} aria-label="Open menu">
          <Menu className="h-6 w-6" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-navy/95 p-5 backdrop-blur-xl lg:hidden">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 text-white"><PawPrint className="h-6 w-6 text-gold" /> <strong>Premium Pet Clinic</strong></div>
              <button onClick={() => setOpen(false)} className="rounded-2xl bg-white/10 p-3 text-white" aria-label="Close menu"><X className="h-6 w-6" /></button>
            </div>
            <motion.nav initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.035 } } }} className="mt-8 grid gap-3">
              {navItems.map((item) => (
                <motion.div key={item.path} variants={{ hidden: { opacity: 0, x: -12 }, visible: { opacity: 1, x: 0 } }}>
                  <NavLink onClick={() => setOpen(false)} to={item.path} className="flex items-center justify-between rounded-3xl bg-white/10 px-5 py-4 text-lg font-bold text-white">
                    <span>{item.label}</span><span className="text-sm text-gold">{item.ar}</span>
                  </NavLink>
                </motion.div>
              ))}
            </motion.nav>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <Link onClick={() => setOpen(false)} to="/booking" className="rounded-3xl bg-white px-5 py-4 text-center font-black text-navy">Book Now</Link>
              <Link onClick={() => setOpen(false)} to="/emergency" className="rounded-3xl bg-roseEmergency px-5 py-4 text-center font-black text-white">Emergency</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
