export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'NextTask',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Schedule your Next Task. We take care of the reminders so you can worry about what matters. Built with Nuxt and Express' },
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
        '@nuxtjs/auth',
        '@nuxtjs/axios',
        '@nuxtjs/toast'
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
                        url: '/api/users/login', method: 'post', propertyName: 'token'
                    },
                    logout: true,
                    user: {
                        url: '/api/users/user', method: 'get', propertyName: 'user'
                    }
                },
                token: {
                    property: 'token',
                    required: true,
                    global: true,
                    type: 'Bearer',
                },
                user: {
                    property: 'user',
                    autoFetch: true
                }
            }
        },
        redirect: {
            login: '/auth/login',
            home: '/'
        },
        rewriteRedirects: true,
    },

    // middleware
    // middleware: ['auth'],
    // axios config
    axios: {
        baseURL: "http://localhost:3000"
        // baseURL: "https//3.15.223.249:3000"
    },

    watchers: {
        webpack: {
            aggregateTimeout: 300,
            poll: 1000
        }
    }

    // one day in september a movie

}
