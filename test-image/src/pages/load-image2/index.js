Page({
  data: {
    url: "/assets/images/image1.png",
  },
  changeUrl() {
    this.setData({
      url: "/assets/images/image2.png"
    })
  }
});