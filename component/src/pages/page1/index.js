Page({
  onLoad(query) {},
  onReady() {},
  onShow() {},
  onHide() {},
  onUnload() {},
  onTap() {
    const message = (this.data.message || "") + " onTap1";
    this.setData({
      message,
    });
  },
  onTap2() {
    const message = (this.data.message || "") + " onTap2";
    this.setData({
      message,
    });
  },
  onMessage() {
    const items = this.data.items || [];
    items.push(" new item");
    this.setData({
      items,
    });
  },
});
