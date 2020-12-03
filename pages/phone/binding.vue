<template>
  <view class="bindingPage">
    <view class="back1"></view>
    <view class="back2"></view>
    <view class="main">
      <view class="logo">
        <image src="/static/logo2.png" mode="widthFix" />
      </view>
      <view class="mainBox">
        <u-form :model="bindingMsg" ref="uForm">
          <u-form-item label-position="top" label="手机号码" prop="phone">
            <u-input
              oninput="value=value.replace(/[^\d]/g,'')"
              maxlength="11"
              v-model="bindingMsg.phone"
              placeholder="请输入手机号"
            />
          </u-form-item>
          <u-form-item label-position="top" label="验证码" prop="code">
            <u-input v-model="bindingMsg.code" placeholder="请输入验证码" />
            <view slot="right" class="main-btn mg_l_5">获取验证码</view>
          </u-form-item>
          <u-form-item :border-bottom="false">
            <view class="main-btn wd_100 pd_tb_5" @click="submit">确定</view>
          </u-form-item>
          <u-form-item :border-bottom="false" prop="agreement">
            <u-checkbox-group active-color="#db4a15">
              <u-checkbox v-model="bindingMsg.agreement" name="agreement">
                我已阅读并同意
                <text class="minor-color">《用户协议》</text>
              </u-checkbox>
            </u-checkbox-group>
          </u-form-item>
        </u-form>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      bindingMsg: {
        phone: "",
        code: "",
        agreement: false,
      },
      rules: {
        phone: [
          {
            min: 11,
            message: "请输入正确的手机号码",
            // 可以单个或者同时写两个触发验证方式
            trigger: ["change", "blur"],
          },
          {
            // 自定义验证函数，见上说明
            validator: (rule, value, callback) => {
              // 上面有说，返回true表示校验通过，返回false表示不通过
              // this.$u.test.mobile()就是返回true或者false的
              return this.$u.test.mobile(value);
            },
            message: "手机号码不正确",
            // 触发器可以同时用blur和change
            trigger: ["change", "blur"],
          },
          {
            required: true,
            message: "请输入手机号",
            // 可以单个或者同时写两个触发验证方式
            trigger: ["change", "blur"],
          },
        ],
        code: [
          {
            required: true,
            message: "请输入验证码",
            // 可以单个或者同时写两个触发验证方式
            trigger: ["change", "blur"],
          },
        ],
      },
    };
  },
  methods: {
    submit() {
      this.$refs.uForm.validate((valid) => {
        if (valid) {
          console.log("验证通过");
        } else {
          console.log("验证失败");
        }
      });
    },
  },
  onReady() {
    this.$refs.uForm.setRules(this.rules);
  },
};
</script>

<style lang="scss" scoped>
.bindingPage {
  position: fixed;
  height: 100vh;
  width: 100%;
}
.back1 {
  background: $main-bg-color;
  width: 75%;
  border-top-right-radius: 50px;
  height: 300upx;
  position: absolute;
  top: 75upx;
}
.back2 {
  background: $uni-text-color-inverse;
  width: 100%;
  height: 100vh;
  position: absolute;
  border-top-right-radius: 50px;
  top: 150upx;
  left: -120upx;
  transform: rotate(10deg);
  @extend .box_shadow;
}
.main {
  position: absolute;
  top: 220upx;
  width: 80%;
  padding: 40upx;
  .logo {
    image {
      width: 250upx;
    }
  }
}
</style>
