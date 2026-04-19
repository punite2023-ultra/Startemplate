import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // DigiMax color palette
        'digimax-dark': '#0A0118',
        'digimax-dark-secondary': '#2B2338',
        'digimax-light-bg': '#0F0520',
        'digimax-text-primary': '#FFFFFF',
        'digimax-text-secondary': '#9B96B0',
        'digimax-purple': '#B47CFD',
        'digimax-pink': '#FF7FC2',
        'digimax-orange': '#FFB07B',
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'h1-desktop': '61px',
        'h1-tablet': '44px',
        'h1-mobile': '32px',
        'h2-desktop': '39px',
        'h2-tablet': '31px',
        'h2-mobile': '24px',
        'h3-desktop': '31px',
        'h3-tablet': '25px',
        'h3-mobile': '20px',
      },
      borderRadius: {
        'digimax': '10px',
        'digimax-lg': '20px',
        'digimax-xl': '30px',
      },
      backdropBlur: {
        'digimax': '12px',
      },
      backgroundImage: {
        'gradient-digimax-1': 'linear-gradient(135deg, #B47CFD 0%, #FF7FC2 100%)',
        'gradient-digimax-2': 'linear-gradient(135deg, #FF7FC2 0%, #FFB07B 100%)',
        'gradient-digimax-3': 'linear-gradient(135deg, #FFB07B 0%, #B47CFD 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
