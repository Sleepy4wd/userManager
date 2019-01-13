import Vue from 'vue'
import App from './App.vue'

//导入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

//导入base.css
import './assets/base.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
