Component({
  data: {
    texts: [],
  },
  fireCompomponentLifecycle(e) {
    this.props.onComponentLifecycle && this.props.onComponentLifecycle(e);
  },
  onInit() {
    this.fireCompomponentLifecycle(`${this.props.title}: onInit`);
  },
  deriveDataFromProps(nextProps = { title: 'no title' }) {
    this.fireCompomponentLifecycle(`${nextProps.title}: deriveDataFromProps`, nextProps);
  },
  didMount() {
    this.fireCompomponentLifecycle(`${this.props.title}: didMount`);
    this.setData({ texts: [`${this.props.title}: didUpdate`] }); //=> trigger didUpdate
  },
  didUpdate() {
    this.fireCompomponentLifecycle(`${this.props.title}: didUpdate`);
  },
  didUnmount() {
    this.fireCompomponentLifecycle(`${this.props.title}: didUnmount`);
  },
  onError(msg) {
    this.fireCompomponentLifecycle(`${this.props.title}: ${msg}`);
  },
  methods: {
    onTriggerError() {
      throw new Error('onError');
    },
  },
});
