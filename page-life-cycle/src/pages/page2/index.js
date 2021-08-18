Page({
  onLoad(query) {
    const message = this.data.message || [];
    message.push('page2 onload');
    this.setData({
      message,
    })
  },
  onReady() {
    const message = this.data.message || [];
    message.push('page2 onready');
    this.setData({
      message,
    })
  },
  onShow() {
    const message = this.data.message || [];
    message.push('page2 onshow');
    this.setData({
      message,
    })
  },
  onHide() {
    const message = this.data.message || [];
    message.push('page2 onhide');
    this.setData({
      message,
    })
  },
  onUnload() {
    const message = this.data.message || [];
    message.push('page2 onunload');
    this.setData({
      message,
    })
  },
  onTap() {
    my.navigateTo({
      url: '/pages/page1/index'
    })
  }
});