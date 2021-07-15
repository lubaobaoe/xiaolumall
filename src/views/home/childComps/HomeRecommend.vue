<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommend" :key="item.id">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name:'HomeRecommend',
  props:{
    recommend:{
      type:Array,
      default:{
        return: []
      }
    }
  }
}
</script>
<style scoped>
.recommend{
  display: flex;
  width: 100%;
  text-align: center;
  padding: 15px 0 30px 0;
  border-bottom:10px solid#e9ebec;
}
.recommend-item{
  flex: 1;
}
.recommend-item img{
  width: 65px;
  height: 65px;
}
</style>