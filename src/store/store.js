import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    name: 'lee',
    count: 0,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    // 在大多数情况下，载荷应该是一个对象，这样可以包含多个字段并且记录的mutation更易读
    update(state, payload) {
      state.name = payload.name;
    }
    // 提交commit的两种方式
    // store.commit('update', { name: 'john' })
    // store.commit({
    //  type: 'update',
    //  name: 'john',
    // })
  },
  actions: {
    // action函数接受一个和store实例具有相同方法和属性的context对象，
    // 因此可以调用context.commit提交一个mutation或者context.state获取state.
    // 但是不是store实例本身
    increment(context) {
      const { commit } = context;
      commit('increment');
    }

    // 分发action
    // store.dispatch('increment');
  },
})

export default store;