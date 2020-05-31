import Vue from 'vue'
import Vuex from 'vuex'
import * as API from '@/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menuIsOpen: false,
    cartIsOpen: false,
    products: [
      { id: 1, title: 'Cappucino', description: 'Coffee with foamed milk', price: '55' },
      { id: 2, title: 'Latte', description: 'Coffee with milk', price: '55' },
      { id: 3, title: 'Espresso', description: 'Coffee without milk', price: '55' }
    ],
    cart: [],
    orderNumber: '#OAR003B',
    user: null,
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

    setCurrentUser: (state, user) => {
      state.user = user;
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

    getCurrentUser: (context, user) => {
      context.commit('setCurrentUser', user);
    }
  },
  modules: {
  }
})
