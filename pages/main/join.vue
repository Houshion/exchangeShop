<template>
  <view class="pd_15 bfff">
    <view class="swiper">
      <u-swiper :list="swiperImg"></u-swiper>
    </view>
    <view class="agreement mg_t_15">
      <view class="label font_b font_16">
        快牛闲置加盟合作机构，需符合以下条件：
      </view>
      <u-parse :html="content"></u-parse>
    </view>
    <view class="message mg_t_15">
      <view class="title font_b font_16">请填写信息</view>
      <u-form :model="form" ref="joinForm" label-position="top">
        <u-form-item required prop="name" label="营业执照上的名称">
          <u-input v-model="form.name" />
        </u-form-item>
        <u-form-item required prop="name" label="营业执照上的统一社会信用代码">
          <u-input v-model="form.name" />
        </u-form-item>
        <u-form-item required prop="name" label="联系人">
          <u-input v-model="form.name" />
        </u-form-item>
        <u-form-item required prop="name" label="联系人电话">
          <u-input v-model="form.name" />
        </u-form-item>
        <u-form-item required prop="name" label="公司地址（邮寄合同）">
          <u-input v-model="form.name" />
        </u-form-item>
        <u-form-item required prop="name" label="营业执照复印件">
          <u-upload ref="uUpload" :action="action" auto-upload></u-upload>
        </u-form-item>
      </u-form>
      <view class="main-btn wd_80 pd_10" @click="submit">提交</view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      swiperImg: [
        {
          image: require("@/static/main-icon/ic_spbanner.png"),
        },
        {
          image: require("@/static/main-icon/ic_spbanner.png"),
        },
        {
          image: require("@/static/main-icon/ic_spbanner.png"),
        },
      ],
      content: `<p>露从今夜白，月是故乡明</p>`,
      form: {
        name: "",
        intro: "",
        sex: "",
      },
      joinRules: {
        name: [
          {
            required: true,
            message: "请输入姓名",
            trigger: ["blur", "change"],
          },
        ],
      },
      action: "http://www.example.com/upload",
    };
  },
  methods: {
    submit() {
      this.$refs.joinForm.validate((valid) => {
        console.log(valid);
        if (valid) {
		  console.log("验证通过");
		  this.$refs.uUpload.upload();
        } else {
          console.log("验证失败");
        }
      });
    },
  },
  onReady() {
    // this.$refs.joinForm.setRules(this.joinRules);
  },
};
</script>

<style lang="scss">
</style>
