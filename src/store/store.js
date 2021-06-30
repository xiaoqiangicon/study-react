import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    name: 'lee',
  },
  mutations: {
    update(state, payload) {}
  },
  actions: {},
})

export default store;