import { BASE_URL } from '../../utils/config';

Page({
  onTapLogin() {
    my.getAuthCode({
      success: (info) => {
        my.request({
          url: `${BASE_URL}/oauth/token`,
          headers: {
            'UserAgent': 'Tini App Test Payment',
            'Content-type': 'application/json'
          },
          method: 'POST',
          data: {
            auth_code: info.authCode,
          },
          success: (res) => {
            console.log({res})
            my.alert({
              title: 'Thông báo',
              content: 'my.request success'
            })
          },
          fail: (err) => {
            my.alert({
              title: 'Thông báo',
              content: 'my.request fail error'
            })
          }
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