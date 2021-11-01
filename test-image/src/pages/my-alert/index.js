Page({
  onLoad() {
    try {
      doSomething();
    } catch(e) {
      my.alert({
        title: "error",
        content: "hello",
      })
    }
  },
});
