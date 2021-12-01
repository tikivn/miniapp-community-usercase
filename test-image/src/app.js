App({
  onLaunch(options) {
    console.log('App onLaunch');
  },
  onShow(options) {
  },
  onError(e) {
    console.log('error in app error', e)
  },
  onUnhandledRejection(e) {
    console.log('onUnhandledRejection', e);
  }
});