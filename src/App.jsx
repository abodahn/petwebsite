import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import Home from './pages/Home';
import AboutDoctor from './pages/AboutDoctor';
import AboutClinic from './pages/AboutClinic';
import Services from './pages/Services';
import Booking from './pages/Booking';
import Emergency from './pages/Emergency';
import MedicalRecords from './pages/MedicalRecords';
import RemindersWhatsapp from './pages/RemindersWhatsapp';
import Pricing from './pages/Pricing';
import Journey from './pages/Journey';
import Gallery from './pages/Gallery';
import Testimonials from './pages/Testimonials';
import Blog from './pages/Blog';
import FAQPage from './pages/FAQPage';
import Contact from './pages/Contact';
import AdminPreviewPage from './pages/AdminPreviewPage';

function ScrollAndTransition({ children }) {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);
  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.28 }}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-ivory font-body text-slate-800 selection:bg-gold selection:text-navy">
      <Header />
      <ScrollAndTransition>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-dr-hatem" element={<AboutDoctor />} />
          <Route path="/about-clinic" element={<AboutClinic />} />
          <Route path="/services" element={<Services />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/emergency" element={<Emergency />} />
          <Route path="/medical-records" element={<MedicalRecords />} />
          <Route path="/reminders-whatsapp" element={<RemindersWhatsapp />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/pet-care-journey" element={<Journey />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin-preview" element={<AdminPreviewPage />} />
        </Routes>
      </ScrollAndTransition>
      <Footer />
      <FloatingActions />
    </div>
  );
}
