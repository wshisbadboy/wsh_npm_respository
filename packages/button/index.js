import WshButton from './src/button';

/* istanbul ignore next */
WshButton.install = function(Vue) {
  Vue.component(WshButton.name, WshButton);
};

export default WshButton;