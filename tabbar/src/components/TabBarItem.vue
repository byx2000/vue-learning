<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="icon"/>
    </div>
    <div v-else>
      <slot name="icon-active"/>
    </div>
    <div :class="{active: isActive}">
      <slot name="text"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  data() {
    return {
      isActive: true
    }
  },
  props: {
    path: String
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path)
    }
  }
}
</script>

<style>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    font-size: 14px;
  }

  .tab-bar-item img {
    margin-top: 3px;
    margin-bottom: 1px;
    width: 24px;
    height: 24px;
    vertical-align: middle;
  }

  .active {
    color: #06a17e;
  }
</style>