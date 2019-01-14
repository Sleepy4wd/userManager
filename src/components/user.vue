<template>
  <div class="user-content">
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <myBreadcrumb
            :level2="level2"
            :level3="level3"
          ></myBreadcrumb>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <el-input placeholder="请输入内容">
            <template slot="append">
              <el-button icon="el-icon-search"></el-button>
            </template>
          </el-input>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple">
          <el-button
            type="success"
            plain
          >添加用户</el-button>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <el-table
            :data="userList"
            border
            style="width: 100%"
          >
            <el-table-column
              label="#"
              width="26"
              type="index"
            >
            </el-table-column>
            <el-table-column
              prop="username"
              label="姓名"
              width="160"
            >
            </el-table-column>
            <el-table-column
              prop="email"
              label="邮箱"
              width="290"
            >
            </el-table-column>
            <el-table-column
              prop="mobile"
              label="电话"
              width="290"
            >
            </el-table-column>
            <el-table-column
              label="用户状态"
              width="80"
              prop="mg_state"
            >
              <template slot-scope="scope">
                <el-switch
                  v-model="scope.row.mg_state"
                  active-color="#13ce66"
                  inactive-color="#ff4949"
                >
                </el-switch>
              </template>
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  type="primary"
                  plain
                  size="mini"
                  icon="el-icon-edit"
                ></el-button>
                <el-button
                  type="danger"
                  plain
                  size="mini"
                  icon="el-icon-delete"
                ></el-button>
                <el-button
                  type="warning"
                  plain
                  size="mini"
                  icon="el-icon-check"
                ></el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-col>
    </el-row>
    <!-- 底部的分页 -->
    <el-row>
      <el-col :span="24">
        <el-pagination
          :current-page="pageData.pagenum"
          :page-sizes="[2, 4, 6, 8,10]"
          :page-size="pageData.pagesize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
        ></el-pagination>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value1: true,
      value2: true,
      level2: "用户管理",
      level3: "用户列表",
      pageData: {
        query: "",
        //页码
        pagenum: 1,
        //页容量
        pagesize: 10
      },
      //用户的列表
      userList: [],
      //总页数
      total: 0
    };
  },
  //生命周期函数
  created() {
    this.$axios
      .get("users", {
        params: this.pageData
      })
      .then(res => {
        console.log(res);
        this.userList = res.data.data.users;
        this.total = res.data.data.total;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
<style lang="scss">
.main-container {
  padding-top: 0;
  .user-content {
    .bg-purple-dark {
      background: #99a9bf;
      width: 100%;
      .el-breadcrumb {
        line-height: 45px;
        padding-left: 10px;
      }
    }
  }
  .main-content .el-main {
    padding-top: 0;
    padding-right: 0;
  }
}
</style>


