// 方便后续 按需引入该组件
import Test from "./test.vue";

Test.install = function(Vue) {
  Vue.component(Test.name, Test);
};

export default Test;

