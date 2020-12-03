<script>
export default {
  onLaunch: function () {
    console.log("App Launch");
  },
  onShow: function () {
    console.log("App Show");
  },
  onHide: function () {
    console.log("App Hide");
  },
};
</script>

<style lang="scss">
/* 引入uView的公共样式 */
@import "uview-ui/index.scss";
page {
  // background: #f5f5f5;
}
/* #ifdef H5 */
uni-page-head {
  display: none;
}
/* #endif */
</style>
