Page({
  onMessage(e) {    
    console.log('receive message from webview', e.detail);

    const { requestId, params } = e.detail;
    const { api, params: messageParams = {} } = params;
    if (my[api] === undefined) {
      return;
    }

    console.log(`call my.${api}`, messageParams);
    const webview = my.createWebViewContext('web-view1');
    my[api]({
      ...(messageParams || {}),
      success: (res) => {
        webview.postMessage({
          requestId,
          result: {
            status: 'success',
            res,
          }
        })
      },
      fail: (res) => {
        webview.postMessage({
          requestId,
          result: {
            status: 'fail',
            res,
          }
        })
      },
    })
  }
});