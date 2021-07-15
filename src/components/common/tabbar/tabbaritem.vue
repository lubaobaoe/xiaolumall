<template>
  <div class="tabbaritem" @click="clickItem">
    <div v-if="!istrue">
      <slot name="slot-icon"></slot>
    </div>
    <div v-else>
      <slot name="slot-icon-avtive"></slot>
    </div>
    <div :style="isstyle">
      <slot name="slot-text"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "tabbaritem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red"
    }
  },
  computed:{
    istrue(){
      // console.log(this.$route.path.indexOf(this.path) !== -1)
      return this.$route.path.indexOf(this.path) !== -1
    },
    isstyle(){
      return this.istrue ?{color:this.activeColor} : {}
    }
  },
  methods: {
    clickItem() {
      this.$router.replace(this.path);
    }
  }
};
</script>
<style scoped>
.tabbaritem {
  flex: 1;
  height: 49px;
  text-align: center;
}
.tabbaritem img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
}
</style>