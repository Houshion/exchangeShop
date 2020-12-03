<template>
  <view>
    <view class="u-flex user-box u-p-l-30 u-p-r-20 u-p-b-30" @click="getInfo">
      <view class="u-m-r-10">
        <u-avatar :src="userInfo.headImg" size="140"></u-avatar>
      </view>
      <view class="u-flex-1">
        <view class="u-font-18 u-p-b-20">{{
          userInfo.nickName || "暂无信息"
        }}</view>
        <view class="u-font-14 u-tips-color" v-show="!userInfo.nickName"
          >点击此处获取</view
        >
      </view>
      <view class="u-m-l-10 u-p-10" v-show="false">
        <u-icon name="scan" color="#969799" size="28"></u-icon>
      </view>
      <view class="u-m-l-10 u-p-10">
        <u-icon name="arrow-right" color="#969799" size="28"></u-icon>
      </view>
    </view>
    <view class="u-m-t-20">
      <slot></slot>
    </view>
    <view class="u-m-t-20">
      <u-cell-group>
        <u-cell-item icon="rmb-circle" title="支付"></u-cell-item>
      </u-cell-group>
    </view>

    <view class="u-m-t-20">
      <u-cell-group>
        <u-cell-item icon="star" title="收藏"></u-cell-item>
        <u-cell-item icon="photo" title="相册"></u-cell-item>
        <u-cell-item icon="coupon" title="卡券"></u-cell-item>
        <u-cell-item icon="heart" title="关注"></u-cell-item>
      </u-cell-group>
    </view>

    <view class="u-m-t-20">
      <u-cell-group>
        <u-cell-item icon="setting" title="设置"></u-cell-item>
      </u-cell-group>
    </view>
  </view>
</template>

<script>
export default {
  name: "person-center",
  props: {
    userInfo: {
      type: Object,
      default: () => {
        return {
          headImg: "",
          nickName: "",
        };
      },
    },
    //   headImg: {
    // 	  type: String,
    // 	  default: "", //require("@/static/noneImg.png")
    //   }
  },
  data() {
    return {
      show: true,
    };
  },
  onLoad() {},
  methods: {
    // 获取或者进入详情
    getInfo() {
      console.log(this.userInfo);
      if (!!!this.userInfo) {
        //个人信息有缺漏
        console.log(123);
        try {
          //已经存储个人信息
          const value = uni.getStorageSync("userInfo");
          if (!value) {
            //未存储个人信息，前往授权
            this.base.goLogin();
          }
        } catch (e) {
          // err
        }
      } else {
        //个人信息齐全，前往设置
        console.log(`个人信息齐全，前往设置`);
      }
    },
  },
};
</script>

<style lang="scss">
page {
  background-color: #ededed;
}

.camera {
  width: 54px;
  height: 44px;

  &:active {
    background-color: #ededed;
  }
}
.user-box {
  background-color: #fff;
}
</style>
