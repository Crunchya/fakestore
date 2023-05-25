<script setup>
import ButtonCategory from '~/components/buttonCategory.vue';
import ProductCard from '~/components/productCard.vue';

const currentEmail = useCookie("email");
const email = currentEmail.value;
const products = ref([]);
const chosenProducts = ref([]);
const categories = ref([]);
const searchQuery = ref("");
definePageMeta({
    middleware: 'protector'
})
async function getProducts() {
    const apiProducts = await fetch('https://fakestoreapi.com/products')
    products.value = await apiProducts.json()
}

function addProductChosen(product) {
    chosenProducts.value.push(product)
}

async function getAllCategories() {
    const apiCategories = await fetch('https://fakestoreapi.com/products/categories')
    categories.value = await apiCategories.json()
}

const calcTotal = computed(() => {
    return chosenProducts.value.reduce((before, current) => before + current.price, 0)
})
const filteredProducts = computed(() => {
            if (!searchQuery) {
                return products.value;
            }
            return products.value.filter((product) => {
                return product.title.toLowerCase().includes(searchQuery.value.toLowerCase());
            });
        },
)

onMounted(() => {
    getProducts()
    getAllCategories()
})
</script>
<template>
    <div class="navbar navbar-light fixed">
        <div class="flex flex-row twelve columns items-center">
            <div class="nav-link text-center six columns"> {{ email }}</div>
            <div class="nav-link text-center three columns">
                <input type="text" v-model="searchQuery" placeholder="Recherche">
            </div>
            <div class="nav-link four columns">
                <div class="flex justify-center">
                    <div class="dropdown">
                        <a class="button button-secondary text-center"><IconCSS name="uil:shopping-cart"/></a>
                        <div class="dropdown-content">
                            <hr v-show="chosenProducts.length > 0">
                            <div v-for="product in chosenProducts">
                                <p class="text-base">{{ product.title }}</p>
                                <hr>
                            </div>
                            <div class="flex justify-between">
                                <p>TOTAL</p>
                                <p>{{ calcTotal }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="flex pt-32">
        <div>
            <ButtonCategory :text="category" v-for="category in categories"/>
        </div>
        <div class="flex flex-wrap gap-10 justify-center">
            <ProductCard @chooseProduct="addProductChosen" v-for="product in filteredProducts" :card="product"/>
        </div>
    </div>
</template>