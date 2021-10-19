Page({
  onLoad(query) {
    this.setData({
      message: JSON.stringify(query)
    })
  }
});