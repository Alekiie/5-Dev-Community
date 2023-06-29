/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: 'class',
    theme: {
      fontFamily: {
        display: ['Open Sans', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      extend: {
        fontSize: {
          14: '14px',
        },
        backgroundColor: {
          'main-bg': '#FAFBFB',
          'main-dark-bg': '#20232A',
          'secondary-dark-bg': '#33373E',
          'light-gray': '#F7F7F7',
          'half-transparent': 'rgba(0, 0, 0, 0.5)',
        'favourite': '#3f5efb',
        'gradient-text': 'linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%);',
       
        },
        textColor:{
          'color-text': '#81AFDD',
          'subtext': '#FF8A71',
          'color-subtext': '#FF8A71',
          'gradient-text': 'linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%);',
         
         
        },
        
        borderWidth: {
          1: '1px',
        },
        borderColor: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
        width: {
          400: '400px',
          760: '760px',
          780: '780px',
          800: '800px',
          1000: '1000px',
          1200: '1200px',
          1400: '1400px',
        },
        height: {
          80: '80px',
        },
        minHeight: {
          590: '590px',
        },
        backgroundImage: {

          'gradient-bg': 'radial-gradient(circle at 3% 25%, rgba(0, 40, 83, 1) 0%, rgba(4, 12, 24, 1) 100%)',
          'input-bg':'#040C18',
          'icon-color' : '#fc5356',
          'gradient-div-bg':'radial-gradient(circle at 30% -100%,#042c54 25%,#042c54 85%,#1b78de 100%)',
         

        },
        
      },
    },
    plugins: [],
};