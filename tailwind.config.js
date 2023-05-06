/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#0A1122",
        "light-blue": "#2A4178",
        "light-bg-blue": "#F2F6FF",
        "dark-grey": "#737272",
        "light-grey": "#F5F5F5",
        "primary-text": "#181818",
        "dark-orange": "#E06522",
        "medium-orange": "#FAA001",
        "light-orange": "#FDF3E9",
      },
      boxShadow: {
        small: "0 0 12px 0 rgba(0, 0, 0, 0.25)",
        "small-bottom": "0px 4px 8px 0px rgba(0, 0, 0, 0.1)",
        "large-bottom": "0px 2.39499px 2.39499px rgba(0, 0, 0, 0.25)",
      },
      borderRadius: {
        large: "24px",
      },
      backgroundImage: (theme) => ({
        'gradient-blue': `linear-gradient(to bottom, ${theme('colors.dark-blue')}, ${theme('colors.light-blue')})`,
        'gradient-orange': `linear-gradient(to bottom, ${theme('colors.medium-orange')}, ${theme('colors.dark-orange')})`,
      }),
      backgroundSize: {
        'size-200': '200% 200%',
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%',
      },
    },
  },
  plugins: [],
};
