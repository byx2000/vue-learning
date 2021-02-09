import Vue from 'vue'
import Vuex from 'vuex'
import { DECREMENT, INCREMENT, INCREMENT_BY } from './mutations-types'

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
    [INCREMENT](state) {
      state.count++
    },
    [DECREMENT](state) {
      state.count--;
    },
    [INCREMENT_BY](state, count) {
      state.count += count
    }
  },
  actions: {
    [INCREMENT](context, payload) {
      return new Promise(resolve => {
        setTimeout(() => {
          context.commit(INCREMENT)
          console.log('payload: ', payload)
          resolve('处理结果')
        }, 1000)
      })
    }
  },
  modules: {
  }
})
