import { Redis } from '@upstash/redis/cloudflare'
export default defineNuxtPlugin(nuxtApp => {
    

    const redisClient = new Redis({
        url: 'https://model-ape-31570.upstash.io',
        token: 'AXtSASQgZGY5NTZlN2QtZTViNy00NjA1LTkyM2EtNWMwY2EwMWI0MjAzZWRjNTU3NDQwMWM3NDc0Y2FkNTkzY2JhMGJkNGRjNmY=',
    })

    return {
        provide: {
            redis: redisClient,
        }
    }
});