export default defineNuxtRouteMiddleware((to, from) => {
    const emailCookie = useCookie('email');

    if(emailCookie.value?.match(/[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z]+(?:\.[a-zA-Z0-9]+)/g) === null) {
        return navigateTo("/")
    }
});