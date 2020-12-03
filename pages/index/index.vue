<template>
  <view class="content pd_15">
    <view class="exchange radius_5 bfff">
      <view class="pd_15 po_re flex_v_center">
        <image src="/static/logo.png" mode="widthFix" class="icon" />
        <view class="font_17 font_b mg_l_10">快牛易换</view>
      </view>
      <view class="pd_15">
        <view class="main-msg-bg pd_lr_15 pd_tb_10 radius_5"
          >让闲置变得更有用!</view
        >
      </view>
      <view class="main-bgl pd_15 lh_2">
        <view>以您所有(闲置的物品)</view>
        <view>换您所需(有用的物品)</view>
      </view>
    </view>
    <view class="recycle radius_5 bfff mg_t_15">
      <view class="pd_15 po_re flex_v_center">
        <image src="/static/logo.png" mode="widthFix" class="icon" />
        <view class="font_17 font_b mg_l_10">快牛回收</view>
      </view>
      <view class="pd_15">
        <view class="minor-msg-bg pd_lr_15 pd_tb_10 radius_5"
          >让闲置变得更有用!</view
        >
      </view>
      <view class="minor-bgl pd_15 lh_2">
        <view>以您所有(闲置的物品)</view>
        <view>换您所需(有用的物品)</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  onLoad() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.content {
  min-height: 100vh;
  background: #f5f5f5;
}
.icon {
  width: 50upx;
}
</style>
