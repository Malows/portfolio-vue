module.exports = {
  /*
  ** CSS inyection into the building mechanism
  */
  css: [
    '@/assets/style.css',
    // 'bulma',
    // 'node_modules/font-awesome/scss/font-awesome.scss',
    'node_modules/@fortawesome/fontawesome-free/css/all.css'
  ],

  plugins: [
    '~/plugins/font-awesome-icon'
  ],
  /*
  ** Headers of the page
  */
  head: {
    title: 'Portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'My professional develops portfolio' }
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
