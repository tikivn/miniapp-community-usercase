Component({
  data: {
    dataMessage: "",
  },
  props: {
    propMessage: "",
  },

  methods: {
    onChangePage(e) {
      if (this.props.onTap) {
        this.props.onTap(e);
      }
    },
    onChangeComponent(e) {
      this.setData({
        dataMessage: this.data.dataMessage + " data",
      });
    },
  },
});
