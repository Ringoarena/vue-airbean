<template>
  <main class="profile">
    <RegisterProfile v-if="!computedUser" />
    <figure v-if="computedUser">
      <img src="@/assets/graphics/eva-cortado.jpg" alt="Profilbild" />
      <h3>{{computedUser.name}}</h3>
      <p>{{computedUser.email}}</p>
      <p>User id: {{computedUser.id}}</p>
    </figure>
    <div class="orderHistory" v-if="computedUser">
      <h3>Orderhistorik</h3>
      <OrderHistory />
      <OrderHistory />
      <p>
        Totalt spenderat:
        <span>1331</span> kr
      </p>
    </div>
  </main>
</template>

<script>
import OrderHistory from "@/components/OrderHistory.vue";
import RegisterProfile from "@/components/RegisterProfile.vue";

export default {
  components: {
    OrderHistory,
    RegisterProfile
  },

  data() {
    return {
      newUser: {}
    };
  },

  computed: {
    computedUser() {
      return this.$store.state.user;
    }
  },

  updated: {
    computedUser() {}
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
    span {
      text-align: right;
    }
  }
}

.orderHistory {
  background-color: #2f2926;
  padding: 1.2rem;
  margin-bottom: 1.2rem;
  width: 100%;
}

figure {
  img {
    border-radius: 50%;
  }
}
</style>