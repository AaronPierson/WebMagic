// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
  '@nuxt/content', 
  '@nuxtjs/color-mode', 
  'nuxt-icon', 
  '@nuxt/image',
],
  css: [
    '~/assets/css/transitions.css',
  ],
  // ssr: false,
  // nitro: {
  // preset: 'service-worker'
  // },
  app: {
    head: {
      title: 'Aaron Pierson',
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com/css?family=Lugrasimo',
          crossorigin: "",
        },
      ],
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width,initial-scale=1' },
      ],
    },
    // pageTransition: { name: 'page', mode: 'out-in' }
  },
});


