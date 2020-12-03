<template>
  <div>
    <view class="item pd_15">
      <view class="u-body-item u-flex u-col-between u-p-t-0">
        <image class="img" :src="listItem.img" mode="aspectFill" />
        <!-- 此层wrap在此为必写的，否则可能会出现标题定位错误 -->
        <view class="title-wrap flex_v_between">
          <view class="wd_100 font_16 flex_between">
            <view>{{ listItem.name }}</view>
            <view class="grey" v-show="listItem.num">{{
              `x${listItem.num}`
            }}</view>
          </view>
          <view class="wd_100 grey">{{ listItem.classify }}</view>
          <view class="wd_100 error">{{
            `￥${listItem.price}+${listItem.coin} 易货币`
          }}</view>
        </view>
      </view>
    </view>
  </div>
</template>
<script>
export default {
  name: "goodsList",
  props: {
    listItem: {
      type: Object,
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.item {
  .img {
    width: 170upx;
    height: 170upx;
  }
  .title-wrap {
    margin-left: 20upx;
    height: 150upx;
  }
}
</style>