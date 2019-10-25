<template>
  <div class="login">
    <div class="loginform">
      <h3>超市管理系统</h3>
      <el-form
        :model="LoginForm"
        status-icon
        :rules="rules"
        ref="LoginForm"
        label-width="100px"
        class="demo-ruleForm"
        text-color='#fff'
      >
        <el-form-item label="账号" prop="account">
          <el-input type="text" v-model="LoginForm.account" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="LoginForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <p style="text-align:center"><el-button type="primary" @click="dologin">登录</el-button></p>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            LoginForm:{account:'',pass:''},
            rules:{}
        }
    },
    methods:{
        dologin(){
            this.$router.push('/index/manager')
        }
    }
};
</script>

<style lang="less" scoped>
.login {
  height: 100%;
  background-image: url("../assets/images/bg.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  .loginform{
      height: 300px;
      width: 400px;
      position: absolute;
      bottom:0;
      top: 0;
      right: 0;
      left: 0;
      margin: auto;
      background: #fff;
      opacity: .5;
      padding: 30px;
      h3{
          margin-bottom:40px;
          text-align: center;
      }
      .el-input{
       width: 300px;
     }
  }
}

</style>