<template>
  <main>
    <section class="background">
      <!-- <img src="../assets/graphics/graphics-header.svg" alt /> -->
      <section @click="clickHandlerMenu" class="hamburgerbtn">
        <img src="../assets/graphics/navicon.svg" alt />
      </section>

      <div v-if="getNumberOfItemsFromShoppingCart && bagIsVisible" class="bag">
        <section @click="clickHandlerBag" class="bagbtn">
          <img src="../assets/graphics/bag.svg" alt />
        </section>
        <div  class="displayNumberOfItems">
          <p v-text="getNumberOfItemsFromShoppingCart"></p>
          <!-- <p :displayItems="displayItems">7</p> -->
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      bagIsVisible: true
    };
  },
  computed: {
    getNumberOfItemsFromShoppingCart() {
      // if 
      // TODO: Connect this with vuex state
      return 2
    }
  },
  props: {},
  methods: {
    clickHandlerMenu() {
      this.$store.dispatch("openNav");
    },
    clickHandlerBag() {
      console.log("Hello bag");
    }
  }
};
</script>

<style lang="scss" scoped>
.background {
  height: 8em;
  background-image: url("../assets/graphics/graphics-header.svg");
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: initial;
}

.hamburgerbtn,
.bagbtn {
  display: flex;
  justify-content: center;
  align-items: center;
  clip-path: circle();
  padding: 1em;
  margin: 1em;
  cursor: pointer;
}

.hamburgerbtn {
  background: white;
}

.bagbtn {
  background: black;
}

.bag {
  display: grid;
}

.displayNumberOfItems p {
  background: red;
  color: white;
  clip-path: circle();
  padding: 0.5em;
  font-weight: 900;
  position: absolute;
  top: 1.4em;
  right: 0.7em;
}
</style>