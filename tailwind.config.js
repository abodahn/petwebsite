/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#081827',
        charcoal: '#111827',
        ivory: '#FBF7EF',
        gold: '#D8B56D',
        emerald: '#1FA77A',
        beige: '#EADCC6',
        roseEmergency: '#C2413B'
      },
      fontFamily: {
        display: ['Inter', 'ui-sans-serif', 'system-ui'],
        body: ['Inter', 'ui-sans-serif', 'system-ui']
      },
      boxShadow: {
        premium: '0 24px 80px rgba(5, 12, 22, 0.22)',
        soft: '0 14px 40px rgba(8, 24, 39, 0.12)'
      }
    }
  },
  plugins: []
};
