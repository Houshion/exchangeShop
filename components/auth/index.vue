<template>
  <view>
    <view v-if="canIUse">
      <view class="header">
        <image :src="logo"></image>
      </view>
      <view class="name">{{ app_name }}</view>
      <view class="content">
        <view>申请获取以下权限</view>
        <text>获得你的公开信息(昵称，头像等)</text>
      </view>
      <button
        class="bottom"
        type="primary"
        open-type="getUserInfo"
        lang="zh_CN"
        @getuserinfo="getAuth"
      >
        授权登录
      </button>
      <button class="bottom" @click="cancel">取消授权</button>
    </view>
    <view v-else>请升级微信版本</view>
  </view>
</template>

<script>
export default {
  name: "auth",
  data() {
    return {
      //判断小程序的API，回调，参数，组件等是否在当前版本可用。
      canIUse: uni.canIUse("button.open-type.getUserInfo"),
      userInfo: [],
      logo: this.$logoUrl,
      appName: this.$appName,
      // loginType: "weixin", //['weixin', 'qq', 'sinaweibo', 'xiaomi', 'apple']
    };
  },
  onLoad(e) {},
  methods: {
    // 授权相关
    getAuth(e) {
      let loginType = "weixin"; // 默认微信授权
      const { iv } = e.detail;
      if (iv) {
        // 获取服务供应商
        uni.getProvider({
          service: "oauth",
          success: (res) => {
            loginType = res.provider[0];
            // 授权登录
            uni.login({
              provider: loginType,
              success(res) {
                // 检查登录状态是否过期
                uni.checkSession({
                  success: (res) => {
                    console.log(`成功了`, res);
                  },
                  fail: (err) => {
                    console.log(`过期了`, err);
                  },
                });
                // 登录成功后, 获取用户数据
                uni.getUserInfo({
                  provider: loginType,
                  success(info) {
                    const userInfo = info.userInfo;
                    console.log(`用户信息`, userInfo);
                    try {
                      uni.setStorageSync("userInfo", userInfo);
                    } catch (e) {
                      // error
                    }
                    let nickName = "";
                    let avatarUrl = "";
                    let openId = "";
                    if (loginType == "weixin") {
                      nickName = userInfo.nickName;
                      avatarUrl = userInfo.avatarUrl;
                      openId = userInfo.openId;
                    } else if (loginType == "qq") {
                      nickName = userInfo.nickname;
                      avatarUrl = userInfo.figureurl_qq_2;
                      // qq返回了多个尺寸的头像, 按需选择
                      openId = userInfo.openId;
                    } else if (loginType == "sinaweibo") {
                      nickName = userInfo.nickname;
                      avatarUrl = userInfo.avatar_large;
                      openId = userInfo.id;
                    }
                    // 授权成功，返回上一页
                    uni.navigateBack();
                  },
                });
              },
            });
          },
        });
      } else {
        wx.showModal({
          title: `温馨提示`,
          content: `您点击了拒绝授权，将无法正常体验小程序，建议授权使用!!!`,
          showCancel: false,
          confirmText: `返回授权`,
          success: (res) => {
            // 用户没有授权成功，不需要改变 isHide 的值
            if (res.confirm) {
              console.log(`用户点击了“返回授权”`);
            }
          },
        });
      }
    },
    cancel() {
      uni.navigateBack();
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  margin: 90upx 0 90upx 50upx;
  border-bottom: 1px solid #ccc;
  text-align: center;
  width: 650upx;
  height: 300upx;
  line-height: 450upx;
  image {
    width: 200upx;
    height: 200upx;
    border-radius: 50%; //logo图标圆角
  }
}

.name {
  position: absolute;
  display: block;
  width: 100%;
  margin-top: -140upx;
  text-align: center;
  font-size: 30upx;
}

.content {
  margin-left: 50upx;
  margin-bottom: 90upx;
  text {
    display: block;
    color: #9d9d9d;
    margin-top: 40upx;
  }
}

.bottom {
  border-radius: 80upx;
  margin: 70upx 50upx;
  font-size: 35upx;
}
</style>
