// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  dir: {
    assets: 'src/assets',
    public: 'public',
    plugins: 'src/plugins',
    pages: 'src/pages',
    layouts: 'src/layouts',
    middleware: 'src/middleware'
  },
  components: ['src/components'],
  css: ['~/src/assets/main.css'],
  modules: [
    'nuxt-swiper'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  }
})
