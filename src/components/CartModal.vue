<template>
  <main class="modal" v-if="cartIsOpen">
    <div class="graphic"></div>
    <article class="modal-content">
      <h1>Din beställning</h1>
      <section class="cart-items">
        <CartItem
          v-for="cartItem in cart"
          :key="cartItem.product.id"
          :cartItem="cartItem" />
      </section>
      <footer>
        <div class="summary">
          <div>
            <p class="total">Total</p>
            <p class="vat">inkl. moms + drönarleverans</p>
          </div>
          <p class="totalPrice">{{cartTotalPrice}} kr</p>
        </div>
        <button @click="submitOrder()" class="takemoneybtn">Take my money!</button>
        <button @click="closeModal()">Close</button>
      </footer>
    </article>
  </main>
</template>
<script>
import CartItem from "@/components/CartItem";
export default {
  components: {
    CartItem
  },
  name: "CartModal",
  props: {},
  computed: {
    cartIsOpen() {
      return this.$store.state.cartIsOpen;
    },
    cart() {
      return this.$store.state.cart;
    },
    cartTotalPrice() {
      return this.$store.getters.getCartTotalPrice;
    }
  },
  methods: {
    submitOrder() {
      let currentUser = this.$store.state.user;
      if (currentUser) {
        console.log('user logged in');
        currentUser.orders.push(this.cart);
        this.$store.dispatch('addOrder', currentUser);
      }
      this.$store.dispatch('closeCart');
      this.$store.dispatch('clearCart');
      this.$router.push({name: 'Status'});
    },
    closeModal() {
      this.$store.dispatch("closeCart");
    }
  }
};
</script>
<style lang="scss" scoped>
.modal {
  font-size: 1.5rem;
  display: block;
  position: absolute;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;

  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);

  .graphic {
    clip-path: polygon(50% 50%, 0% 100%, 100% 100%);
    background-color: white;
    width: 1em;
    height: 1em;
    position: absolute;
    top: 5rem;
    right: 3.5rem;
  }

  .modal-content {
    border-radius: 2px;
    padding-top: 2rem;
    background-color: white;
    margin: 6.5rem auto 0 auto;
    min-height: 80%;
    width: 95%;
    display: flex;
    align-items: center;
    flex-direction: column;

    .cart-items {
      width: 90%;
    }

    footer {
      margin-top: auto;
      margin-bottom: 2rem;
      width: 90%;
      display: flex;
      flex-direction: column;
      align-items: center;
      .summary {
        display: flex;
        justify-content: space-between;
        width: 100%;
        .total {
          font-size: 2rem;
          font-weight: bold;
        }
        .vat {
          font-size: 1.2rem;
        }
        .totalPrice {
          font-size: 2rem;
          font-weight: bold;
        }
      }


      .takemoneybtn {
        font-family: 'Times New Roman', Times, serif;
        font-weight: 600;
        border: none;
        margin-top: 2rem;
        font-size: 1.5rem;
        border-radius: 50px;
        outline: none;
        padding: 1rem 2rem;
        color: white;
        background-color: #2f2926;
      }
    }
  }
}
</style>