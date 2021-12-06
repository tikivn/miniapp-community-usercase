Component({
  props: {
    onTap: undefined,
  },
  methods: {
    onTap2() {
      console.log('onTap2');
    },
    onTap(e) {
      if (this.props.onTap) {
        this.props.onTap(e)
      }
    }
  },
});
