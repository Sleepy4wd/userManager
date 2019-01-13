<template>
  <div class="login-container">
    <div class="form-container">
      <h2>用户登录</h2>
      <el-form
        label-position="top"
        label-width="80px"
        :model="formData"
        :rules="rules"
        ref="formData"
      >
        <el-form-item
          label="名称"
          prop="username"
        >
          <el-input v-model="formData.username"></el-input>
        </el-form-item>
        <el-form-item
          label="活动区域"
          prop="password"
        >
          <el-input
            type="password"
            v-model="formData.password"
          ></el-input>
        </el-form-item>
      </el-form>
      <el-button
        class="login-btn"
        type="success"
        @click="submitForm('formData')"
      >登录</el-button>
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
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "change" },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "change"
          }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "change" },
          { min: 3, message: "密码强度不够", trigger: "change" }
        ]
      }
    };
  },
  methods: {
    submitForm(formData) {
      this.$refs[formData].validate(valid => {
        if (valid) {
          this.$axios.post("login", this.formData).then(res => {
            console.log(res);
            if (res.data.meta.status === 400) {
              this.$message.error(res.data.meta.msg);
            } else if (res.data.meta.status === 200) {
              this.$message({
                message: res.data.meta.msg,
                type: "success"
              });
            }
          });
        } else {
          this.$message.error("请输入用户名和密码");
          return false;
        }
      });
    }
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
