// https://v3.nuxtjs.org/api/configuration/nuxt.config


export default defineNuxtConfig({
  modules: [
  '@nuxt/content', 
  '@nuxtjs/color-mode', 
  'nuxt-icon', 
  '@nuxt/image',
  '@dargmuesli/nuxt-cookie-control',
],
typescript: {
  includeWorkspace: true,
},
cookieControl: {
    colors: {
      checkboxActiveBackground: '#00A34A', // text-green-600
    },
    closeModalOnClickOutside: true,
    cookies: {
      necessary: [
        {
          description: {
            de: 'Dieser Cookie tut etwas.',
            en: 'This cookie does something very very very very very very very long.',
          },
          name: {
            de: 'Notwendiger Cookie',
            en: 'Necessary Cookie',
          },
          targetCookieIds: ['NEC'],
        },
      ],
      optional: [
        {
          id: 'op',
          name: 'Optional Cookie',
          links: {
            'https://example.com': 'Privacy Policy',
            'https://example.cop': null,
          },
          targetCookieIds: ['_o', '_p', '_t'],
        },
      ],
    },
    isCookieIdVisible: true,
    isIframeBlocked: true,
    locales: ['en', 'de'],
    localeTexts: {
      de: {
        iframeBlocked: 'Bitte funktionale Cookies aktivieren:',
      },
    },
  },
extends: ['nuxt-umami'],
  appConfig: {
    umami: {
      host: 'https://umami.astranexus.online/umami.js',
      id: '6d117013-568e-4a1a-8e9f-863a9ff5a7ec',
      version: 2,
      debug: true,
    },
  },
  

  app: {
    // pageTransition: { name: 'page', mode: 'out-in' }
  },
});


