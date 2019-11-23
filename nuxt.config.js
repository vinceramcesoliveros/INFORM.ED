import colors from 'vuetify/es5/util/colors'
export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_description,
    title: process.env.npm_package_description || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxtjs/vuetify',
    '@nuxt/typescript-build',
    'nuxt-typed-vuex'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: process.env.PORT || 'http://localhost:3000'
  },
  /**
   * Loading UI
   */

  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    global: {
      ripple: false
    },
    theme: {
      themes: {
        light: {
          primary: colors.green.lighten1,
          accent: colors.grey.lighten3,
          secondary: colors.purple.lighten2,
          info: colors.teal.darken1,
          warning: colors.amber.base,
          error: colors.red.darken2,
          success: colors.green.accent3
        },
        dark: {
          primary: colors.green.lighten1,
          accent: colors.grey.darken3,
          secondary: colors.deepPurple2,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  generate: {
    fallback: true
  },
  /*
   ** Build configuration
   */
  build: {
    cache: true,
    transpile: [/nuxt-typed-vuex/],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
