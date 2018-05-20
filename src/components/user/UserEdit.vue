<template>
    <h1>新增用户</h1>
</template>

<script>
export default {
  created() {
    let _self = this;
    if (_self.$route.params.userId) {
      _self.userId = _self.$route.params.userId;
    }
    console.log("UserID参数："+_self.userId);
  },
  data() {
    return {
      userId: 0
    };
  },
  methods: {}
};
</script>

<style>
</style>
