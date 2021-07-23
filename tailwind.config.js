module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        mf:
        {
          50: '#d9feff',
          100: '#aff3fc',
          200: '#83eaf7',
          300: '#55e0f3',
          400: '#2ad7ee',
          500: '#11bed5',
          600: '#0094a7',
          700: '#006a77',
          800: '#004049',
          900: '#00171d',
        },
        mr:
        {
          50: '#edf1fc',
          100: '#d3d4e1',
          200: '#b6b8c9',
          300: '#989bb2',
          400: '#7c7f9b',
          500: '#636582',
          600: '#4c4f66',
          700: '#363849',
          800: '#2b3147',
          900: '#0a0a16',
        }
        
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
