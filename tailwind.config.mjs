/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontSize: {
      sm: "var(--copy-size-s)",
      md: "var(--copy-size-m)",
      lg: "var(--copy-size-l)",
    },
    colors: {
      // Neutrals
      dark: {
        rgb: `rgb(var(--color-dark-rgb))`,
        DEFAULT: `var(--color-dark)`,
      },
      light: {
        rgb: `rgb(var(--color-light-rgb))`,
        DEFAULT: `var(--color-light)`,
      },
      white: {
        rgb: `rgb(var(--color-white-rgb))`,
        DEFAULT: `var(--color-white)`,
      },
      black: {
        rgb: `rgb(var(--color-black-rgb))`,
        DEFAULT: `var(--color-black)`,
      },
      //   Brand Colors
      primary: "var(--color-primary)",
      secondary: "var(--color-secondary)",
      background: "var(--color-background)",

      // Colors Misc
      blur: "var(--color-blur)",
      border: "var(--color-border)",
      borderLight: "var(--color-border-light)",
      borderActive: "var(--color-border-active)",
      borderActiveLight: "var(--color-border-active-light)",
      text: "var(--color-text)",
      textLight: "var(--color-text-light)",

      // Color Notifications
      error: "var(--color-alert-error)",
      success: "var(--color-alert-success)",
    },

    transitionTimingFunction: {
      fast: "var(--animation-fast)",
      primary: "var(--animation-primary)",
      smooth: "var(--animation-smooth)",
      slow: "var(--animation-slow)",
      slider: "var(--animation-slider)",
      nav: "var(--animation-nav)",
      navSmooth: "var(--animation-nav-smooth)",
    },

    extend: {},
  },
  plugins: [],
};
