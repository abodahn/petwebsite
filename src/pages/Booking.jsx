import SEO from '../components/SEO';
import SectionTitle from '../components/SectionTitle';
import BookingForm from '../components/BookingForm';

export default function Booking() {
  return (
    <>
      <SEO title="Book Appointment | Premium Pet Clinic Egypt" description="Book a normal, easy, or emergency veterinary appointment with Premium Pet Clinic and Dr. Hatem." />
      <section className="page-hero text-center"><div className="mx-auto max-w-5xl px-4"><span className="pill-gold">Book Appointment / احجز موعد</span><h1 className="mt-6 text-4xl font-black text-white md:text-6xl">Simple booking, clear confirmation, smarter follow-up.</h1><p className="mt-6 text-lg leading-8 text-white/75">Use normal booking for full details, easy booking for quick requests, or emergency booking for urgent cases.</p></div></section>
      <section className="bg-ivory py-20"><div className="mx-auto max-w-5xl px-4 lg:px-8"><SectionTitle eyebrow="Booking Form" title="Choose your booking mode" description="The form is frontend-ready and structured for API integration with owners, pets, bookings, reminders, invoices, and payment methods." /><BookingForm /></div></section>
    </>
  );
}
