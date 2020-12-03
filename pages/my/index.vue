<template>
  <view class="pd_20">
    <image mode="widthFix" class="bg" src="/static/my-icon/ic_bg.png" />
    <view class="u-flex user-box u-p-b-30" @click="getInfo">
      <view class="u-m-r-10">
        <u-avatar
          :src="userInfo.headImg || userInfo.avatarUrl"
          size="140"
        ></u-avatar>
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
    <view class="my">
      <u-row class="wd_100">
        <u-col span="4" v-for="(item, index) in myList" :key="index">
          <navigator :url="item.url" class="flex_center" open-type="navigate">
            <view class="icon wd_100">
              <image mode="widthFix" :src="item.icon" />
            </view>
            <view class="wd_100 mg_t_10 tac grey">{{ item.label }}</view>
          </navigator>
        </u-col>
      </u-row>
    </view>
    <view class="changeOrder">
      <view class="font_b font_18 pd_lr_15 mg_b_15">兑换订单</view>
      <view class="flex_between">
        <block v-for="(item, index) in changeList" :key="index">
          <navigator
            :url="item.url"
            class="flex_center wd_20"
            open-type="navigate"
          >
            <view class="icon wd_100">
              <image mode="heightFix" :src="item.icon" />
            </view>
            <view class="wd_100 mg_t_10 tac grey">{{ item.label }}</view>
          </navigator>
        </block>
      </view>
    </view>
    <view class="service">
      <view class="font_b font_18 pd_lr_15 mg_b_15">更多服务</view>
      <u-row class="wd_100">
        <u-col span="4" v-for="(item, index) in serviceList" :key="index">
          <view
            @click="goService(item)"
            class="flex_center"
            open-type="navigate"
          >
            <view class="icon wd_100">
              <image mode="widthFix" :src="item.icon" />
            </view>
            <view class="wd_100 mg_t_10 tac grey">{{ item.label }}</view>
          </view>
        </u-col>
      </u-row>
    </view>
  </view>
</template>

<script>
export default {
  name: "person-center",
  data() {
    return {
      show: true,
      userInfo: {},
      myList: [
        {
          icon: require(`@/static/my-icon/ic_1.png`),
          label: "我的发布",
          url: "/pages/my/myPublish/index",
        },
        {
          icon: require(`@/static/my-icon/ic_2.png`),
          label: "我的积分",
          url: "/pages/my/integral/index",
        },
        {
          icon: require(`@/static/my-icon/ic_3.png`),
          label: "我的关注",
          url: "/pages/my/follow",
        },
      ],
      changeList: [
        {
          icon: require(`@/static/my-icon/ic_order_1.png`),
          label: "我的兑换",
          url: "",
        },
        {
          icon: require(`@/static/my-icon/ic_order_2.png`),
          label: "待付款",
          url: "",
        },
        {
          icon: require(`@/static/my-icon/ic_order_3.png`),
          label: "待收货",
          url: "",
        },
        {
          icon: require(`@/static/my-icon/ic_order_4.png`),
          label: "待评价",
          url: "",
        },
        {
          icon: require(`@/static/my-icon/ic_order_5.png`),
          label: "售后服务",
          url: "",
        },
      ],
      serviceList: [
        {
          icon: require(`@/static/my-icon/ic_service_1.png`),
          label: "FAQ",
          url: "/pages/my/question/question",
        },
        {
          icon: require(`@/static/my-icon/ic_service_2.png`),
          label: "客服热线",
          url: "none",
          value: "400-820-8820",
        },
        {
          icon: require(`@/static/my-icon/ic_service_3.png`),
          label: "关于我们",
          url: "/pages/my/aboutUs",
        },
      ],
    };
  },
  onLoad() {},
  onShow() {
    try {
      //已经存储个人信息
      const userInfo = uni.getStorageSync("userInfo");
      if (!userInfo) {
        //未存储个人信息，前往授权
        this.base.goLogin();
      } else {
        this.userInfo = userInfo;
      }
    } catch (e) {
      // err
    }
  },
  methods: {
    // 获取或者进入详情
    getInfo() {
      console.log(this.userInfo);
      if (!this.userInfo) {
        //未存储个人信息，前往授权
        this.base.goLogin();
      } else {
        //个人信息齐全，前往设置
        console.log(`个人信息齐全，前往设置`);
        uni.navigateTo({
          url: `/pages/my/info`,
        });
      }
    },
    goService(item) {
      if (item.url == "none") {
        //当url为none时，拨打服务电话
        uni.showModal({
          title: "客服热线",
          content: item.value,
          confirmColor: "#db4a15",
          confirmText: "拨打",
          success: function (res) {
            if (res.confirm) {
              uni.makePhoneCall({
                phoneNumber: item.value, //仅为示例
              });
            } else if (res.cancel) {
              console.log("用户点击取消");
            }
          },
        });
      }else{
        uni.navigateTo({
          url: item.url,
        });
      }
    },
  },
};
</script>

<style lang="scss">
.bg {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: -1;
  max-height: 100vh;
}

.my {
  background: #ffffff;
  border-radius: 10px;
  padding: 30upx 0;
  margin-bottom: 30upx;
  .icon {
    width: 45upx;
    height: 45upx;
    image {
      width: 45upx;
    }
  }
}
.changeOrder {
  @extend .my;
  padding: 30upx 10upx;
  .icon {
    width: 50upx;
    height: 50upx;
  }
  image {
    height: 50upx;
  }
}
.service {
  @extend .my;
}
</style>
