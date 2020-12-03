<template>
  <view class="msgContent pd_15">
    <block v-for="item in 5" :key="item">
      <view class="messageItem mg_b_15">
        <view class="time tac mg_b_15">5月29 上午11:02</view>
        <view class="contentBox bfff">
          <view class="title">审核消息</view>
          <view class="content pd_15 border_t border_b">
            尊敬的用户，您发布的“iPhone
            X、9成新、京东官网购买，买了新手机这个手机卖掉”——审核已通过
          </view>
          <u-cell-item
            @click="getDetail"
            :border-bottom="false"
            title="详情"
          ></u-cell-item>
        </view>
      </view>
    </block>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    getDetail() {
      console.log("getDetail");
      uni.navigateTo({
        url: "/pages/message/detail",
      });
    },
  },
};
</script>

<style lang="scss">
.msgContent {
  min-height: 100vh;
  background: $uni-bg-color-grey;
  .time {
    color: $uni-text-color-grey;
  }
  .contentBox {
    .title {
      padding: 30upx;
      @extend .font_b;
      @extend .font_18;
      @extend .flex_v_center;
      &:before {
        content: "";
        width: 5px;
        height: 40upx;
        background: $main-color;
        position: absolute;
        margin-left: -30upx;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
      }
    }
    .content {
      color: $uni-text-color-grey;
    }
  }
}
</style>
