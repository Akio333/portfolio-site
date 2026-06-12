/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: '#0b1326',
        primary: '#ddb7ff',
        'on-primary': '#490080',
        'primary-container': '#b76dff',
        'on-primary-container': '#400071',
        'inverse-primary': '#842bd2',
        secondary: '#44e2cd',
        'on-secondary': '#003731',
        'secondary-container': '#03c6b2',
        'on-secondary-container': '#004d44',
        tertiary: '#c0c1ff',
        'on-tertiary': '#1000a9',
        'tertiary-container': '#8083ff',
        'on-tertiary-container': '#0d0096',
        error: '#ffb4ab',
        'on-error': '#690005',
        'error-container': '#93000a',
        'on-error-container': '#ffdad6',
        surface: {
          DEFAULT: '#0b1326',
          dim: '#0b1326',
          bright: '#31394d',
          lowest: '#060e20',
          low: '#131b2e',
          container: '#171f33',
          high: '#222a3d',
          highest: '#2d3449',
          variant: '#2d3449',
        },
        'on-surface': {
          DEFAULT: '#dae2fd',
          variant: '#cfc2d6',
        },
        outline: {
          DEFAULT: '#988d9f',
          variant: '#4d4354',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Geist', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        sm: '0.25rem', // 4px
        DEFAULT: '0.5rem', // 8px
        md: '0.75rem', // 12px
        lg: '1rem', // 16px
        xl: '1.5rem', // 24px
      },
      spacing: {
        base: '8px',
        'section-gap-desktop': '120px',
        'section-gap-mobile': '64px',
        'container-max': '1200px',
        gutter: '24px',
      },
      boxShadow: {
        'neon-glow': '0 0 30px rgba(221, 183, 255, 0.3)',
      },
    },
  },
  plugins: [],
};
