import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: {
          0: '#050505',
          1: '#0e1015',
          2: '#181C23',
          3: '#222731',
        },
        paper: {
          0: '#F4F5F7',
          1: '#A8AFBC',
          2: '#6E747D',
          3: '#454A53',
        },
        chrome: {
          hi: '#FFFFFF',
          mid: '#A6ADB8',
          lo: '#5A606A',
        },
        hairline: 'rgba(255, 255, 255, 0.08)',
        'hairline-strong': 'rgba(255, 255, 255, 0.16)',
        telemetry: {
          cyan: '#38BDF8',
          emerald: '#34D399',
          amber: '#FBBF24',
          rose: '#F43F5E',
        }
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'SFMono-Regular', 'Consolas', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'trace-flow': 'trace 8s ease-in-out infinite',
      },
      keyframes: {
        trace: {
          '0%, 100%': { opacity: '0.4', transform: 'translateY(0)' },
          '50%': { opacity: '0.9', transform: 'translateY(6px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
