import Toast from './components/Toast/Toast.vue'

const components = [
  Toast
];

const install = function(Vue){
  components.map((component)=>{
    Vue.component(component.name,component);
  });
}

if(typeof window!=='undefined' && window.Vue){
  install(window.Vue);
}

export default{
  install,
  Toast
}