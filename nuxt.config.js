import Config from './common/config.js'

export default {
    mode: 'universal',
    /*
    ** Headers of the page
    */
    head: {
        title: Config.app.siteTitle,
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: Config.app.siteDescription },
            // OpenGraph
            {
                hid: 'og:title',
                property: 'og:title',
                content: Config.app.siteTitle
            },
            {
                hid: 'og:site_name',
                property: 'og:site_name',
                content: Config.app.siteName
            },
            {
                hid: 'og:type',
                property: 'og:type',
                content: 'website'
            },
            {
                hid: 'og:url',
                property: 'og:url',
                content: Config.app.siteUrl
            },
            {
                hid: 'og:image',
                property: 'og:image',
                content: `${Config.app.siteUrl}/${Config.app.siteSocialImage}`
            },
            {
                hid: 'og:description',
                property: 'og:description',
                content: Config.app.siteDescription
            },

            // Twitter card
            {
                hid: 'twitter:card',
                name: 'twitter:card',
                content: 'summary_large_image'
            },
            {
                hid: 'twitter:site',
                name: 'twitter:site',
                content: Config.app.twitterUser
            },
            {
                hid: 'twitter:title',
                name: 'twitter:title',
                content: Config.app.siteTitle
            },
            {
                hid: 'twitter:description',
                name: 'twitter:description',
                content: Config.app.siteDescription
            },
            {
                hid: 'twitter:image:src',
                name: 'twitter:image:src',
                content: `${Config.app.siteUrl}/${Config.app.siteSocialImage}`
            }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    /*
    ** Customize the progress-bar color
    */
    loading: '~/components/MLoading.vue',
    /*
    ** Global CSS
    */
    css: [
        '~/assets/css/theme.css'
    ],
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
    ],
    /*
    ** Nuxt.js dev-modules
    */
    buildModules: [
        // Doc: https://github.com/nuxt-community/eslint-module
        '@nuxtjs/eslint-module'
    ],
    /*
    ** Nuxt.js modules
    */
    modules: [
        '@nuxtjs/pwa',
        '@nuxt/http'
    ],
    pwa: {
        manifest: {
            name: 'Nuxt Norris',
            short_name: 'Norris'
        }
    },
    /*
    ** http module setup: https://http.nuxtjs.org/
    */
    http: {
        proxyHeaders: false,
        proxy: true,
        https: process.env.NODE_ENV === 'production' ? 'true' : 'false'
    },
    proxy: {
        '/api/': {
            target: 'https://api.chucknorris.io',
            pathRewrite: { '^/api/': '' }
        }
    },
    /*
    ** Build configuration
    */
    build: {
        /*
        ** You can extend webpack config here
        */
        extend (config, ctx) {
        },

        extractCSS: true
    }

}
