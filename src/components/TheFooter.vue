<template>
  <main>
    <section class="background"></section>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
main {
  //   display: flex;
  //   justify-content: flex-start;
  //   align-items: center;
}

// .background {
//   height: 8em;
//   background-image: url("../assets/graphics/graphics-footer.svg");

//   background-repeat: no-repeat;
//   background-size: cover;
//   background-attachment: initial;
//   margin: 2em;
// }
.background {
  height: 8em;
  background-image: url("../assets/graphics/graphics-footer.svg");
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-repeat: no-repeat;

  /* fix this shit in the future...  */
  background-size: cover;
  background-attachment: initial;
}
</style>