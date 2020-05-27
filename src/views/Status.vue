<template>
  <main>
    <div class="orderinfo">
      <p>
        Ordernummer
        <span>{{this.ordernumber}}</span>
      </p>
    </div>
    <img src="@/assets/graphics/drone.svg" alt="En drönare med en kopp riktigt gott kaffe." />
    <h2>Din beställning är på väg!</h2>
    <p class="eta">
      {{this.eta}}
      <span>minuter</span>
    </p>
    <button>Ok, cool!</button>
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
@import url("https://fonts.googleapis.com/css2?family=PT+Serif:wght@700&display=swap");
main {
  background-color: #e5674e;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
}

h2 {
  font-weight: bold;
  font-family: "PT Serif", serif;
  color: #fff;
}

.orderinfo {
  p {
    font-family: "Work Sans", sans-serif;
    color: rgba(255, 255, 255, 0.7);
    font-weight: 200;
    span {
      font-weight: 600;
    }
  }
}

.eta {
  font-family: "Work Sans", sans-serif;
  color: #fff;
  font-weight: 700;
  span {
    font-weight: 400;
  }
}

button{
    font-family: "PT Serif", serif;
    font-weight: bold;
    font-size: 1.5rem;
    background-color: white;
    padding: 0.7rem;
    border: none;
}
</style>