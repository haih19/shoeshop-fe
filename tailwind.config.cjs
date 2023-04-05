/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      extend: {
         colors: {
            primary: '#000000',
            gray: '#cccccc',
            'gray-75': '#757575',
            'dark-charcoal': '#333333',
            'gray-d2': '#d2d2d2',
            'gray-66': '#666666',
            'red-warning': '#ff4d4f',
         },
      },
   },
   plugins: [],
}
