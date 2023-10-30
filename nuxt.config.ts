// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  extends: ['nuxt-umami'],
  
  modules: [
  '@nuxt/content', 
  '@nuxtjs/color-mode', 
  'nuxt-icon', 
  '@nuxt/image',
  '@dargmuesli/nuxt-cookie-control',
],
  css: [
    '~/assets/css/transitions.css',
  ],
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
  appConfig: {
    umami: {
      host: 'https://umami.astranexus.online/umami.js',
      id: '5978a852-e4f5-4cd4-9a1a-6b1a07b53654'
    },
      // module options
      cookieControl: {
    }
  },
})

