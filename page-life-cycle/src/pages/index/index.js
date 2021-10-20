Page({
  onShow() {
    my.alert({
      title: 'LifeCycle test',
      content: 'Index page onShow',
      buttonText: 'OK',
    });
  },
  onHide() {
  },
  onTapNavigate() {
    my.navigateTo({ url: '/pages/detail/index' });
  }
});
