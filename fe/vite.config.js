import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  theme: {
    extend: {
      keyframes: {
        lineRun: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        'line-run': 'lineRun 2s linear infinite',
      },
      colors: {
        aqua: '#00FFFF',
      },
    },
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
})

