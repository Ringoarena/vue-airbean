<template>
<article>
    <div class="text">
        <p class="title">{{cartItem.product.title}}</p>
        <p class="price">{{cartItem.product.price}} kr</p>
    </div>
    <div class="quantityController">
        <p class="controller" @click="addToCart()">&and;</p>
        <p class="quantity">{{cartItem.quantity}}</p>
        <p class="controller" @click="removeFromCart()">&or;</p>
    </div>
</article>
</template>

<script>
export default {
    props: {
        cartItem: Object
    },
    methods: {
        addToCart() {
            this.$store.dispatch('addToCard', this.CartItem);
        },
        removeFromCart() {
            this.$store.dispatch('removeFromCart', this.CartItem);
        }
    }
}
</script>

<style lang="scss" scoped>
article {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .text {
        .title {
            font-size: 2rem;
        }
    }

    .quantityController {
        font-size: 1.2rem;
        .controller {
            cursor: pointer;
        }
        .quantity {
            font-size: 1.5rem;
        }
    }
}
</style>