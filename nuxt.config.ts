export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    'nuxt-icon',
    '@vueuse/nuxt',
    '@nuxtjs/supabase'
  ],
  supabase: {
    redirect: false
  },
  runtimeConfig: {
    stripeSecretKey: process.env.STRIPE_SECRET_KEY,
    public: {
      stripePublicKey: process.env.STRIPE_PUBLIC_KEY
    }
  }
})
