<template>
  <div>
    <navbar class="home-navbar">
      <div slot="center">首页</div>
    </navbar>
  <swiper :banners="banners"></swiper>
  <recommend :recommend="recommend"></recommend>
  </div>
</template>
<script>
import navbar from "components/common/navbar/navbar";
import swiper from "./childComps/homeSwiper";
import recommend from "./childComps/HomeRecommend"
import { getHomeMultidata } from "network/home";
export default {
  name: "home",
  components: {
    navbar,
    swiper,
    recommend
  },
  data() {
    return {
      banners: [],
      recommend: [],
      dKeyword: [],
      keywords: []
    };
  },
  // 创建后
  created() {
    getHomeMultidata().then(res => {
      console.log(res);
      this.banners = res.data.banner.list;
      this.recommend = res.data.recommend.list;
      this.dKeyword = res.data.dKeyword;
      this.keywords = res.data.keywords;
    });
  }
};
</script>
<style scoped>
.home-navbar {
  background-color: var(--color-tint);
  color: #ffffff;
}
</style>