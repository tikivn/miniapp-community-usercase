Page({
  async onLoad(query) {
    console.log('ahihi');
    my.request({
      url: "https://api-dev.ezin.vn/api/node/products",
      method: "GET",
      headers: {
        "content-type": "application/json",
        "user-agent": "Tini App"
      },
      dataType: "json",
      success: function (res) {
        console.log(res);
      },
      fail: function (res) {
        console.log(res);
      },
    });
  }
});