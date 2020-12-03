<template>
  <div class="goods-item">
    <view class="warter box_shadow">
      <!-- 警告：微信小程序中需要hx2.8.11版本才支持在template中结合其他组件，比如下方的lazy-load组件 -->
      <u-lazy-load
        threshold="-450"
        border-radius="10"
        :image="item.image"
        :index="index"
      ></u-lazy-load>
      <view class="good-title over_el_1">
        {{ item.title }}
      </view>
      <view class="desc">
        {{ item.shop }}
      </view>
      <view class="price">￥99.00+100易货币</view>
    </view>
  </div>
</template>

<script>
export default {
  name: "goods-item",
  props: {
    item: {
      type: Object,
    },
    index: {
      type: Number,
    },
  },
  data: () => ({}),
  computed: {},
  methods: {},
  watch: {},

  // 组件周期函数--监听组件挂载完毕
  mounted() {},
  // 组件周期函数--监听组件数据更新之前
  beforeUpdate() {},
  // 组件周期函数--监听组件数据更新之后
  updated() {},
  // 组件周期函数--监听组件激活(显示)
  activated() {},
  // 组件周期函数--监听组件停用(隐藏)
  deactivated() {},
  // 组件周期函数--监听组件销毁之前
  beforeDestroy() {},
};
</script>

<style lang="scss" scoped>
.warter {
  border-radius: 8px;
  margin: 5px;
  background-color: #ffffff;
  padding: 8px;
  position: relative;
}

.goods-image {
  width: 100%;
  border-radius: 4px;
}

.goods-title {
  font-size: 30rpx;
  margin-top: 5px;
  color: $u-main-color;
}


.price {
  font-size: 22rpx;
  color: $u-type-error;
  margin-top: 5px;
}

.desc {
  font-size: 22rpx;
  color: $u-tips-color;
  margin-top: 5px;
}
</style>
