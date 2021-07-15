<template>
  <div>
    <swiper>
      <swiper-item v-for="item in banners" :key="item.id">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>
<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  name: "homeSwiper",
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    banners: {
      type: Array,
      default() {
        return null;
      }
    }
  },
  created(){
    console.log(this.banners)
  }
};
</script>
<style scoped>
</style>