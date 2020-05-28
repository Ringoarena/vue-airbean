<template>
  <div class="home" @click="clickHandler">
    <div class="landing-wrapper">
      <section class="graphics">
        <div class="left">
          <img src="../assets/graphics/intro-graphic-left.svg" alt />
        </div>
        <div class="logo">
        <img src="../assets/graphics/airbean-landing.svg" alt />
        </div>
        <div class="right">
          <img src="../assets/graphics/intro-graphic-left.svg" alt />
        </div>
      </section>
    </div>
  </div>
</template>

<script>

export default {
  name: "Home",
  components: {},
  methods: {
    clickHandler() {
       this.$store.dispatch("openNav");
    }
  }
};
</script>
<style lang="scss" scoped>
.home {
  background-color: #38846d;

  .landing-wrapper {

    .graphics {
      display: grid;
      grid-template-columns: 50px auto 50px;
      .right {
        transform: rotate(180deg);
      }
      .logo{
        position: relative;
        right: 0.8em;
        bottom: 2em;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>