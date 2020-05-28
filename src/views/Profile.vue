<template>
  <main class="profile">
    <figure>
      <img src="@/assets/graphics/eva-cortado.jpg" alt="Profilbild" />
      <h3>Förnamn Efternamn</h3>
      <p>epost@example.com</p>
    </figure>
    <div class="orderHistory">
      <h3>Orderhistorik</h3>
      <OrderHistory />
      <OrderHistory />
    </div>
  </main>
</template>

<script>
import OrderHistory from "@/components/OrderHistory.vue";
export default {
  components: {
    OrderHistory
  },
  props: {},

  computed: {
    computedUser() {
      return this.$store.state.user;
    }
  },

  methods: {
    getUser() {}
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=PT+Serif:wght@700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Work+Sans&display=swap");

main.profile,
figure {
  padding: 1.2rem;
  color: #fff;
  background-color: #2f2926;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    font-family: "PT Serif", serif;
    margin-bottom: 1.2rem;
  }

  p {
    font-family: "Work Sans", sans-serif;
  }
}

.orderHistory {
  background-color: #2f2926;
  padding: 1.2rem;
}

figure {
  img {
    border-radius: 50%;
  }
}
</style>