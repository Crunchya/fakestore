import { Redis } from '@upstash/redis/cloudflare'
export default defineNuxtPlugin(nuxtApp => {
    

    const redisClient = new Redis({
        url: '',
        token: '',
    })

    return {
        provide: {
            redis: redisClient,
        }
    }
});