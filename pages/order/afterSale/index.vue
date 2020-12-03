<template>
  <view class="afterSalePage pd_15">
    <block v-for="(item, index) in list" :key="index">
      <view class="cardList">
        <view class="pd_15 flex_between border_b">
          <view class="label">服务单号：20129384903</view>
          <view class="status">申请中</view>
        </view>
        <goods-list :listItem="item"></goods-list>
        <view class="applyTime border_t pd_15 grey">
          申请时间：2020-11-11 11:11:11
        </view>
      </view>
    </block>
  </view>
</template>

<script>
import goodsList from "@/components/goodsList";
export default {
  data() {
    return {
      list: [
        {
          img: require("@/static/logo.png"),
          name: "CHANEL 炫亮魅力唇膏",
          num: "2",
          classify: "分类",
          price: "22.00",
          coin: "100",
        },
        {
          img: require("@/static/logo.png"),
          name: "CHANEL 炫亮魅力唇膏",
          num: "2",
          classify: "分类",
          price: "22.00",
          coin: "100",
        },
        {
          img: require("@/static/logo.png"),
          name: "CHANEL 炫亮魅力唇膏",
          num: "2",
          classify: "分类",
          price: "22.00",
          coin: "100",
        },
      ],
    };
  },
  components: {
    goodsList,
  },
};
</script>

<style lang="scss">
.afterSalePage {
  background: #ededed;
  min-height: 100vh;
  .cardList {
    background: #ffffff;
    border-radius: 10px;
    margin-bottom: 30upx;
  }
}
</style>
