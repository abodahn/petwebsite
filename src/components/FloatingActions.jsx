import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Calendar, HeartPulse, Home, MessageCircle, PawPrint, Stethoscope } from 'lucide-react';

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div className="fixed bottom-24 right-4 z-40 hidden flex-col gap-3 md:flex">
        <Link to="/emergency" className="emergency-pulse grid h-14 w-14 place-items-center rounded-full bg-roseEmergency text-white shadow-premium" aria-label="Emergency"><HeartPulse className="h-6 w-6" /></Link>
        <Link to="/booking" className="grid h-14 w-14 place-items-center rounded-full bg-gold text-navy shadow-premium" aria-label="Book appointment"><Calendar className="h-6 w-6" /></Link>
        <a href="https://wa.me/200000000000" target="_blank" rel="noreferrer" className="grid h-14 w-14 place-items-center rounded-full bg-emerald text-white shadow-premium" aria-label="WhatsApp"><MessageCircle className="h-6 w-6" /></a>
        {showTop && <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="grid h-12 w-12 place-items-center rounded-full bg-navy text-white shadow-premium" aria-label="Back to top"><ArrowUp className="h-5 w-5" /></button>}
      </div>

      <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-navy/95 px-2 py-2 backdrop-blur-xl md:hidden" aria-label="Mobile action bar">
        <div className="grid grid-cols-5 gap-1 text-[11px] font-bold text-white/80">
          <Link to="/" className="grid justify-items-center gap-1 rounded-2xl p-2 hover:bg-white/10"><Home className="h-5 w-5 text-gold" />Home</Link>
          <Link to="/services" className="grid justify-items-center gap-1 rounded-2xl p-2 hover:bg-white/10"><Stethoscope className="h-5 w-5 text-gold" />Services</Link>
          <Link to="/booking" className="grid justify-items-center gap-1 rounded-2xl bg-gold p-2 text-navy"><Calendar className="h-5 w-5" />Book</Link>
          <a href="https://wa.me/200000000000" className="grid justify-items-center gap-1 rounded-2xl p-2 hover:bg-white/10"><MessageCircle className="h-5 w-5 text-emerald" />WhatsApp</a>
          <Link to="/emergency" className="grid justify-items-center gap-1 rounded-2xl bg-roseEmergency p-2 text-white"><HeartPulse className="h-5 w-5" />SOS</Link>
        </div>
      </nav>

      <div className="pointer-events-none fixed left-5 top-28 z-30 hidden rounded-full bg-gold/10 p-3 text-gold md:block">
        <PawPrint className="h-5 w-5 animate-float" />
      </div>
    </>
  );
}
