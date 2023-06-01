<script setup>
const props = defineProps({
    product: {
        type: Object,
        required: true,
    }
})

const { $redis } = useNuxtApp();

const quantity = ref(0);

async function getQuantity(){
    const dbQuantity = await $redis.get(props.product.id)
    dbQuantity === null ? quantity.value = 0 : quantity.value = dbQuantity
}

async function increaseQuantity(product){
    const qty = await $redis.incr(product.id)
    quantity.value = qty
}

async function decreaseQuantity(product){
    const qty = await $redis.decr(product.id)
    quantity.value = qty
}

onMounted(() => getQuantity())

</script>
<template>
    <p>{{ product.id }}</p>
    <p> - </p>
    <p>{{ product.title }}</p>
    <input type="text" :value="quantity" disabled/>
    <button @click="increaseQuantity(product)"><IconCSS name="uil:plus"/></button>
    <button @click="decreaseQuantity(product)"><IconCSS name="uil:minus"/></button>
</template>