Component({
  props: {
    initPrice: 10,
  },
  methods: {
    onChange(value, mode) {
      console.log('new value', value);
      this.setData({
        price: parseInt(this.props.initPrice) + value
      })
    }
  }
})