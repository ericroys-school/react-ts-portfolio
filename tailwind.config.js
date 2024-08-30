/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      blue: '#13BAF2',
      black: '#3B413C',
      yellow: '#F4FDAF',
      brown: '#C4A69D',
      redish: '#F24B29',
      bluish: '#08B2D4',
      pinkish: '#CC9C93',
      'greenish-light': '#95CF9E',
      greenish: '#E6F9AF',
      'greenish-dark': '#54755A',
      'bluish-dark': '#12263A',
    },
    fontFamily: {
      special: ['Special Elite', 'sans-serif'],
      amatic: ['Amatic', 'sans-serif'],

    },
    extend: {
      dropShadow: {
        'abc': ['0 10px 8px rgb(198 28 28 / 4%)',
                '0 4px 3px #847d7b']
      }      
    },
  },
  plugins: [],
};
