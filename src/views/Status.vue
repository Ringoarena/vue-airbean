<template>
  <main>
    <div class="orderinfo">
      <p>
        Ordernummer
        <span>{{this.order.orderNumber}}</span>
      </p>
    </div>
    <!-- <img src="@/assets/graphics/drone.svg" alt="En drönare med en kopp riktigt gott kaffe." /> -->
    <img src="@/assets/graphics/drone.svg" alt="En drönare med en kopp riktigt gott kaffe." />
    <h2>Din beställning är på väg!</h2>
    <p class="eta">
      {{this.order.deliveryETA}}
      <span>minuter</span>
    </p>
    <button v-on:click="clickHandler">Ok, cool!</button>
  </main>
</template>

<script>
export default {
  data() {
    return {
      order: {
        //Hämta från store
        deliveryETA: this.eta(),
        orderNumber: "#ABBA002"
      }
    };
  },
  methods: {
    clickHandler() {
      // this.$store.dispatch("openNav");
      this.$router.push({name: 'About'})
    },
    eta() {
      return Math.floor(Math.random() * 60);
    }
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

  /* new shit added by chris */
  min-height: 700px;
}

img,
h2,
button {
  margin: 2rem;
}

h2 {
  font-weight: bold;
  font-family: "PT Serif", serif;
  color: #fff;
}

.orderinfo {
  margin: 1rem;
  p {
    font-family: "Work Sans", sans-serif;
    color: rgba(255, 255, 255, 0.7);
    font-weight: 400;
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

button {
  font-family: "PT Serif", serif;
  font-weight: bold;
  font-size: 1.2rem;
  background-color: white;
  padding: 0.5rem;
  border: none;
  width: 9rem;
  border-radius: 25px;
  transition: background-color 0.3s;
}
button:hover {
  background-color: #aaa;
}
</style>