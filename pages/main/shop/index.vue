<template>
  <view class="pd_tb_15 pd_lr_5 bfff">
    <u-row gutter="16" justify="center">
      <block v-for="item in iconList" :key="item.label">
        <u-col span="3" text-align="center">
          <image class="icon mg_auto" :src="item.icon" mode="widthFix" />
          <view>{{ item.label }} </view>
        </u-col>
      </block>
    </u-row>
    <view class="recommend mg_t_10">
      <view class="label pd_5 font_b font_15">
        <image
          class="labelIcon"
          src="/static/main-icon/ic_y.png"
          mode="widthFix"
        />
        快牛好物推荐
      </view>
      <u-row justify="center">
        <block v-for="(item, index) in recommendList" :key="index">
          <u-col span="6">
            <goods-item :item="item" :index="index"></goods-item>
          </u-col>
        </block>
      </u-row>
    </view>
    <view class="guess mg_t_10">
      <view class="label pd_5 font_b font_15">
        <image
          class="labelIcon"
          src="/static/main-icon/ic_y.png"
          mode="widthFix"
        />
        猜你喜欢
      </view>
      <waterfall />
    </view>
  </view>
</template>

<script>
import waterfall from "@/components/waterfall";
import goodsItem from "@/components/goodsItem";
export default {
  name: "shop",
  data() {
    return {
      iconList: [
        {
          icon: require("@/static/main-icon/ic_pinp.png"),
          label: "品牌",
          url: "",
        },
        {
          icon: require("@/static/main-icon/ic_shangy.png"),
          label: "上衣",
          url: "",
        },
        {
          icon: require("@/static/main-icon/ic_kuz.png"),
          label: "裤子",
          url: "",
        },
        {
          icon: require("@/static/main-icon/ic_qzi.png"),
          label: "裙子",
          url: "",
        },
        {
          icon: require("@/static/main-icon/ic_xiew.png"),
          label: "鞋袜",
          url: "",
        },
        {
          icon: require("@/static/main-icon/ic_caiz.png"),
          label: "彩妆",
          url: "",
        },
        {
          icon: require("@/static/main-icon/ic_hufu.png"),
          label: "护肤",
          url: "",
        },
        {
          icon: require("@/static/main-icon/ic_gengd.png"),
          label: "更多",
          url: "",
        },
      ],
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
    waterfall,
    goodsItem,
  },
  methods: {},
};
</script>

<style lang="scss">
.icon {
  width: 100upx;
}
.labelIcon {
  width: 25upx;
  margin-right: 10upx;
}
</style>
