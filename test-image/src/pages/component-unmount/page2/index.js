Page({
  onLoad(query) {
    console.log('page2 onLoad');
    this.setData({
      message: JSON.stringify(query)
    })
  },
  onShow(query) {
    console.log('page2 onShow');
  },
  onHide(query) {
    console.log('page2 onHide');
  },
  onUnload(query) {
    console.log('page2 onUnload');
  },
  onTap() {
    my.redirectTo({
      url: 'pages/component-unmount/page2/index',      
    });
  }
});
