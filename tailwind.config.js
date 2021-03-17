module.exports = {
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.APP_ENV === 'production',
    content: ['./source/**/*.{js,html,twig,scss,css,md}']
  },
  theme: {
    extend: {},
    fontFamily: {
      body: ['Karla', 'Open Sans', 'sans-serif'],
      head: ['Rubik', 'Arial', 'sans-serif']
    }
  },
  variants: {},
  plugins: []
}
