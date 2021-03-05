<template>
  <div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">首页推荐</el-menu-item>
      <el-menu-item index="2">分类浏览</el-menu-item>
      <el-menu-item index="3">排行榜</el-menu-item>
      <el-menu-item index="4">关于</el-menu-item>
      <el-submenu index="5">
        <template slot="title">用户</template>
        <el-menu-item index="2-1">我的信息</el-menu-item>
        <el-menu-item index="2-2">注销</el-menu-item>
      </el-submenu>
    </el-menu>

    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in 6" :key="item">
        <h3 class="medium">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>

    <el-tabs v-model="activeName" @tab-click="handleClick" type="card" :stretch="true">
      <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
      <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>

    <p>
      你好
    </p>
  </div>
</template>

<script>
export default {
    data() {
      return {
        activeIndex: '1',
        activeName: 'second'
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key)
      },
      handleClick(tab, event) {
        console.log(tab, event)
      }
    }
  }
</script>

<style scoped>
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
