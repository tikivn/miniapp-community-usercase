Page({
  onLoad(query) {
    console.log('page1 onLoad');
    this.setData({
      message: JSON.stringify(query)
    })
  },
  onShow(query) {
    console.log('page1 onShow');
  },
  onHide(query) {
    console.log('page1 onHide');
  },
  onUnload(query) {
    console.log('page1 onUnload');
  },
  onTap() {
    my.navigateTo({
      url: 'pages/component-unmount/page2/index',      
    });
  }
});
