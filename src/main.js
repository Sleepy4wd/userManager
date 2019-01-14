import Vue from 'vue'
import App from './App.vue'

//导入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

//导入base.css
import './assets/base.css'

//导入自己写的axios插件
import vueAxios from './lib/vue-axios'
Vue.use(vueAxios);

//导入自己抽取的路由
import router from './lib/router'

//导入自己的面包屑
import myBreadcrumb from './components/myBreadcrumb.vue'
//全局注册面包屑组件
Vue.component('myBreadcrumb',myBreadcrumb)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //把vue-router挂载到Vue实例上
  router
}).$mount('#app')
