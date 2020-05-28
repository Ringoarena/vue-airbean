<template>
  <main>
    <div class="profile">
      <figure>
        <img src="@/assets/graphics/eva-cortado.jpg" alt="Profilbild" />
        <h3>Förnamn Efternamn</h3>
        <p>epost@example.com</p>
      </figure>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=PT+Serif:wght@700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Work+Sans&display=swap");

main,
figure {
  color: #fff;
  background-color: #2f2926;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    font-family: "PT Serif", serif;
  }
}
</style>