export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'simple-todos',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A simple Todo App built with Nuxt and Express' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/defaults.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/fontawesome'
  ],

  // fontawesome config
  fontawesome: {
    icons: {
      solid: true,
      brands: true
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/auth-next'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {

  },

  //allow additional routes inside the api
  serverMiddleware: [
    '~/api/main.js'
  ],

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/api/users/login', method: 'post'
          },
          logout: true,
          user: {
            url: '/api/users/user', method: 'get'
          }
        },
        token: {
          required: true,
          type: 'Bearer',
        },
        user: {
          // property: ''
          // autoFetch: true
        }
      }
    }
  }

}
