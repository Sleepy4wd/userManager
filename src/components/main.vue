<template>
  <el-container class="main-container">
    <el-header>
      <el-row>
        <el-col :span="8">
          <div class="title-left">
            <img
              src="../assets/logo.png"
              alt=""
            >
          </div>
        </el-col>
        <el-col :span="8">
          <div class="title-center">
            电商后台管理系统
          </div>
        </el-col>
        <el-col :span="8">
          <div class="title-right">
            <el-button
              @click="loginout"
              type="danger"
            >退出</el-button>
          </div>
        </el-col>
      </el-row>
    </el-header>
    <el-container class="main-content">
      <el-aside width="200px">
        <el-menu
          default-active="3"
          class="el-menu-vertical-demo"
          router
        >
          <el-submenu v-for="(item, index) in menuList" :key="item.id" :index="item.order+''">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{item.authName}}</span>
            </template>
              <el-menu-item v-for="(it, i) in item.children" :key="it.id" :index="'/'+it.path">
                <i class="el-icon-menu"></i>
                {{it.authName}}
              </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <!-- 出口 -->
        <!-- <router-view></router-view> -->
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  // //声明周期函数
  // beforeCreate() {
  //   //判断有没有token
  //   let token = window.sessionStorage.getItem("token");
  //   if (token) {
  //     //登录了
  //   } else {
  //     //没有登录
  //     this.$router.push("login");
  //   }
  // },
  data() {
    return {
      menuList:[],
    }
  },
  created() {
    this.$axios
      .get("menus")
      .then(res => {
        // console.log(res);
        this.menuList = res.data.data;
      });
  },
  methods: {
    loginout() {
      this.$confirm("此操作将退出, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          window.sessionStorage.removeItem("token");
          this.$router.push("login");
          this.$message({
            type: "success",
            message: "退出成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "再看看"
          });
        });
    },
  }
};
</script>
<style lang="scss">
.main-container {
  height: 100%;
  .el-header {
    background-color: #b3c0d1;
    height: 60px;
    .title-left {
      padding-left: 10px;
    }
    .title-center {
      font-size: 28px;
      line-height: 60px;
      text-align: center;
      color: #fff;
    }
    .title-right {
      text-align: right;
      line-height: 60px;
      padding-right: 10px;
    }
  }
  .main-content {
    .el-aside {
      background-color: #fff;
      color: #333;
      text-align: center;
      line-height: 200px;
      .el-submenu__title {
        text-align: left;
      }
    }
    .el-main {
      background-color: #e9eef3;
      color: #333;
      text-align: center;
      line-height: 160px;
    }
  }
}
</style>
