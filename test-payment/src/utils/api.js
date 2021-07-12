import myx from 'tiki-miniapp-tnx/src/myx'

import { BASE_URL } from './config'

async function request(method, url, data, headers) {
  return myx.request({
    url: url,
    method,
    // set default user agent
    headers: { 
      "User-Agent": "TikiTestApp", 
      "Content-type": "application/json", 
      ...headers 
    },
    data,
  });
}

async function get({ url, headers = {}, data = {} }) {
  const qs = Object.keys(data)
    .map((k) => `${k}=${data[k]}`)
    .join("&");
  let urlWithQs = qs ? `${BASE_URL}${url}?${encodeURI(qs)}` : url;
  return await request("GET", urlWithQs, {}, headers);
}

async function post({ url, data, headers = {} }) {
  return await request("POST", `${BASE_URL}${url}`, data, headers);
}

export async function loginWithAuthCode(authCode) {
  const res = await post({
    url: '/oauth/token',
    data: {
      auth_code: authCode
    }
  })

  return res.data;
}

export async function createOrder(token) {
  const res = await post({
    url: '/donation/donate',
    headers: {
      "Content-type": "application/json",
      "X-Access-Token": token,
    },
    data: {
      campaign_id: 1,
      amount: 10000,
    },
  });
  return res.data.tiki_order_id;
}