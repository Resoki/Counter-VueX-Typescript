import { createStore } from 'vuex'

export default createStore({
  state: {
    counter: 0
  },
  mutations: {
    increment_counter(state) {
      state.counter += 1
      console.log(state.counter)

    },
    reset_counter(state) {
      state.counter = 0
    },
    add_ten(state) {
      state.counter +=10
    }
  },
  actions: {
    incrementCounter({commit}, counter):void{
      commit('increment_counter', counter)
    },
    resetCounter({commit}, counter):void{
      commit('reset_counter', counter)
    },
    addTen({commit}, counter):void{
      commit('add_ten', counter)
    }
  },
  getters: {
    getCounter : (state) => state.counter
  },
  modules: {
  }
})
