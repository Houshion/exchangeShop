<template>
  <view>
    <u-cell-group>
      <block v-for="item in 3" :key="item">
        <u-cell-item
          icon="question-circle-fill"
          title="只是近黄昏"
          @click="getDetail(item)"
        ></u-cell-item>
      </block>
    </u-cell-group>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    getDetail(item) {
      uni.navigateTo({
        url: `./detail?id=${item}`,
      });
    },
  },
};
</script>

<style lang="scss">
</style>
