<template>
  <main class="history">
    <p class="number">#ABBA002</p>
    <p class="orderdate">20/03/06</p>
    <p class="desc">total ordersumma</p>
    <p class="orderSum">893 kr</p>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
p {
  font-family: "Work Sans", sans-serif;
  color: rgba(255, 255, 255, 0.7);
  padding: 0.2rem;
}
.history {
  transition: background-color 0.7s;
  margin-bottom: 1.2rem;
  width: 70vw;
  display: grid;
  grid-template-areas:
    "a . b"
    "c . d";
  box-shadow: 0 2px 2px -2px gray;

  .number {
    font-weight: bold;
    grid-area: a;
  }

  .orderdate {
    grid-area: b;
    text-align: right;
  }

  .desc {
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.7rem;
    grid-area: c;
  }

  .orderSum {
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.7rem;
    grid-area: d;
    text-align: right;
  }
}
.history:hover {
  background-color: #77645b57;
}
</style>