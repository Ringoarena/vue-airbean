<template>
  <main>
    <section class="graphics">
      <img src="../assets/graphics/graphics-header.svg" alt />
    </section>

    <nav class="nav-btns">
      <section @click="clickHandlerMenu" class="hamburgerbtn">
        <img src="../assets/graphics/navicon.svg" alt />
      </section>

      <div v-if="getNumberOfItemsFromShoppingCart && bagIsVisible" class="bag">
        <section @click="clickHandlerBag" class="bagbtn">
          <img src="../assets/graphics/bag.svg" alt />
        </section>
        <div class="displayNumberOfItems">
          <p v-text="getNumberOfItemsFromShoppingCart"></p>
          <!-- <p :displayItems="displayItems">7</p> -->
        </div>
      </div>
    </nav>
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
      return 1;
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
main {
  background-color: #f3e4e1;
  display: grid;
  grid-template-rows: 4em 1em;
  padding-bottom: 2em;

  .graphics {
    img {
      width: 100%;
    }
  }

  .nav-btns {
    display: flex;
    justify-content: space-between;
    align-items: center;
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

    .bag {
      .bagbtn {
        // position: relative;
        // top: 0.5em;
        background: black;
        margin-top: 1.6em;
        margin-right:2.6em;
      }
      .displayNumberOfItems {
        background: red;
        clip-path: circle();
        padding: 0.3em;
        position: relative;
        bottom: 4.5em;
        left: 0.8em;
        display: flex;
        justify-content: center;
        align-items: center;

        p {
          color: white;
          font-weight: 900;
          font-size: 1em;
        }
      }
    }
  }
}
</style>