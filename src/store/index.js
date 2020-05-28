import Vue from 'vue'
import Vuex from 'vuex'
import * as API from '@/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menuIsOpen: false,
    products: [
      {id: 1, title: 'Cappucino', description: 'Coffee with foamed milk', price: '55'},
      {id: 2, title: 'Latte', description: 'Coffee with milk', price: '55'},
      {id: 3, title: 'Espresso', description: 'Coffee without milk', price: '55'}
    ],
    cart: [],
    orderNumber: '#OAR003B'
  },
  mutations: {
    openNav: (state) => {
      state.menuIsOpen = true;
    },
    closeNav: (state) => {
      state.menuIsOpen = false;
    },
    setProducts: (state, payload) => {
      state.products = payload;
    },
    addToCart: (state, payload) => {
      state.cart.push(payload);
    }
  },
  actions: {
    openNav: (context) => {
      context.commit("openNav");
    },
    closeNav: (context) => {
      context.commit("closeNav");
    },
    addToCart: (context, payload) => {
      context.commit('addToCart', payload);
    },
    async getProducts(context) {
      const data = await API.fetchProducts();
      context.commit('setProducts', data);
    }
  },
  modules: {
  }
})
