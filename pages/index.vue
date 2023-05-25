<script setup>
const email = ref('');


const emailCookie = useCookie('email')

function setCookie(cookie) {
    emailCookie.value = cookie;
    navigateTo("/products");
}
</script>
<template>
    <div class="grid place-content-center min-h-screen">
        <form @submit.prevent="setCookie(email)">
            <input type="email" v-model="email" />
            <button type="submit" class="button button-secondary">Send</button>
        </form>
    </div>
</template>