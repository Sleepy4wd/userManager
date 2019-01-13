<template>
    <div>
        main
        <el-button @click="loginout" type="danger">退出</el-button>
    </div>
</template>
<script>
export default {
    //声明周期函数
    beforeCreate() {
        //判断有没有token
        let token=window.sessionStorage.getItem('token');
        if(token){
            //登录了
        }else{
            //没有登录
            this.$router.push('login');
        }
    },
    methods: {
        loginout(){
            window.sessionStorage.removeItem('token');
            this.$router.push('login')
        }
    },
}
</script>
<style>

</style>
