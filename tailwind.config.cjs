/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'deep-purple' : '#58032d', 
        'deep-green' : '#015701',
        'deeper-green' : '#003c00', 
        'blur-green' : '#576449'
      }, 
    },
  },
  plugins: [],
};
