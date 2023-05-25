<script setup>
defineProps({
    card: {
        type: String,
        required: true
    }
})
const chosen = defineEmits(["chooseProduct"])

function chooseProduct(product) {
    chosen('chooseProduct', product)
}
</script>
<template>
    <div class=" width-400-pixels height-400-pixels bg-cyan-800 rounded-xl color-white">
        <img :src="card.image" class="width-100-percents height-40-percents object-contain">
        <div class="flex flex-column justify-between height-60-percents p-5">
            <h3 class="font-bold">{{ card.title }}</h3>
            <p class="text-xl"> {{ card.description }}</p>
            <div class="flex flex-row justify-between items-center">
                <button class="button button-primary" @click="chooseProduct(card)"><IconCSS name="uil:plus"/></button>
                <p> {{ card.price }} &euro;</p>
            </div>
        </div>
    </div>
</template>