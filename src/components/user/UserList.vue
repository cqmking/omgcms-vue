<template>
  <div class="sub-content">

    <div class="btn-bar" style="text-align:left; margin:10px 0;">
      <el-button type="primary" icon="el-icon-circle-plus-outline" size="medium" @click="handleCreateUser">新增</el-button>
      <el-button v-show="selected.length == 1" type="warning" icon="el-icon-edit" size="medium" @click="handUpdateUser(selected[0].userId)">修改</el-button>
      <el-button v-show="selected.length > 0" type="danger" icon="el-icon-delete" size="medium">删除</el-button>
    </div>

    <el-table :data="listData.content" border style="width: 100%" size="medium" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center"></el-table-column>
      <el-table-column prop="userId" label="ID" width="80" align="center"></el-table-column>
      <el-table-column prop="screenName" label="账号" width="120" align="left"></el-table-column>
      <el-table-column prop="userName" label="姓名" width="120" align="left"></el-table-column>
      <el-table-column prop="sex" label="性别" width="80" align="center" :formatter="formatSex"></el-table-column>
      <el-table-column prop="email" label="邮箱地址" width="200" align="left" show-overflow-tooltip></el-table-column>
      <el-table-column prop="jobTitle" label="职位" width="100" align="center"></el-table-column>
      <el-table-column prop="address" label="地址" align="left" min-width="150" show-overflow-tooltip></el-table-column>
      <el-table-column prop="lastLoginDate" label="上次登录时间" width="160" align="center" :formatter="$common.formatDate"></el-table-column>
      <el-table-column prop="createDate" label="创建时间" width="160" align="center" :formatter="$common.formatDate"></el-table-column>
      <el-table-column fixed="right" label="操作" width="150" align="center" >
        <template slot-scope="scope">
          <el-button @click="handleViewUser(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small" @click="handUpdateUser(scope.row.userId)">编辑</el-button>
          <el-button type="text" style="color:#f56c6c;" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <div class="block" style="text-align:right; padding: 20px 0 10px 0;">
      <el-pagination background  @size-change="handleSizeChange" @current-change="handleCurrentPageNoChange" :current-page="params.pageNo"
        :page-sizes="[10, 20, 30, 40, 50]" :page-size="params.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="listData.totalElements">
      </el-pagination>
    </div>

  </div>
</template>

<script>
import { userService } from "~/service/userService.js";

export default {
  data() {
    return {
      listData: {
        content: [],
        totalElements: 0
      },
      params: { pageNo: 1, pageSize: 10 },
      selected: []
    };
  },
  created() {
    let _self = this;
    _self.loadUserList(_self.params);
  },
  methods: {
    formatSex(row, column, cellValue, index) {
        
        if (!cellValue || cellValue == "") {
            return "-";
        }
        return this.$common.data.sex[cellValue];
    },
    loadUserList(params) {
      let _self = this;
      userService.getUserList(params).then(function(response) {
        _self.listData = response.data;
      });
    },
    handleSizeChange(val) {
      let _self = this;
      _self.params.pageSize = val;
      _self.loadUserList(_self.params);
    },
    handleCurrentPageNoChange(val) {
      let _self = this;
      _self.params.pageNo = val;
      _self.loadUserList(_self.params);
    },

    handleSelectionChange(val) {
      let _self = this;
      _self.selected = val;
    },

    handleCreateUser() {
      let _self = this;
      _self.$router.push({ name: "userAdd" });
    },

    handleViewUser(user) {
      let _self = this;
      console.log(user);
    },

    handUpdateUser(userId) {
      let _self = this;
      //router.push({ name: 'userEdit', params: { userId }}) // -> /userEdit/123
      // console.log("userId:"+userId);
      _self.$router.push({ name: "userEdit", params: { userId } });
    }
  }
};
</script>

<style>
</style>
