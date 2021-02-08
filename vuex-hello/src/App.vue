<template>
  <div>
    <counter/>
    <hello-vuex/>
  </div>
</template>

<script>
import Counter from './components/Counter.vue'
import HelloVuex from './components/HelloVuex.vue'
export default {
  name: 'App',
  components: { 
    Counter,
    HelloVuex 
  }
}
</script>