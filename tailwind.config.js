/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    colors: {
      gray_text: '#161616',
      purple: '#7e5bef',
      pink: '#ff49db',
      orange: '#ff7849',
      green: '#13ce66',
      yellow: '#ffc82c',
      white: '#ffffff',
      gray_dark: '#273444',
      gray: '#969696',
      secondary: '#4a5568',
      gray_light: 'rgba(227,235,246,.5)',
      gray_border:'#edf2f7',
      sky_blue: '#3398D4',
      sky_blue_light: '#2fb5fa',
      sky_blue_light_500: '#2fb5faad'
    },
    fontFamily: {
      sans: ['Noto Sans', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      backgroundImage: {
        'home-banner': "url('/src/assets/imgs/banner-1.png')",
        'text-linear': 'linear-gradient(90deg,#262443 0,#2a99d5)'
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          xs: '12px',
        },
        screens: {
          xs: '100%',
          sm: '600px',
          md: '728px',
          lg: '984px',
          xl: '1240px',
          '2xl': '1240px',
        },
      },
      screens: {
        xs: '350px',
      },
    },
  },
  plugins: [],
}

