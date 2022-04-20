export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Nuxt OMDb Browser',
    htmlAttrs: {
      lang: 'ko'
    },
    meta: [
      { charset: 'utf-8' },
      {'http-equiv': 'X-Ua-Compatible', content: 'IE=edge'},
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },       // hid = 메타의 고유값 -> 덮어씌워지는 용도로 메타를 구분할수 있게 하는 고유값

      { hid: 'og:type', property:'og:type', content:'website'},
      { hid: 'og:site_name', property:'og:site_name', content:'Nuxt Movie App'},
      { hid: 'og:title', property:'og:title', content:'Nuxt Movie App / Search'},
      { hid: 'og:description', property:'og:description', content:'The OMDb API is a RESTful web service to obtain movie information, all content and images on the site are contributed and maintained by our users.'},
      { hid: 'og:image', property:'og:image', content:'https://avatars.githubusercontent.com/u/50436527?s=400&u=a9f6c8212c0c0b509b710d5021baf92bf2ff5ef8&v=4'},
      { hid: 'og:url', property:'og:url', content: process.env.CLIENT_URL},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href:'https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css'},
      { rel: 'preconnect', href: 'https://fonts.gstatic.com'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Oswald:wght@500&family=Roboto:wght@400;700&display=swap'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/index.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/dotenv'
  ],

  styleResources: {
    scss: [
      '~/scss/main.scss'
    ]
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      presets: ['@babel/preset-env'],
      plugins: [
        ['@babel/plugin-transform-runtime']
      ]
    },
    postcss: {
      plugins: [
        require('autoprefixer')
      ]
    }
  },

  serverMiddleware: [
    { 
      path: '/api/movie',
      handler: '~/server-middleware/movie.js'
    }
  ]

  
}
