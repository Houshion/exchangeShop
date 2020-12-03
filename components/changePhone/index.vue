<template>
  <view class="pd_t_50">
    <view class="login-box wd_90">
      <view class="pd_20">原手机号：{{ phone }}</view>
      <u-cell-group :border="false">
        <u-cell-item center :arrow="false" :border-bottom="false">
          <u-field
            v-model="phoneMsg.phone"
            placeholder="请输入新手机号"
            type="number"
            maxlength="9"
            icon="phone"
            :label-width="30"
          >
          </u-field>
        </u-cell-item>
        <u-cell-item center :arrow="false" :border-bottom="false">
          <u-field
            v-model="phoneMsg.code"
            placeholder="请输入验证码"
            type="password"
            icon="lock"
            :label-width="30"
          >
            <view slot="right" class="main-color" @click="getCode">{{
              codeText
            }}</view>
          </u-field>
        </u-cell-item>
        <u-cell-item center :arrow="false" :border-bottom="false">
          <u-button class="main-btn" @click="submit"> 修改 </u-button>
        </u-cell-item>
      </u-cell-group>
    </view>
  </view>
</template>
<script>
export default {
  name: "com-login",
  props: {
    phoneMsg: {
      type: Object,
      default: () => {
        return {
          phone: "",
          code: "",
        };
      },
    },
    phone: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      codeText: "获取验证码",
      status: true,
    };
  },
  methods: {
    submit() {
      if (!this.loginMsg.code) return this.base.showToast("请输入验证码");
      this.$emit(`submit`, this.loginMsg);
    },
    getCode() {
      let interval,
        time = 60;
      if (!this.loginMsg.phone) return this.base.showToast("请输入新手机号");
      if (!this.status) return false;
      interval = setInterval(() => {
        if (time > 0) {
          this.status = false;
          this.codeText = `${time}s`;
          time--;
        } else {
          this.status = true;
          this.codeText = "重新获取";
          clearInterval(interval);
        }
      }, 1000);
    },
  },
};
</script>
<style lang="scss" scoped>
.logo {
  margin: auto;
  width: 200upx;
  height: 200upx;
  text-align: center;
  image {
    @extend .logo;
    padding: 0;
  }
}
.name {
  margin: 30upx;
  text-align: center;
}
</style>