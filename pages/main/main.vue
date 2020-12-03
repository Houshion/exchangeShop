<template>
  <view>
    <view class="u-page">
      <!-- 所有内容的容器 -->
      <template v-if="current == 0">
        <com-index></com-index>
      </template>
      <template v-if="current == 1">
        <com-feedback></com-feedback>
      </template>
      <template v-if="current == 2">
        <com-publish></com-publish>
      </template>
      <template v-if="current == 3">
        <com-message></com-message>
      </template>
      <template v-if="current == 4">
        <com-center></com-center>
      </template>
    </view>
    <u-tabbar
      height="60px"
      icon-size="50"
      active-color="#db4a15"
      v-model="current"
      :list="list"
      @change="changeTab"
    ></u-tabbar>
  </view>
</template>

<script>
import comPublish from "@/pages/publish/index";
import comIndex from "@/pages/main/index";
import comFeedback from "@/pages/feedback/feedback";
import comMessage from "@/pages/message/message";
import comCenter from "@/pages/my/index";
export default {
  data() {
    return {
      list: [
        {
          iconPath: require(`@/static/main-icon/ic_1_1.png`),
          selectedIconPath: require(`@/static/main-icon/ic_1_2.png`),
          text: "快牛生活",
          customIcon: false,
        },
        {
          iconPath: require(`@/static/main-icon/ic_2_1.png`),
          selectedIconPath: require(`@/static/main-icon/ic_2_2.png`),
          text: "反馈",
          customIcon: false,
        },
        {
          iconPath: require(`@/static/main-icon/ic_3_1.png`),
          selectedIconPath: require(`@/static/main-icon/ic_3_2.png`),
          text: "发布闲置",
          midButton: true,
          customIcon: false,
        },
        {
          iconPath: require(`@/static/main-icon/ic_4_1.png`),
          selectedIconPath: require(`@/static/main-icon/ic_4_2.png`),
          text: "消息",
          customIcon: false,
        },
        {
          iconPath: require(`@/static/main-icon/ic_5_1.png`),
          selectedIconPath: require(`@/static/main-icon/ic_5_2.png`),
          text: "我的",
          customIcon: false,
        },
      ],
      current: 2,
    };
  },
  components: {
    comPublish,
    comIndex,
    comFeedback,
    comMessage,
    comCenter,
  },
  methods: {
    changeTab(e) {
      console.log(e);
    },
  },
};
</script>

<style>
</style>
