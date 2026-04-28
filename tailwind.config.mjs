/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        claude: {
          orange: 'hsl(24, 90%, 55%)',
          amber: 'hsl(36, 100%, 55%)',
          dark: 'hsl(24, 10%, 4%)',
          card: 'hsl(24, 5%, 7%)',
          muted: 'hsl(24, 5%, 65%)',
          border: 'hsl(24, 5%, 15%)',
        },
      },
      animation: {
        'shake': 'shake 0.4s ease-in-out infinite',
        'pulse-status': 'pulse-status 2s ease-in-out infinite',
        'wobble': 'wobble 2.5s ease-in-out infinite',
      },
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-4px)' },
          '75%': { transform: 'translateX(4px)' },
        },
        'pulse-status': {
          '0%, 100%': { boxShadow: '0 0 0 0 hsla(24, 90%, 55%, 0.7)' },
          '50%': { boxShadow: '0 0 0 8px hsla(24, 90%, 55%, 0)' },
        },
        wobble: {
          '0%, 100%': { transform: 'rotate(-5deg) scale(1)' },
          '50%': { transform: 'rotate(5deg) scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
};
