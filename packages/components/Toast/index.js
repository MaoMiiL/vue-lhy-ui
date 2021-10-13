// 方便后续 按需引入该组件
import Toast from "./Toast.vue";

Toast.install = function(Vue) {
  Vue.component(Toast.name, Toast);
};

export default Toast;

