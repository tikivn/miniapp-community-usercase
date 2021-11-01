Page({
  onLoad() {
    my.getUserInfo({
      success: (res) => {
        console.log("success", res);
      },
      fail: (res) => {
        console.log("fail", res);
      },
    });
  },
});
