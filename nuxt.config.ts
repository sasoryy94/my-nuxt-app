import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/supabase',
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt'
  ],

  supabase: {
    redirect: false,
    redirectOptions: {
      login: '/login',
      callback: '/confirm',
      exclude: [],
    }
  },

  nitro: {
    preset: 'node'
  },

  devtools: { enabled: true },

  shadcn: {
    prefix: '',
    componentDir: './components/ui'
  },

  compatibilityDate: '2024-11-17'
})