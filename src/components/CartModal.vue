<template>
  <main class="modal" v-if="cartIsOpen">
    <div class="graphic"></div>
    <article class="modal-content">
      <header class="top">
        <h1>Din beställning</h1>
      </header>
      <main class="list-content"></main>
      <footer class="bottom">
        <button @click="closeCart" class="takemoneybtn">Take my money!</button>
      </footer>
    </article>
  </main>
</template>
<script>
export default {
  name: "CartModal",
  props: {},
  computed: {
    cartIsOpen() {
      return this.$store.state.cartIsOpen;
    }
  },
  methods: {
    closeCart() {
      this.$store.dispatch("closeCart");
    }
  }
};
</script>
<style lang="scss" scoped>
.modal {
  display: block;
  position: fixed;
  z-index: 1;
  padding-top: 10em;
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
    position: relative;
    left: 16em;
  }

  .modal-content {
    background-color: white;
    margin: auto;
    padding: 20px;
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .bottom {
      .takemoneybtn {
        padding: 1em;
        color: white;
        background-color: #2f2926;
      }
    }
  }
}
</style>