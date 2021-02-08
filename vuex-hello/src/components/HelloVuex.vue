<template>
  <div>
    <h2>HelloVuex</h2>
    <p>{{count}}</p>
    <p>{{$store.getters.luckyStudents}}</p>
    <p>{{$store.getters.studentsOlderThan(21)}}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloVuex',
  computed: {
    count() {
      return this.$store.state.count
    }
  }
}
</script>