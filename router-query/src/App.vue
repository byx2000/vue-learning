<template>
  <div id="app">
    <router-link to="/home">主页</router-link>
    <router-link :to="{path: '/profile', query: {username: 'byx', message: '你好'}}">用户</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>