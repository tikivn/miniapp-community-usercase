Page({
  onLoad(query) {
    console.log('page1 onload');
  },
  onReady() {
    console.log('page1 onready');
  },
  onShow() {
    console.log('page1 onshow');
  },
  onHide() {
    console.log('page1 onhide');
  },
  onUnload() {
    console.log('page1 onunload');
  },
  onTap() {
    my.navigateTo({
      url: '/pages/page2/index'
    })
  }
});