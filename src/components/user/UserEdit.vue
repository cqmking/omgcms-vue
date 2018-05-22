<template>
    <div class="sub-content">
      <el-form class="user-form" ref="form" :model="userForm" size="medium" label-width="80px" style="text-align:left; margin-top: 20px;">
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="用户账号">
              <el-input v-model="userForm.screenName" :disabled="userForm.userId > 0"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="邮箱地址">
              <el-input v-model="userForm.email"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="用户名称">
              <el-input v-model="userForm.userName"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="职位">
              <el-input v-model="userForm.jobTitle"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="生日">
              <el-date-picker type="date" placeholder="选择日期" v-model="userForm.birthday" value-format="timestamp" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>
           <el-col :span="12">
            <el-form-item label="性别" >
              <el-radio-group v-model="userForm.sex">
                <el-radio label="1">{{$common.constant.sex["1"]}}</el-radio>
                <el-radio label="2">{{$common.constant.sex["2"]}}</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="住址">
              <el-input v-model="userForm.address"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="电话">
              <el-input v-model="userForm.phone"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="24">
            <el-form-item label="个人描述">
              <el-input type="textarea" v-model="userForm.description" class="description-txt-area"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item>
          <el-button type="primary" @click="saveHandler">保存</el-button>
          <el-button @click="backHandler">返回</el-button>
        </el-form-item>
      </el-form>
    </div>
   
</template>

<script>
import { userService } from "~/service/userService.js";

export default {
  created() {
    let _self = this;
    if (_self.$route.params.userId) {
      _self.userForm.userId = _self.$route.params.userId;
    }
    console.log("UserID参数：" + _self.userForm.userId);
    if(_self.userForm.userId>0){
      _self.loadUser();
    }
    
  },
  data() {
    return {
      userForm: {
        userId: 0,
        screenName: "",
        userName: "",
        email: "",
        jobTitle: "",
        age: "",
        birthday: "",
        description: "",
        address: "",
        sex: "",
        phone: ""
      }
    };
  },
  methods: {
    loadUser() {
      let _self = this;
      let params = { userId: _self.userForm.userId };
      userService.getUserById(params).then(function(response) {
        _self.userForm = response.data;
      });
    },

    saveHandler() {
      let _self = this;
      // 判断是修改还是新增
      userService.saveUser(_self.userForm).then(function(response) {
        _self.$message({
          message: "用户信息保存成功！",
          type: "success"
        });
      });
      console.log(_self.userForm);
    },

    backHandler() {
      let _self = this;
      _self.$router.push({ name: "userList" });
    }
  }
};
</script>

<style>
.user-form .el-col {
  padding-right: 50px !important;
}

.user-form .description-txt-area textarea {
  min-height: 80px !important;
}
</style>
