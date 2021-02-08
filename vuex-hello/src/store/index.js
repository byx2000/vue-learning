import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 1000,
    students: [
      {id: 1001, name: 'XiaoMing', age: 19},
      {id: 1002, name: 'XiaoHong', age: 21},
      {id: 1003, name: 'XiaoHua', age: 20}
    ]
  },
  getters: {
    luckyStudents(state) {
      return state.students.filter(s => s.age >= 20)
    },
    studentsOlderThan(state) {
      return age => state.students.filter(s => s.age >= age)
    }
  },
  mutations: {
    increment(state) {
      state.count++
    },
    decrement(state) {
      state.count--;
    }
  },
  actions: {
  },
  modules: {
  }
})
