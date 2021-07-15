<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name:'tabbar'
}
</script>
<style scoped>
  #tabbar{
    display:flex;
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
  }
</style>