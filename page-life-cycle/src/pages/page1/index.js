Page({
  onLoad(query) {
    const message = this.data.message || [];
    message.push('page1 onload');
    this.setData({
      message,
    })
  },
  onReady() {
    const message = this.data.message || [];
    message.push('page1 onready');
    this.setData({
      message,
    })
  },
  onShow() {
    const message = this.data.message || [];
    message.push('page1 onshow');
    this.setData({
      message,
    })
  },
  onHide() {
    const message = this.data.message || [];
    message.push('page1 onhide');
    this.setData({
      message,
    })
  },
  onUnload() {
    const message = this.data.message || [];
    message.push('page1 onunload');
    this.setData({
      message,
    })
  },
  onTap() {
    my.navigateTo({
      url: '/pages/page2/index'
    })
  }
});