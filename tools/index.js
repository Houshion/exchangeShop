export default {
  // 前往登录
  goLogin() {
    uni.navigateTo({
      url: "/components/com-auth/index",
    });
  },
  /**
   * toast提示
   * @param { String } title 标题内容
   * @param { Number } duration 提示时长，默认2秒
   * @param { String } icon 图标 / success 显示成功图标 / loading 显示加载图标 / none 不显示图标，默认none
   */
  showToast(title, duration = 2000, icon = "none") {
    uni.showToast({
      title,
      duration,
      icon,
    });
  },
  /**
   * loading加载提示
   * @param { String } title 标题内容
   * @param { Number } mask 显示透明蒙层,默认false
   */
  showLoading(title, mask = false) {
    uni.showLoading({
      title,
      mask,
    });
  },
  // loading隐藏
  hideLoading() {
    uni.hideLoading();
  },
  /**
   * model提示
   * @param {*} content
   * @param {*} title
   * @param {*} showCancel
   * @param {*} confirmText
   */
  showModel(content, title = "提示", showCancel = true, confirmText = "确定") {
    return new Promise((resolve, reject) => {
      uni.showModel({
        title,
        content,
        showCancel,
        confirmText,
        success: () => {
          resolve();
        },
        fail: () => {
          reject();
        },
      });
    });
  },
};
