<template>
  <view>
    <view class="classify">
      <view class="label">分类</view>
      <view class="content">
        <u-input
          v-model="classify"
          type="select"
          @click="classifyShow = true"
        />
        <u-select
          mode="mutil-column-auto"
          v-model="classifyShow"
          :list="classifyList"
        ></u-select>
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
	  
    };
  },
};
</script>

<style lang="scss">
</style>

