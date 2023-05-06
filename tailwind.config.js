/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        "blue_shade": "#003F63",
        "sand": "#FFF2CE"
      },
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif']
      },
      screens: {
        xs: "450px",
        med: {'max':'1000px'},
        tall: { 'raw': '(max-height: 1200px)'},
        large: {'max':'1410px'},
        xsmax : {'max' : '450px'},
        xsnavadj: {'max' : '475px'}
      },
      fontFamily: {
        Lora: ['Lora', 'serif'],
      }
    },
  },
  plugins: [],
};
