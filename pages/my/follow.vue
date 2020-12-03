<template>
  <view>
    <u-swipe-action
      :index="index"
      v-for="(item, index) in list"
      :key="index"
      :btnWidth="btnWidth"
      @click="deleteFollow(item,index)"
      :options="options"
    >
      <goods-list :listItem="item"></goods-list>
    </u-swipe-action>
  </view>
</template>

<script>
import goodsList from "@/components/goodsList";
export default {
  data() {
    return {
      disabled: false,
      btnWidth: 240,
      show: false,
      options: [
        {
          text: "取消关注",
          style: {
            backgroundColor: "#dd524d",
          },
        },
      ],
      list: [
        {
          img: require("@/static/logo.png"),
          name: "CHANEL 炫亮魅力唇膏",
          num: '',
          classify: '',
          price: '22.00',
          coin:'100'
        }
      ]
    };
  },
  components:{
    goodsList
  },
  methods: {
    deleteFollow(item) {
      uni.showModal({
        title: "提示",
        content: "是否取消关注该商品？",
        confirmColor: "#db4a15",
        confirmText: "取消关注",
        cancelText: "我再考虑",
        success: (res)=> {
          if (res.confirm) {
			console.log("用户点击取消关注");
          }
        },
      });
    },
  },
};
</script>

<style lang="scss">
page {
  background: #ededed;
}
.item {
  .img {
    width: 170upx;
    height: 170upx;
  }
  .title-wrap {
    margin-left: 20upx;
    height: 130upx;
  }
}
</style>
