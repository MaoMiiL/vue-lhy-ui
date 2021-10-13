import Toast from './components/Toast/Toast.vue'
import Test from './components/MyTest/test.vue'

const components = [
  Toast,
  Test
];

const install = function(Vue){

  if (install.installed) return;
  
  //注册所有组件：全局注册
  components.map((component)=>{
    Vue.component(component.name,component);
  });
}

if(typeof window!=='undefined' && window.Vue){
  install(window.Vue);
}

export {
  install,
  Toast,
  Test
}

export default {
  install,
  Toast,
  Test
}