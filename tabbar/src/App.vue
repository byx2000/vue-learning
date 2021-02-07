<template>
  <div>
    <router-view/>
    <tab-bar>
      <tab-bar-item path="/home">
        <img slot="icon" src="./assets/img/home.svg"/>
        <img slot="icon-active" src="./assets/img/home-active.svg"/>
        <div slot="text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img slot="icon" src="./assets/img/category.svg"/>
        <img slot="icon-active" src="./assets/img/category-active.svg"/>
        <div slot="text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/shopping">
        <img slot="icon" src="./assets/img/shopping.svg"/>
        <img slot="icon-active" src="./assets/img/shopping-active.svg"/>
        <div slot="text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot="icon" src="./assets/img/profile.svg"/>
        <img slot="icon-active" src="./assets/img/profile-active.svg"/>
        <div slot="text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from './components/TabBar.vue'
import TabBarItem from './components/TabBarItem.vue'

export default {
  name: 'App',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>
  @import './assets/css/base.css'
</style>
