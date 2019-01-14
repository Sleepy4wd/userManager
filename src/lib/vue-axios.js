//导入axios
import axios from 'axios';

//按需引入element-ui
import {Message} from 'element-ui';

//设置基地址
axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/'


//设置axios拦截器
//请求发送之前会触发这个回调函数
axios.interceptors.request.use(config=> {
    // Do something before request is sent
    // console.log(config);
    if(config.url.indexOf('/login')!=-1){
        //登录接口
    }else {
        config.headers.Authorization=window.sessionStorage.getItem("token");
    }
    //返回处理过的axios设置
    return config;
},error=>{
    // Do something with request error
    return Promise.reject(error);
});
//请求响应回来之后会触发这个回调函数
axios.interceptors.response.use(response=> {
    // Do something with response data
    if (response.data.meta.status === 400) {
        Message.error(response.data.meta.msg);
      } else if (response.data.meta.status === 200) {
        Message.success(response.data.meta.msg);
      }
    return response;
  },error=> {
    // Do something with response error
    return Promise.reject(error);
  });


//暴露出去
export default {
    install(Vue) {
        Vue.prototype.$axios = axios;
    }
}