<template>
  <view>
    <view class="u-flex user-box" @click="getInfo">
      <view class="u-m-r-10"> </view>
      <u-cell-group>
        <u-cell-item title="头像">
          <u-avatar :src="userInfo.headImg" size="140"></u-avatar>
        </u-cell-item>
      </u-cell-group>
    </view>
    <view class="u-m-t-20">
      <u-cell-group>
        <u-cell-item
          @click="changePhone"
          title="手机号"
          :value="userInfo.phone"
        ></u-cell-item>
        <u-cell-item
          @click="showName = true"
          title="姓名"
          :value="userInfo.nickName"
        ></u-cell-item>
        <u-cell-item
          @click="showGender = true"
          title="性别"
          :value="
            userInfo.gender == 1 ? `男` : userInfo.gender == 2 ? `女` : `未知`
          "
        ></u-cell-item>
      </u-cell-group>
    </view>

    <view class="u-m-t-20">
      <u-cell-group>
        <u-cell-item title="实名认证">
          <text class="error">未认证</text>
        </u-cell-item>
      </u-cell-group>
    </view>

    <!-- 姓名 模态框 -->
    <u-modal
      v-model="showName"
      title="姓名"
      show-cancel-button
      :confirm-style="{ background: '#db4a15', color: '#fff' }"
      @confirm="changeName"
    >
      <view class="slot-content pd_20">
        <u-input v-model="userInfo.nickName" />
      </view>
    </u-modal>
    <!-- 性别 操作菜单 -->
    <u-action-sheet
      @click="changeGender"
      :list="genderList"
      v-model="showGender"
    ></u-action-sheet>
  </view>
</template>

<script>
export default {
  data() {
    return {
      showName: false,
      showGender: false,
      userInfo: {
        nickName: "Orc",
        phone: "18888888888",
        gender: "1",
      },
      genderList: [
        {
          text: "男",
        },
        {
          text: "女",
        },
      ],
    };
  },
  onLoad() {},
  methods: {
    changePhone() {
      uni.navigateTo({
        url: `/pages/phone/changePhone`,
      });
    },
    changeName() {
      //修改名称
    },
    changeGender(e) {
      this.userInfo.gender = e + 1;
    },
  },
};
</script>

<style lang="scss">
page {
  background-color: #ededed;
}
.user-box {
  background-color: #fff;
}
</style>
