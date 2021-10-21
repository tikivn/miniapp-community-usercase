Page({
  onLoad(query) {
    my.request({
      url: 'https://api.tala.xyz/api/v1/auth/anonymous',
      success: (response) => console.log(response),
      fail: (response) => console.log(response),
    })
  }
});