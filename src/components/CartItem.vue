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
            this.$store.dispatch('addToCart', this.cartItem);
        },
        removeFromCart() {
            this.$store.dispatch('reduceQuantity', this.cartItem);
        }
    }
}
</script>

<style lang="scss" scoped>
article {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;

    .text {
        .title {
            font-size: 1.7rem;
            font-weight: bold;
        }
        .price {
            font-size: 1rem;
        }
    }

    .quantityController {
        font-size: 1rem;
        font-weight: bold;
        .controller {
            cursor: pointer;
        }
        .quantity {
            font-size: 1.5rem;
        }
    }
}
</style>