<template>
  <view class="pd_15">
    <view class="label font_b font_20">审核通知</view>
    <view class="time">2020-12-12</view>
    <view class="content">
      <u-parse :html="content"></u-parse>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      content: `
		<p>露从今夜白，月是故乡明</p>
		<img src="https://cdn.uviewui.com/uview/swiper/2.jpg" />
	  `,
    };
  },
};
</script>

<style lang="scss">
.time {
  color: $uni-text-color-grey;
  margin: 15upx 0;
}
</style>
