<template>
  <main>
    <div class="orderinfo">
      <p>
        Ordernummer
        <span>{{this.ordernumber}}</span>
      </p>
    </div>
    <img src="@/assets/graphics/drone.svg" alt="En drönare med en kopp riktigt gott kaffe." />
    <h1>Din beställning är på väg!</h1>
    <p>
      {{this.eta}}
      <span>minuter</span>
    </p>
  </main>
</template>

<script>
export default {
  data() {
    return {
      ordernumber: "#12345",
      eta: 13
    };
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Work+Sans&display=swap");

.orderinfo {
  p {
    font-family: "Work Sans", sans-serif;
    color: rgba(255, 255, 255, 0.7);
    span {
      font-weight: 600;
    }
  }
}

main {
  background-color: #e5674e;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>