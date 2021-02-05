<template>
  <div>
    <h2>用户</h2>
    <p>欢迎您：{{username}}</p>
  </div>
</template>

<script>
  export default {
    name: 'User',
    computed: {
        username() {
            return this.$route.params.username
        }
    }
  }
</script>