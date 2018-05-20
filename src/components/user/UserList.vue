<template>
  <el-table :data="listData.content" border style="width: 100%" size="small">
    <el-table-column prop="userId" label="ID" width="80" align="center"></el-table-column>
    <el-table-column prop="screenName" label="账号" width="120" align="left"></el-table-column>
    <el-table-column prop="userName" label="姓名" width="120" align="left"></el-table-column>
    <el-table-column prop="sex" label="性别" width="80" align="center"></el-table-column>
    <el-table-column prop="email" label="邮箱地址" align="left"></el-table-column>
    <el-table-column prop="jobTitle" label="职位" width="180" align="center"></el-table-column>
    <el-table-column prop="address" label="地址" align="left"></el-table-column>
    <el-table-column prop="lastLoginDate" label="上次登录时间" align="center" :formatter="$common.formateDate"></el-table-column>
    <el-table-column prop="createDate" label="创建时间" align="center" :formatter="$common.formateDate"></el-table-column>
  </el-table>
</template>

<script>
import { userService } from "~/service/userService.js";

export default {
  data() {
    return {
      listData: {
        content: []
      },
      params: { pageNo: 1, pageSize: 10 }
    };
  },
  created() {
    let _self = this;
    _self.loadUserList(_self.params);
  },
  methods: {
    loadUserList(params) {
      let _self = this;
      userService.getUserList(params).then(function(response) {
        _self.listData = response.data;
      });
    }
  }
};
</script>

<style>
</style>
