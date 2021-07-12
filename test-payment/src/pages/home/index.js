import myx from 'tiki-miniapp-tnx/src/myx';

import { BASE_URL } from '../../utils/config';
import * as api from '../../utils/api';

const app = getApp();

Page({
  async onTapLogin() {
    this.setData({ loading: true })

    try {
      const info = await myx.getAuthCode()
      const user = await api.loginWithAuthCode(info.authCode);
      myx.debug(`login successful`)
      this.setData({ user })
      app.token = user.access_token;
    } finally {
      this.setData({ loading: false })
    }
  },

  onGoToDebug() {
    my.navigateTo({
      url: '/pages/debug/index'
    })
  },

  async onPay() {
    try {
      myx.debug(`app token is ${app.token}`)
      const orderId = await api.createOrder(app.token)    
      await myx.makePayment({ orderId })
      myx.debug('make payment successful')
      myx.alert({
        title: 'Thông báo',
        content: 'Thanh toán thành công',
      })
    } catch(e) {
      myx.debug(`make payment fail ${error}`)
    }
  }
});