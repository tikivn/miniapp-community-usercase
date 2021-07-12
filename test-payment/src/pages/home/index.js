import { BASE_URL } from '../../utils/config';
import myx from '../../utils/myx';

Page({
  async onTapLogin() {
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
    console.log({res})
    my.alert({
      title: 'Thông báo',
      content: 'my.request success'
    })
  },
});