import myx from 'tiki-miniapp-tnx/src/myx'
import * as api from '../../utils/api'

const app = getApp();

Page({
  async onTapLogin() {
    this.setData({
      loading: true
    })
    try {
      const info = await myx.getAuthCode();
      this.setData({
        token: info.authCode
      })
      const user = await api.loginWithAuthCode(info.authCode);
      this.setData({
        user,
      })
      app.token = user.access_token;
    } finally {
      this.setData({
        loading: false,
      })
    }
  },

  async onPay() {
    try {
      console.log(app.token);
      const orderId = await api.createOrder(app.token)    
      await myx.makePayment({ orderId })
      await myx.alert({
        title: 'Thông báo',
        content: 'Thanh toán thành công'
      })
    } catch(e) {
      console.log(e);
      await myx.alert({
        title: 'Thông báo',
        content: 'Thanh toán thất bại'
      })
    }
  },

  onGoToDebug() {
    myx.navigateTo({
      url: '/pages/debug/index'
    })
  } 
});