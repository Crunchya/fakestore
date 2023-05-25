<script setup>
import SingleProduct from './singleProduct.vue';

const products = ref([])

async function getProducts() {
    const apiProducts = await fetch('https://fakestoreapi.com/products')
    products.value = await apiProducts.json()
}

getProducts()

</script>

<template>
    <div class="flex flex-col gap-10 justify-center pt-32">
        <div class="flex justify-even" v-for="product in products">
            <SingleProduct :key="product.id" :product="product"/>
        </div>
    </div>
</template>