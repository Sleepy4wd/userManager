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
const routes = [{
        path: '/login',
        component: login
    },
    {
        path: '/main',
        component: main
    }
];

//实例化路由对象
const router = new vueRouter({
    routes
})

router.beforeEach((to, from, next) => {
    next();
    if (to.path === '/login') {
        //登录页,不需要判断
        next();
    } else {
        //判断有没有token
        let token = window.sessionStorage.getItem("token");
        if (token) {
            //登录了,继续访问
            next();
        } else {
            //没有token,没有登录
            // this.$router.push("login");
            Vue.prototype.$message.error('请先登录');
            next('/login');
        }
    }
})

//暴露出去
export default router;