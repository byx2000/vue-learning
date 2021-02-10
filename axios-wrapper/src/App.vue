<template>
  <div>
    {{data}}
  </div>
</template>

<script>
import request from './network/request'

export default {
  name: 'App',
  created() {
    console.log("create")
    request({
      url: '/home/multidata'
    }).then(res => {
      this.data = res
    })
  },
  data() {
    return {
      data: 'hello'
    }
  }
}
</script>
