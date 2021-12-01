Page({
  onLoad(query) {
    this.setData({
      message: JSON.stringify(query)
    })
  },
  relaunchPage() {
    my.reLaunch({
      url: 'pages/relaunch/index?a=100'
    })
  },
  relaunchTab() {
    my.reLaunch({
      url: 'pages/tab1/index?relaunchParams=ahhihi'
    })
  },
  redirectTo() {
    my.redirectTo({
      url: 'pages/relaunch/index?source=redirectTo'
    })
  },
  navigateTo() {
    my.navigateTo({
      url: 'pages/tab2/index?source=redirectTo'
    })
  },
});