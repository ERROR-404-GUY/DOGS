const daisyui = require('daisyui')


/** @type {import('tailwindcss').Config}*/
const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {},
  },

  daisyui: {
    themes: ['light', 'dark', 'cupcake', 'acid',
      'aqua',
      'autumn',
      'black',
      'bumblebee',
      'business',
      'cmyk',
      'coffee',
      'corporate',
      'cupcake',
      'cyberpunk',
      'dark',
      'dracula',
      'emerald',
      'fantasy',
      'forest',
      'garden',
      'halloween',
      'lemonade',
      'light',
      'lofi',
      'luxury',
      'night',
      'pastel',
      'retro',
      'synthwave',
      'valentine',
      'winter',
      'wireframe',],
  },

  plugins: [daisyui],
}

module.exports = config