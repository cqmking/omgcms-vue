<template>
  <div class="sub-content common-list role-list">
    <el-table :data="listData.content" border style="width: 100%" size="medium" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center"></el-table-column>
      <el-table-column prop="roleId" label="ID" width="80" align="center"></el-table-column>
      <el-table-column prop="name" label="角色名称" width="260" align="left"></el-table-column>
      <el-table-column prop="roleKey" label="角色编码" width="260" align="left"></el-table-column>
      <el-table-column prop="createDate" label="创建时间" min-width="200" align="center" :formatter="$common.formatDate"></el-table-column>
      <el-table-column prop="modifyDate" label="修改时间" min-width="200" align="center" :formatter="$common.formatDate"></el-table-column>
      <el-table-column fixed="right" label="操作" width="200" align="center">
        <template slot-scope="scope">
              <el-button type="text" size="small" @click="handUpdateRole(scope.row)">编辑</el-button>
              <el-button type="text" style="color:#f56c6c;" size="small" @click="handleDeleteRole(scope.row)">删除</el-button>
        </template>
        </el-table-column>
      </el-table>

    </div>
</template>

<script>
import { roleService } from "~/service/roleService.js";

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
    _self.loadRoleList(_self.params);
  },
  methods: {
    loadRoleList(params) {
      let _self = this;
      roleService.getRoleList(params).then(function(response) {
        _self.listData = response.data;
      });
    },
    handleSelectionChange(val) {
      let _self = this;
      _self.selected = val;
    },
    handUpdateRole(role){
      let _self = this;
      _self.$router.push({ name: "roleEdit", params: { roleId: role.roleId } });
    },
    handleDeleteRole(Role){
      
    },
    handleCreateRole() {
      let _self = this;
      // _self.$router.push({ name: "userAdd" });
    },
  }
};
</script>

<style>
</style>
