/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Libertinus Serif', 'serif'],
        italianno: ['Italianno', 'cursive'],
        titillium: ['Titillium Web', 'sans-serif'],
      },
      colors: {
        // Paleta Coral Sun centralizada
        main: '#FFFFFF',
        secondary: '#FFF2F0',
        accent: '#D6664C',
        cta: '#DE6B55',
        dark: '#181311',
        muted: '#D6664C',
      },
    }
  },
  plugins: [],
}