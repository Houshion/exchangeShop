<template>
  <view class="pd_15">
    <view class="label font_b font_18">反馈内容</view>
    <view class="mg_tb_15 pd_15 radius_10 content">
      <u-input
        placeholder="请留下您宝贵的意见和建议"
        v-model="params.value"
        type="textarea"
        height="300"
      />
    </view>
    <view class="uploadImg">
      <u-upload ref="uUpload" :action="action" auto-upload></u-upload>
    </view>
    <view class="wd_80 main-btn pd_tb_10 mg_t_50" @click="submit"
      >立即提交</view
    >
  </view>
</template>

<script>
export default {
  data() {
    return {
      params: {
        value: "",
      },
      action: "http://www.example.com/upload",
    };
  },
  methods: {
    submit() {
      this.base.showToast("提交成功", 2000, "success");
      this.$refs.uUpload.upload();
    },
  },
}
</script>

<style lang="scss">
.content {
  background: $uni-bg-color-grey;
}
</style>