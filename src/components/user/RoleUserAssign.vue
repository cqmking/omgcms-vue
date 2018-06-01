<template>
    <div class="sub-content common-list assign-role-user">
      
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="已分配" name="first">

        </el-tab-pane>
        <el-tab-pane label="未分配" name="second">
          
        </el-tab-pane>
      </el-tabs>

    </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "first",
      roleId: 0,
      assignedUsers: [],
      unassignUsers: []
    };
  },
  created() {
    let _self = this;
    if (_self.$route.params.roleId) {
      _self.roleId = _self.$route.params.roleId;
    }
    console.log("Param roleId is " + _self.roleId);
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<style>
</style>
