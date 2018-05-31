<template>
    <h1>定义权限</h1>
</template>

<script>
export default {
  data() {
    return {
      roleId: 0
    };
  },
  created() {
    let _self = this;
    if (_self.$route.params.roleId) {
      _self.roleId = _self.$route.params.roleId;
    }
    console.log("Param roleId is "+_self.roleId);
  },
  methods: {}
};
</script>

<style>
</style>
