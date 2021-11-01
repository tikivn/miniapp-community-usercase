Page({
  data: {
    isLoggedIn: false,
    token: '',
    message: '',
  },
  onTap() {
    if (my.canIUse('getUserToken')) {
      my.getUserToken({
        openLogin: true,
        success: (res) => {
          this.setData({ message: 'getUserToken success', token: res.token });
        },
        fail: (err) => {
          this.setData({ message: 'getUserToken error' });
        },
      });
    } else {
      this.setData({ message: 'getUserToken unsupported' });
    }
    if (my.canIUse('isLoggedIn')) {
      my.isLoggedIn({
        success: (isLoggedIn) => {
          this.setData({
            message: 'Login status' + (isLoggedIn ? 'logged' : 'no'),
            isLoggedIn,
          });
        },
        fail: (error) => {
          this.setData({ message: 'isLoggedIn error' });
        },
      });
    } else {
      this.setData({ message: 'isLoggedIn unsupported' });
    }    
  },
  onMove() {
    my.navigateTo({
      url: "pages/navigate-to/index"
    })
  }
});