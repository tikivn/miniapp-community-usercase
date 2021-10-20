Page({
  goToProfile() {
    try {
        const url = `tikivn://apps/vn.tiki.feed?pagePath=pages/profile/index&id=fakeUserId&utm_source=tiki_testing`;
        my.openDeeplink({
          url,
        });
    } catch (error) {
      my.alert({ content: "goToProfile failed " + error.message });
    }  
 },

})