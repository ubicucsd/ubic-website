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
    '@nuxtjs/auth',
    'nuxt-buefy'
  ],
  axios: {
    credentials: false
    // proxyHeaders: false
  },
  auth: {
    redirect: {
      callback: '/callback'
    },
    strategies: {
      google: {
        client_id:
          '10317661874-kcl18u77mkjkh0p6s8t64jc8jmenbgc6.apps.googleusercontent.com'
      },
      ucsd: {
        _scheme: 'oauth2',
        authorization_endpoint: 'https://accounts.google.com/o/oauth2/auth',
        userinfo_endpoint: 'https://www.googleapis.com/oauth2/v3/userinfo',
        scope: ['openid', 'profile', 'email'],
        response_type: 'token',
        token_type: 'Bearer',
        redirect_uri: undefined,
        client_id: 'SET_ME',
        token_key:  'access_token'
      }
    }
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
