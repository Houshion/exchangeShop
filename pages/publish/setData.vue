<template>
  <view class="pd_15">
    <view class="classify">
      <view class="label">分类</view>
      <view class="content">
        <u-input
          v-model="classify"
          type="select"
          @click="classifyShow = true"
        />
        <u-select
          confirm-color="#db4a15"
          mode="mutil-column-auto"
          v-model="classifyShow"
          :list="classifyList"
          @confirm="confirmClassfy"
        ></u-select>
      </view>
    </view>
    <view class="tabs">
      <view class="label">分类</view>
      <view class="content flex pd_10">
        <block v-for="(item, index) in tabs" :key="index">
          <view
            @click="chooseTabItem(item)"
            :class="['item', item.selected ? 'select' : '']"
          >
            {{ item.label }}
          </view>
        </block>
      </view>
    </view>
  </view>
</template>

<script>
import classifyData from "@/pages/main/classify/demoClassify";
export default {
  data() {
    return {
      classify: "",
      classifyShow: false,
      classifyList: classifyData,
      tabs: [
        { label: "全新", value: 1, selected: false },
        { label: "新品", value: 2, selected: false },
        { label: "换物", value: 3, selected: false },
        { label: "xxx", value: 4, selected: false },
        { label: "zzz", value: 5, selected: false },
      ],
    };
  },
  methods: {
    confirmClassfy(e) {
      const [c1, c2] = e;
      this.classify = c1.label + "/" + c2.label;
    },
    chooseTabItem(item) {
      item.selected = !item.selected;
    },
  },
};
</script>

<style lang="scss" scoped>
.tabs {
  .item {
    @extend .info-btn;
    @extend .pd_tb_5;
    margin-right: 15upx;
    &.select {
      @extend .main-btn;
    }
  }
}
</style>

