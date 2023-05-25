<script setup>
import InventoryList from '~/components/inventoryList.vue';

const currentEmail = useCookie("email");
const email = currentEmail.value;
const products = ref([]);
definePageMeta({
    middleware: 'protector'
})
</script>
<template>
    <div class="navbar navbar-light fixed flex items-center">
        <div class="flex flex-row twelve columns justify-between items-center">
            <div class="nav-link text-center"> PRO </div>
            <div class="nav-link text-center">{{ email }}</div>
        </div>
    </div>
    <InventoryList/>
</template>