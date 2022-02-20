module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "sans": ["Satoshi", "sans-serif"]
      },
      boxShadow: {
        'custom': '0 0px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);'
      },
      dropShadow: {
        'text': '0 0px 1px rgb(0 0 0 / 1)',
        'custom': '0 5px 7px rgb(0 0 0 / 0.15)'
      },
      animation: {
        'spin-slow': 'spin 1.5s linear infinite'
      },
    },
    screens: {
      'xs': '400px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    }
  },
  plugins: [],


}
