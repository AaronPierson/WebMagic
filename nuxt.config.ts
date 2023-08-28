// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
  '@nuxt/content', 
  '@nuxtjs/color-mode', 
  'nuxt-icon', 
  '@nuxt/image',
],
  nitro: {
    prerender: {
      crawlLinks: true,
    },
  },
  ssr: false,
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
});


