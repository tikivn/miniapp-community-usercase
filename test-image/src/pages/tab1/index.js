async function testPromiseError() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("test reject")
    }, 1000)
  })
}


Page({
  onLoad(query) {
    this.setData({
      message: JSON.stringify(query)
    })

    my.getUserInfo({
      success: (res) => {
        console.log(res)
      },
      fail: (res) => {
        console.log(res)
      }
    })
  },
  onTap() {
    // console.log(aUndefinedVar);
    // my.navigateTo({
    //   url: "pages/relaunch/index?a=1"
    // })

    // await testPromiseError();
    my.request({
      url: 'https://api.ipify.org?format=json',
      includeHeader: true,
      success: (res) => {
        console.log(res)
      }
    })
  }
});