<template>
  <div class="login-container">
    <div class="form-container">
      <h2>用户登录</h2>
      <el-form
        label-position="top"
        label-width="80px"
        :model="formData"
      >
        <el-form-item label="名称">
          <el-input v-model="formData.name"></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
          <el-input v-model="formData.password"></el-input>
        </el-form-item>
      </el-form>
      <el-button
        class="login-btn"
        type="success"
      >成功按钮</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  // components: {
  //   HelloWorld
  // }
  data: function() {
    return {
      formData: {
        name: "",
        password: ""
      }
    };
  }
};
</script>

<style lang="scss">
.login-container {
  background-color: #324152;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .form-container {
    width: 570px;
    background-color: #fff;
    padding: 40px;
    box-sizing: border-box;
    border-radius: 10px;
    .login-btn {
      width: 100%;
    }
  }
}
</style>
