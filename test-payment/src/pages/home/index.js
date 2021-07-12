import { BASE_URL } from '../../utils/config';

async function getAuthCodeAsync() {
  return new Promise((resolve, reject) => {
    my.getAuthCode({
      success: (info) => resolve(info),
      fail: (err) => reject(err),
    })
  })
}

async function requestAsync(opts) {
  return new Promise((resolve, reject) => {
    my.request({
      ...opts,
      success: (res) => resolve(res),
      fail: (err) => reject(err),
    })
  })
}

Page({
  async onTapLogin() {
    const info = await getAuthCodeAsync()
    const res = await requestAsync({
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