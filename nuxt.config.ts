// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [ 'nuxt-icon', '@nuxtjs/tailwindcss'],
    app: {
        head: {
            link: [
                { rel: 'stylesheet', href: 'http://lemonssquirrel.github.io/css/skeleton.css'}
            ]
        }
    },
    css: ["@/assets/css/style.css"],
})
