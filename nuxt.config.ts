// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
  '@nuxt/content', 
  '@nuxtjs/color-mode', 
  'nuxt-icon', 
  '@nuxt/image',
],
  // ssr: false,
  // nitro: {
  // preset: 'service-worker'
  // },
  app: {
    // pageTransition: { name: 'page', mode: 'out-in' }
  },
});


