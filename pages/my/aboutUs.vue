<template>
  <view>
    <view class="logo box">
      <image src="/static/logo.png" mode="widthFix" />
    </view>
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
