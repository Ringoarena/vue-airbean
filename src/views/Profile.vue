<template>
  <main>
    <RegisterProfile v-if="!computedUser" />
    <figure v-if="computedUser">
      <img src="@/assets/graphics/eva-cortado.jpg" alt="Profilbild" />
      <h3>{{computedUser.name}}</h3>
      <p>{{computedUser.email}}</p>
      <p>User id: {{computedUser.id}}</p>
    </figure>
    <div class="orderHistory" v-if="computedUser">
      <h3 @click="refresh()">Orderhistorik</h3>
      <OrderHistory v-for="order in computedUser.orders" :key="order.id" :order="order" />
      <p>
        Totalt spenderat:
        <span>{{userOrdersTotalSum}}</span> kr
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
  computed: {
    computedUser() {
      return this.$store.state.user;
    },
    userOrdersTotalSum() {
      return this.$store.getters.userOrdersTotalSum;
    }
  },
<<<<<<< HEAD

  updated: {
  },

=======
>>>>>>> d0bb48fb7b5899f16aabe3d42a6f8145766b29a5
  methods: {
    refresh() {
      this.$store.dispatch('getUserOrders');
    }
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=PT+Serif:wght@700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Work+Sans&display=swap");

main {
  min-height: 400px;
}

main,
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