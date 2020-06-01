<template>
<article>
    <div @click="addToCart" class="add"><img src="../assets/graphics/add.svg" alt=""></div>
    <div class="text">
        <p class="title">{{product.title}}</p>
        <p class="description">{{product.description}}</p>
    </div>
    <p class="price">{{product.price}} kr</p>
</article>
</template>

<script>
export default {
    props: {
        product: Object
    },
    methods: {
        addToCart() {
            this.$store.dispatch('addToCart', {product: this.product});
        }
    }
}
</script>

<style lang="scss" scoped>
article {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;

    .add {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        clip-path: circle();
        background-color: #2f2926;
        img {
            width: 1rem;
        }
        cursor: pointer;
    }

    .text {
        margin-left: 2rem;
        margin-right: auto;
        .title {
            font-size: 2rem;
        }
    }

    .price {
        font-size: 2rem;
    }
}

</style>