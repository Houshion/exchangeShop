<template>
  <view class="pd_15">
    <u-swiper :list="swiperImg"></u-swiper>
    <u-tabs
      :list="tabList"
      active-color="#db4a15"
      :current="current"
      @change="changeTab"
    ></u-tabs>
    <view class="classifyItem">
      <u-row justify="center">
        <block v-for="(item, index) in recommendList" :key="index">
          <u-col span="6">
            <goods-item :item="item" :index="index"></goods-item>
          </u-col>
        </block>
      </u-row>
    </view>
  </view>
</template>

<script>
import goodsItem from "@/components/goodsItem";
export default {
  data() {
    return {
      swiperImg: [
        {
          image: require("@/static/main-icon/ic_spbanner.png"),
        },
        {
          image: require("@/static/main-icon/ic_spbanner.png"),
        },
        {
          image: require("@/static/main-icon/ic_spbanner.png"),
        },
      ],
      tabList: [
        {
          name: "子分类1",
        },
        {
          name: "子分类2",
        },
        {
          name: "子分类3",
        },
        {
          name: "子分类4",
        },
        {
          name: "子分类5",
        },
        {
          name: "子分类6",
        },
        {
          name: "子分类7",
        },
      ],
      current: 0,
      recommendList: [
        {
          price: 35,
          title: "北国风光，千里冰封，万里雪飘",
          shop: "李白杜甫白居易旗舰店",
          image:
            "http://pic.sc.chinaz.com/Files/pic/pic9/202002/zzpic23325_s.jpg",
        },
        {
          price: 75,
          title: "望长城内外，惟余莽莽",
          shop: "李白杜甫白居易旗舰店",
          image:
            "http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg",
        },
        {
          price: 385,
          title: "大河上下，顿失滔滔",
          shop: "李白杜甫白居易旗舰店",
          image:
            "http://pic.sc.chinaz.com/Files/pic/pic9/202002/zzpic23325_s.jpg",
        },
        {
          price: 784,
          title: "欲与天公试比高",
          shop: "李白杜甫白居易旗舰店",
          image:
            "http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg",
        },
      ],
    };
  },
  components: {
	  goodsItem
  }
};
</script>

<style lang="scss">
</style>
