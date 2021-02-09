<template>
  <div>
    <h1>Counter</h1>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <button @click="addBy(5)">+5</button>
    <button @click="async">异步操作</button>
    <p>counter: {{count}}</p>
  </div>
</template>

<script>
import { DECREMENT, INCREMENT, INCREMENT_BY } from '../store/mutations-types'

export default {
  name: 'Counter',
  methods: {
    add() {
      this.$store.commit(INCREMENT)
    },
    sub() {
      this.$store.commit(DECREMENT)
    },
    addBy(count) {
      this.$store.commit(INCREMENT_BY, count);
    },
    async() {
      this.$store.dispatch(INCREMENT, '携带的信息')
      .then(res => {
        console.log('result: ', res)
      })
    }
  },
  computed: {
    count() {
    return this.$store.state.count
    }
  }
}
</script>