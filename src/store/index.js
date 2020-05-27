import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menuIsOpen: false,
    menuItems: [
      {id: 1, title: 'Cappucino', description: 'Coffee with foamed milk', price: '55'},
      {id: 2, title: 'Latte', description: 'Coffee with milk', price: '55'},
      {id: 3, title: 'Espresso', description: 'Coffee without milk', price: '55'}
    ],
    cart: []
  },
  mutations: {
    openNav: (state) => {
      state.menuIsOpen = true;
    },
    closeNav: (state) => {
      state.menuIsOpen = false;
    },
    setMenuItems: (state, payload) => {
      state.setMenuItems = payload;
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
    fetchProducts: (context) => {
      //fetch prodructs
      //context.commit('setMenuItems', products);
      console.log(context);
    }
  },
  modules: {
  }
})
