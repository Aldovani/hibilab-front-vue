export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'HibiLab',
    htmlAttrs: {
      lang: 'pt-br',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },


  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['normalize.css/normalize.css', '@/assets/scss/base.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/accessor', '@/plugins/axios', '@/plugins/notifications.client'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [{ path: '@/components', pathPrefix: false }],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/google-fonts'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/google-fonts',
    '@nuxtjs/style-resources',
    '@nuxtjs/axios',
    'cookie-universal-nuxt',
    ['nuxt-stripe-module', {
      publishableKey:
        'pk_test_51KVPhhGOxOu9eoh9RAQCNFD6XJ3znfnNdikmrZeO2ermlc7IBnLW5WFm3hhNaDacxOEMf1N4KjctlzrO4YOuwz6r00TR8bXK7b',

    }],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCss: true,

  },
  googleFonts: {
    preload: true,
    families: {
      Roboto: true,
      Inter: true,
    },
  },
  styleResources: {
    scss: ['@/components/bosons/*.scss'],
  },
  axios: {
    baseURL: 'https://hibilab.herokuapp.com',
  }
}
