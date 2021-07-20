// tailwind.config.js
module.exports = {
  purge: [],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend:{
      
    colors: {
      whitesmoke: "#F5F5F5",     
      hoverred: "#FCE8E6",

    }}}, 
  
   variants: {
     extend: {},
   },
   plugins: [],
 }
