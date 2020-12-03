<template>
  <view>
    <view class="top main-bg pd_15">
      <u-tabs
        :list="tabList"
        bg-color="#db4a15"
        inactive-color="#dedede"
        active-color="#ffffff"
        :current="current"
        @change="changeTab"
        :is-scroll="false"
      ></u-tabs>
      <u-search
        class="searchBox"
        :show-action="false"
        v-model="searchKey"
      ></u-search>
    </view>
    <template v-if="current == 0">
      <join />
    </template>
    <template v-if="current == 1">
      <shop />
    </template>
    <template v-if="current == 2">
      <join />
    </template>
  </view>
</template>

<script>
import join from "@/pages/main/join";
import shop from "@/pages/main/shop/index";
export default {
  data() {
    return {
      tabList: [
        {
          name: "招商",
        },
        {
          name: "首页",
        },
        {
          name: "东莞",
        },
      ],
      current: 1,
      searchKey: "",
    };
  },
  components: {
    join,shop
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
.searchBox {
  width: 80%;
  margin: 30upx auto 0 !important;
}
</style>
