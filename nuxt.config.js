module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'ubic_website',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: "https://use.fontawesome.com/releases/v5.1.1/css/all.css", integrity: "sha384-O8whS3fhG2OnA5Kas0Y9l3cfpmYjapjI0E4theH4iuMD+pLhbf6JI0jIMfYcK3yZ", crossorigin: "anonymous" }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#F7C8A5' },
  router: { base: '' },
  /*
  ** Build configuration
  */
  plugins: [
    { src: '~/plugins/vue-full-calendar', ssr: false },
    { src: '~/plugins/buefy', ssr: false },
    { src: '~/plugins/ga', ssr: false }
  ],
  modules: [
    '@nuxtjs/axios',
    'nuxt-buefy'
  ],
  axios: {
    // proxyHeaders: false
  },
  /*
  ** Include css not in components
  */
  css: [
    // node.js module but we specify the pre-processor
    { src: 'bulma/bulma.sass', lang: 'sass' },
    { src: 'fullcalendar/dist/fullcalendar.min.css', lang: 'css'}
  ],
  build: {
    vendor: [
    ],
    postcss: {
      plugins: {
        'postcss-custom-properties': {
          warnings: false
        }
      }
    },
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
