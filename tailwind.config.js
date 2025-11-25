/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx,css,html}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#2B3A67',
          secondary: '#1e2b52',
          accent: '#4A9090',
          warm: '#C4A484',
          muted: '#6b7280',
          light: '#F0F2F5',
        },
        text: {
          dark: '#333333',
          light: '#555555',
        }
      },
      fontFamily: {
        sans: ['Lato', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

