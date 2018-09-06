module.exports = {
  /*
  ** Headers of the page
  */
  plugins: [
      { src: '~/plugins/axios', ssr: false },
  ],
  head: {
    title: 'blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    // extend (config, { isDev, isClient }) {
    //   if (isDev && isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
  },

  modules: ['@nuxtjs/axios'],

  axios: {
    // baseURL: 'http://api.minamihyou.com:3000/', //本番用
    baseURL: 'http://localhost:3001/', //開発用
    timeout: 3000,
    headers: {
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin": "*"
    }

    // proxyHeaders: false
  }
}
