<template>
  <view>
    <u-tabs
      :list="tabList"
      active-color="#db4a15"
      :current="current"
      @change="changeTab"
    ></u-tabs>
    <view class="publish pd_15">
      <block v-for="(item, index) in list" :key="index">
        <view class="cardList">
          <view class="pd_15 flex_between border_b">
            <view class="label">服务单号：20129384903</view>
            <view
              class="status"
              :class="
                item.status == 1
                  ? 'main-color'
                  : item.status == 2
                  ? 'success'
                  : item.status == 3
                  ? 'primary'
                  : item.status == 4
                  ? 'grey'
                  : item.status == 5
                  ? 'error'
                  : 'grey'
              "
              >{{
                item.status == 1
                  ? "等待审核"
                  : item.status == 2
                  ? "审核通过"
                  : item.status == 3
                  ? "已上架"
                  : item.status == 4
                  ? "已被兑换"
                  : item.status == 5
                  ? "审核失败"
                  : "已取消"
              }}</view
            >
          </view>
          <goods-list :listItem="item"></goods-list>
        </view>
      </block>
    </view>
  </view>
</template>

<script>
import goodsList from "@/components/goodsList";
export default {
  data() {
    return {
      tabList: [
        {
          name: "全部",
        },
        {
          name: "等待审核",
        },
        {
          name: "审核通过",
        },
        {
          name: "已上架",
        },
        {
          name: "已被兑换",
        },
        {
          name: "审核失败",
        },
        {
          name: "已取消",
        },
      ],
      current: 0,
      list: [
        {
          img: require("@/static/logo.png"),
          name: "CHANEL 炫亮魅力唇膏",
          num: "2",
          price: "22.00",
          coin: "100",
          status: 1,
        },
        {
          img: require("@/static/logo.png"),
          name: "CHANEL 炫亮魅力唇膏",
          num: "2",
          price: "22.00",
          coin: "100",
          status: 2,
        },
        {
          img: require("@/static/logo.png"),
          name: "CHANEL 炫亮魅力唇膏",
          num: "2",
          price: "22.00",
          coin: "100",
          status: 3,
        },
        {
          img: require("@/static/logo.png"),
          name: "CHANEL 炫亮魅力唇膏",
          num: "2",
          price: "22.00",
          coin: "100",
          status: 4,
        },
        {
          img: require("@/static/logo.png"),
          name: "CHANEL 炫亮魅力唇膏",
          num: "2",
          price: "22.00",
          coin: "100",
          status: 5,
        },
        {
          img: require("@/static/logo.png"),
          name: "CHANEL 炫亮魅力唇膏",
          num: "2",
          price: "22.00",
          coin: "100",
          status: 6,
        },
      ],
    };
  },
  components: {
    goodsList,
  },
  methods: {
    changeTab(e) {
      console.log(e);
      this.current = e;
    },
  },
};
</script>

<style lang="scss">
.publish {
  background: #ededed;
  min-height: 100vh;
  .cardList {
    background: #ffffff;
    border-radius: 10px;
    margin-bottom: 30upx;
  }
}
</style>
