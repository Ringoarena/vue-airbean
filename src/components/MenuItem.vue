<template>
<article>
    <div @click="addToCart" class="add"><img src="../assets/graphics/add.svg" alt=""></div>
    <div class="text">
        <p class="title">{{item.title}}</p>
        <p class="description">{{item.description}}</p>
    </div>
    <p class="price">{{item.price}} kr</p>
</article>
</template>

<script>
export default {
    props: {
        item: Object
    },
    methods: {
        addToCart() {
            this.$store.dispatch('addToCart', this.item);
        }
    }
}
</script>

<style lang="scss" scoped>
article {
    display: flex;
    justify-content: space-between;

    .add {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        clip-path: circle();
        background-color: black;
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