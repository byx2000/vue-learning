<template>
    <div>
        <h2>主页</h2>
        <p>主页内容</p>
        <router-link to="/home/news">新闻</router-link>
        <router-link to="/home/message">消息</router-link>
        <router-view/>
    </div>
</template>

<script>
export default {
    name: 'Home'
}
</script>