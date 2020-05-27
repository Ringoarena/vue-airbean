import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menuIsOpen: false,
  },
  mutations: {
    openNav: (state) => {
      state.menuIsOpen = true;
    },
    closeNav: (state) => {
      state.menuIsOpen = false;
    }
  },
  actions: {
    openNav: (context) => {
      context.commit("openNav");
    },
    closeNav: (context) => {
      context.commit("closeNav");
    }
  },
  modules: {
  }
})
