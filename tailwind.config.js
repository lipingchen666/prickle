/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        "1": "1px"
      },
      gray: {
        "350": "#737479"
      }
    },
  },
  plugins: [],
  corePlugins: {
    divideStyle: true,
    divideWidth: true,
    divideColor: true,
    divideOpacity: true,
  }
}
