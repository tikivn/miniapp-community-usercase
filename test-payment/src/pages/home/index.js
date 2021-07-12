Page({
  onTapLogin() {
    my.getAuthCode({
      success: (info) => {
        my.alert({
          title: 'Thông báo',
          content: 'my.getAuthCode success'
        })
      },
      fail: (error) => {
        my.alert({
          title: 'Thông báo',
          content: 'my.getAuthCode error'
        })
      }
    })
  },
});