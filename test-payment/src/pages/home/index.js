import { BASE_URL } from '../../utils/config';
import myx from 'tiki-miniapp-tnx/src/myx';

Page({
  async onTapLogin() {
    this.setData({
      loading: true
    })

    try {
      const info = await myx.getAuthCode()
      const res = await myx.request({
        url: `${BASE_URL}/oauth/token`,
        headers: {
          'UserAgent': 'Tini App Test Payment',
          'Content-type': 'application/json'
        },
        method: 'POST',
        data: {
          auth_code: info.authCode,
        },
      })
      myx.debug(`login successful`)
    } finally {
      this.setData({
        loading: false
      })
    }
  },

  onGoToDebug() {
    my.navigateTo({
      url: '/pages/debug/index'
    })
  }
});