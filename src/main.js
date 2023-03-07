import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import BaiduMap from 'vue-baidu-map'

import VueRouter from 'vue-router'
// 
import router from './router'

import 'animate.css'

Vue.use(ElementUI);
Vue.use(VueRouter);


Vue.config.productionTip = false


Vue.use(BaiduMap, {
  ak: "ZBhmTFFoTHW5tDGLIFWgW1VA8QO4EMUR"
})


new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
