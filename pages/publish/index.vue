<template>
  <view class="pd_15">
    <view class="label font_b font_18">商品资料</view>
    <view class="mg_tb_15 pd_15 radius_10 content">
      <u-input
        placeholder="商品名称、品牌、型号、新旧程度、入手渠道、转手原因"
        v-model="params.value"
        type="textarea"
        height="300"
      />
    </view>
    <view class="uploadImg">
      <u-upload ref="uUpload" :action="action" auto-upload></u-upload>
    </view>
    <view class="label font_b font_18">商品详情</view>
    <view class="mg_tb_15 pd_15 radius_10 content">
      <u-input
        placeholder="请输入该商品详细资料"
        v-model="params.value"
        type="textarea"
        height="300"
      />
    </view>
    <view class="wd_80 main-btn pd_tb_10 mg_t_50" @click="submit">下一步</view>
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
      uni.showModal({
        title: "提示",
        content: "个人信息不完善，请完善后再发布",
        confirmColor: "#db4a15",
        success: (res) => {
          if (res.confirm) {
            //暂定前往下一步
            uni.navigateTo({
              url: "/pages/publish/setData",
            });
          }
        },
      });
      this.$refs.uUpload.upload();
    },
  },
};
</script>

<style lang="scss">
.content {
  background: $uni-bg-color-grey;
}
</style>
