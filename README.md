# Premium Pet Clinic — Full Animated Website Project

A premium React/Vite frontend for **Premium Pet Clinic / Premium Veterinary Clinic**, led by **Dr. Hatem** in Egypt.

## Included

- Full homepage
- About Dr. Hatem page
- About Clinic page
- Services page with filters
- Booking page with Normal / Easy / Emergency booking modes
- Emergency page with urgent CTAs and symptoms
- Pet Medical Records page
- Reminders & WhatsApp Care page
- Pricing / Service Fees page
- Pet Care Journey page
- Gallery page
- Testimonials page
- Blog / Pet Health Tips page
- FAQ page
- Contact page
- Admin / Clinic Portal Preview page
- Header, footer, sticky emergency button, floating WhatsApp, mobile bottom bar
- Framer Motion animations
- Tailwind CSS design system
- API-ready forms and data structure placeholders
- SEO-ready page title and meta description updates

## Tech Stack

- React
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React icons
- React Router HashRouter for easy static hosting

## How to Run

1. Open the project folder in VS Code or PyCharm.
2. Open Terminal inside this folder.
3. Install dependencies:

```bash
npm install
```

4. Run the website:

```bash
npm run dev
```

5. Open the displayed local URL, usually:

```text
http://localhost:5173
```

## Build for Production

```bash
npm run build
```

The final static files will be created inside the `dist` folder.

## Deploy

Because the app uses `HashRouter`, it can be deployed easily to Netlify, Vercel, GitHub Pages, or any static hosting provider without special rewrite rules.

## Replace Before Launch

Replace these placeholders:

- Clinic official logo
- Dr. Hatem real photo and biography
- Phone number
- WhatsApp number
- Email
- Address
- Google Maps iframe
- Real gallery photos
- Real prices
- Verified testimonials
- Social media links

## Backend Integration Notes

The booking, emergency, and contact forms currently log structured payloads in the browser console and show a success message. Connect them later to API endpoints for:

- Owners
- Pets
- Bookings
- Reminders
- Services
- Invoices
- Payments
- Medical records
- WhatsApp templates
- Users and roles
- Audit logs

## Suggested Next Backend Endpoints

```text
POST /api/owners
POST /api/pets
POST /api/bookings
POST /api/emergency-cases
POST /api/reminders
POST /api/contact-messages
GET  /api/services
GET  /api/pricing
```
