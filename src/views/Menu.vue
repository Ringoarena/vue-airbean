<template>
<main>
    <h1>Meny</h1>
    <section>
        <Product :key="product.id" v-for="product in products" :product="product" />
    </section>
    
</main>
  
</template>

<script>
import Product from '@/components/Product.vue'

export default {
    components: {
        Product
    },
    data() {
        return {
        }
    },
    computed: {
        products() {
            return this.$store.state.products;
        }
    },
    mounted() {
        this.$store.dispatch('getProducts');
    }
}
</script>

<style lang="scss" scoped>
main {
    background-color: #f3e4e1;
    display: flex;
    flex-direction: column;
    align-items: center;
    section {
        width: 90%;
    }
}
</style>