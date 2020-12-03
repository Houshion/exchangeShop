<template>
  <view class="pd_20">
    <view class="title font_b font_19 mg_b_20">这是标题</view>
    <view class="content main-border">
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

<style lang="scss" scoped>
.logo {
  height: 400upx;
  border-bottom: 1px solid;
  image {
    width: 300upx;
    margin: auto;
  }
}
</style>
