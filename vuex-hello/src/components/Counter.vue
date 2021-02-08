<template>
  <div>
    <h1>Counter</h1>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <p>counter: {{count}}</p>
  </div>
</template>

<script>
export default {
  name: 'Counter',
  methods: {
    add() {
      this.$store.commit("increment")
    },
    sub() {
      this.$store.commit("decrement")
    }
  },
  computed: {
    count() {
    return this.$store.state.count
    }
  }
}
</script>