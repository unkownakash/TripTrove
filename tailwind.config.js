/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #FFD9B3, #FFE0C2, #FFF5D6)',
      },
      colors:{
        primary: '#441752',
        secondary: '#EFB6C8',
        alpha:'#24262b',
        customLightBlue: '#f9fcff',
        
      },
    },
  },
  plugins: [],
}

