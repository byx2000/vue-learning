<template>
  <div>
    <router-link to="/home">主页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link :to="'/user/' + username">用户</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      username: "byx"
    }
  }
}
</script>
