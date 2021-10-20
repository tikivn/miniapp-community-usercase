Page({
  data: {
    texts: [],
  },
  onComponentLifecycle(params) {
    this.setData({ texts: [...this.data.texts, JSON.stringify(params).replace(/\"/g, '')] });
  },
});
