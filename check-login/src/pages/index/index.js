async function isLoggedInAsync() {
  return new Promise((resolve, reject) => {
    my.isLoggedIn({
      success: (res) => resolve(res),
      fail: (err) => reject(err),
    });
  });
}

async function getAuthCodeAsync() {
  return new Promise((resolve, reject) => {
    my.getAuthCode({
      success: (res) => resolve(res),
      fail: (err) => reject(err),
    });
  });
}

Page({
  async login() {
    try {
      const res = await getAuthCodeAsync();
      this.setData({
        authCode: res.authCode,
      });
    } catch (e) {
      // if your app is not created in dev center
      // then your app id is invalid -> getAuthCode will throw error
      console.log(e);
    }
  },
  async onLoad(query) {
    const isLoggedIn = await isLoggedInAsync();
    console.log({ isLoggedIn });
    this.setData({
      isLoggedIn,
    });

    if (isLoggedIn) {
      await this.login();
    }
  },
  async onLogin() {
    console.log("on login");
    await this.login();
  },
});
