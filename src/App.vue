<template>
  <div id="app" class="theme-blue">
    <transition name="fade" mode="out-in">
        <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  methods: {}
};
</script>

<style>
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

body,
html {
  height: 100%;
}

body {
  margin: 0;
  font-size: 14px;
  background-color: #e9eef3;
  font-family: "Microsoft YaHei", Helvetica, sans-serif;
}

a {
  text-decoration: none;
}

img {
  vertical-align: middle;
  border: 0;
}

.el-input__inner,
.el-button--small {
  border-radius: 0;
  font-size: 14px;
}

.sub-content {
  background-color: #fff;
  padding: 10px 15px;
}

.el-table--medium td,
.el-table--medium th {
  padding: 8px 0;
}

td .el-button--small,
td .el-button--small.is-round {
  padding: 3px 0px;
}
</style>
