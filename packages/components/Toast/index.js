// button/index.js
import Toast from "./Toast.vue";

ToastTest.install = function(Vue) {
  Vue.component(Toast.name, Toast);
};

export default Toast;

