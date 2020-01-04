import colors from 'vuetify/es5/util/colors'
import 'reflect-metadata'
const routerBase =
  process.env.DEPLOY_ENV === 'GH_PAGES'
    ? {
        router: {
          base: '/INFORM.ED/'
        }
      }
    : {}
export default {
  ...routerBase,
  server: {
    port: 3333,
    host: '0.0.0.0'
  },
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
  plugins: ['@/plugins/draggable.js'],
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
    baseURL: process.env.PORT || 'http://localhost:3000/api'
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
          primary: colors.deepPurple.lighten2,
          accent: colors.grey.lighten3,
          secondary: colors.purple.lighten2,
          info: colors.teal.darken1,
          warning: colors.amber.base,
          error: colors.red.darken2,
          success: colors.green.accent3
        },
        dark: {
          primary: '#64e291',
          accent: '#226b80',
          secondary: '#6384b3',
          info: '#e6e56c',
          warning: '#ff8080',
          error: '#eb7070',
          success: '#58b368'
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
