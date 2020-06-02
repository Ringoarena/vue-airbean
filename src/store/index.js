import Vue from 'vue'
import Vuex from 'vuex'
import * as API from '@/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menuIsOpen: false,
    cartIsOpen: false,
    products: [],
    cart: [],
    user: null,
    userOrders: []
  },

  getters: {
    getCartLength: (state) => {
      return state.cart.length
    },
    getCartTotalPrice: (state) => {
      let total = 0;
      state.cart.forEach(item => {
        total += item.product.price * item.quantity;
      });
      return total;
    },
    userOrdersTotalSum: (state) => {
      let total = 0;
      if (state.userOrders) {
        state.userOrders.forEach(order => {
          total += order.orderTotalSum.totalSum;
        });
      }
      return total;
    }
  },

  mutations: {
    openNav: (state) => {
      state.menuIsOpen = true;
    },

    closeNav: (state) => {
      state.menuIsOpen = false;
    },
    openCart: (state) => {
      state.cartIsOpen = true;
    },
    closeCart: (state) => {
      state.cartIsOpen = false;
    },

    setProducts: (state, payload) => {
      state.products = payload;
    },

    addToCart: (state, payload) => {
      let productInCart = state.cart.find(item => {
        return item.product.id === payload.product.id;
      });
      if (productInCart) {
        productInCart.quantity += 1;
      } else {
        payload.quantity = 1;
        state.cart.push(payload);
      }
    },

    reduceQuantity: (state, cartItem) => {
      cartItem.quantity -= 1;
      if (cartItem.quantity === 0) {
        state.cart = state.cart.filter(item => {
          return item.product.id != cartItem.product.id;
        })
      }
    },
    clearCart: (state) => {
      state.cart = []
    },

    setUser: (state, payload) => {
      state.user = payload;
    },

    setUserOrders: (state, orders) => {
      state.userOrders = orders;
    }
  },

  actions: {
    openNav: (context) => {
      context.commit("openNav");
    },

    closeNav: (context) => {
      context.commit("closeNav");
    },
    openCart: (context) => {
      context.commit("openCart");
    },
    closeCart: (context) => {
      context.commit("closeCart");
    },

    addToCart: (context, payload) => {
      context.commit('addToCart', payload);
    },

    reduceQuantity: (context, payload) => {
      context.commit('reduceQuantity', payload)
    },

    clearCart: (context) => {
      context.commit('clearCart')
    },

    async getProducts(context) {
      const data = await API.fetchProducts();
      context.commit('setProducts', data);
    },

    async createUser(context, user) {
      const createdUser = await API.createUser(user)
      context.commit('setUser', createdUser);
    },

    async submitOrder(context) {
      const createdOrder = await API.createOrder({"orderTotalSum": context.getters.getCartTotalPrice});
      console.log('created order: ' + createdOrder);
      if (context.state.user) {
        let updatedUser = await API.updateUser({user: context.state.user, order: createdOrder });
        console.log('Updated user:');
        console.log(updatedUser);
      }
    },

    async getUserOrders(context) {
      if (context.state.user) {
        let userOrders = await API.fetchUserOrders(context.state.user);
        context.commit('setUserOrders', userOrders);
      }
    }
  },
  modules: {
  }
})
