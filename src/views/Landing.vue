<template>
  <div class="home">

    <div class="landing-wrapper">

      <section class="graphics">

        <div class="left"></div>
        <div class="logo"></div>
        <div class="right"></div>

      </section>

      <!-- <div class="logo"></div> -->

    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {}
};
</script>
<style lang="scss" scoped>
.home {
  height: 100vw;
  background: #38846d;
}

.landing-wrapper {
  display: flex;
    flex-direction: column;


  .graphics {
    display: flex;
    justify-content: space-between;
    align-items: center;
    // display: grid;
    // grid-template-columns: repeat(auto);
    // grid-template-areas: "left logo right";

    .left {
      grid-area: left;
      background: url("../assets/graphics/intro-graphic-left.svg");
    }
    .right {
      grid-area: right;
      // margin-left: 10em;
      background-position: right;
      background: url("../assets/graphics/intro-graphic-left.svg");
      // transform: scaleX(-1);
      transform: rotate(180deg);
    }

    .left,
    .right {
      background-repeat: no-repeat;
      width: 100%;
      height: 100vw;
    }
  }

  .logo {
    grid-area: logo;
    padding: 6em;
    width: 100%;
    background: url("../assets/graphics/airbean-landing.svg") no-repeat;
  }
}
</style>