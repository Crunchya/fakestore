<script setup>
defineProps({
    text: {
        type: String,
        required: true,
    },
})
</script>
<template>
    <button class="button button-danger">{{ text }}</button>
</template>