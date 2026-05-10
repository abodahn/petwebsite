import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function AnimatedCounter({ value, label, suffix = '+' }) {
  const ref = useRef(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setStarted(true);
    }, { threshold: 0.4 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let frame = 0;
    const total = 55;
    const timer = setInterval(() => {
      frame += 1;
      setCount(Math.round((frame / total) * value));
      if (frame >= total) clearInterval(timer);
    }, 20);
    return () => clearInterval(timer);
  }, [started, value]);

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-3xl border border-white/10 bg-white/10 p-6 text-center backdrop-blur">
      <div className="text-4xl font-black text-gold">{count}{suffix}</div>
      <div className="mt-2 text-sm font-semibold text-white/70">{label}</div>
    </motion.div>
  );
}
