/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'set-bg': "url('/images/main-background.png')"
      },
      colors: {
        'set-bg-color': 'rgba(14, 29, 45, 100)',
        'logo-bg': 'rgba(129, 128, 126, 100)',

        // Material Design colors
        'md-bg': '#0F172A',
        primary: 'var(--md-sys-color-primary)',
        'on-primary': 'var(--md-sys-color-on-primary)',
        'primary-container': 'var(--md-sys-color-primary-container)',
        'on-container': 'var(--md-sys-color-on-primary-container)',
        secondary: 'var(--md-sys-color-secondary)',
        'on-secondary': 'var(--md-sys-color-on-secondary)',
        'secondary-container': 'var(--md-sys-color-secondary-container)',
        'on-secondary-container': 'var(--md-sys-color-on-secondary-container)',
        tertiary: 'var(--md-sys-color-tertiary)',
        'on-tertiary': 'var(--md-sys-color-on-tertiary)',
        'tertiary-container': 'var(--md-sys-color-tertiary-container)',
        'on-tertiary-container': 'var(--md-sys-color-on-tertiary-container)',
        error: 'var(--md-sys-color-error)',
        'error-container': 'var(--md-sys-color-error-container)',
        'on-error': 'var(--md-sys-color-on-error)',
        'on-error-container': 'var(--md-sys-color-on-error-container)',
        background: 'var(--md-sys-color-background)',
        'on-background': 'var(--md-sys-color-on-background)',
        surface: 'var(--md-sys-color-surface)',
        'on-surface': 'var(--md-sys-color-on-surface)',
        'surface-variant': 'var(--md-sys-color-surface-variant)',
        'surface-variant': 'var(--md-sys-color-on-surface-variant)',
        outline: 'var(--md-sys-color-outline)',
        'inverse-on-surface': 'var(--md-sys-color-inverse-on-surface)',
        'inverse-surface': 'var(--md-sys-color-inverse-surface)',
        'inverse-primary': 'var(--md-sys-color-inverse-primary)',
        shadow: 'var(--md-sys-color-shadow)',
        'surface-tint': 'var(--md-sys-color-surface-tint)',
        'outline-variant': 'var(--md-sys-color-outline-variant)',
        scrim: 'var(--md-sys-color-scrim)',
      },
      fontFamily: {
        'bebas-neue': "'Bebas Neue', Roboto, cursive, sans"
      }
    },
  },
  plugins: [],
}
