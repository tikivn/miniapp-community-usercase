Page({
  onLoad(query) {
    console.log('page2 onload');
  },
  onReady() {
    console.log('page2 onready');
  },
  onShow() {
    console.log('page2 onshow');
  },
  onHide() {
    console.log('page2 onhide');
  },
  onUnload() {
    console.log('page2 onunload');
  },
  onTap() {
    my.navigateTo({
      url: '/pages/page1/index'
    })
  }
});