Page({
  onLoad() {
    my.getAuthCode({
      success: (res) => {
        console.log('success', res);
      }, 
      fail: (res) => {
        console.log('fail', res)
      }
    })
  }
});