<template>
  <view>
    <change-phone :phoneMsg="phoneMsg" :phone="phone"></change-phone>
  </view>
</template>

<script>
import changePhone from "@/components/changePhone";
export default {
  data() {
    return {
      phoneMsg: {
        phone: "",
        code: "",
	  },
	  phone: '18888888888'
    };
  },
  components: {
    changePhone,
  },
};
</script>

<style lang="scss">
</style>
