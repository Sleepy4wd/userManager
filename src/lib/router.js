//导入vue
import Vue from 'vue';

//导入vue-router
import vueRouter from 'vue-router';
//注册插件
Vue.use(vueRouter);

//导入组件
import login from '../components/login.vue';

import main from '../components/main.vue';

//写路由规则
const routes=[
    {
        path:'/login',
        component:login
    },
    {
        path:'/main',
        component:main
    }
];

//实例化路由对象
const router = new vueRouter({
    routes
})

//暴露出去
export default router;