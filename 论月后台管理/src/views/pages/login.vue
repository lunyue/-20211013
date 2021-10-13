<template>
  <div class="login">
    <div class="box">
      <div class="leftBox">
        <div>
          <h1>论月产品库</h1>
          <h2>后台管理系统</h2>
        </div>
      </div>
      <div class="rightBox">
        <div>
          <p class="font">用户登录</p>
          <el-form ref="form" :model="form" :rules="rules">
            <el-input v-model="form.username" prefix-icon="el-icon-user-solid" type="primary" placeholder="用户名"
              class="userName" size="medium"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <!--show-password切换显示和隐藏  -->
              <el-input v-model="form.password" placeholder="密码" show-password prefix-icon="el-icon-lock"
                class="passWord"> </el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="login">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import http from "../../util/api"
  import {setToken,setId} from "../../util/auth"
  export default {
    data() {
      return {
        form: {
          username: '',
          password: '',
          type:"account",
        },
        rules:{
          username:[
            { required: true, message: '请输入账号', trigger: 'blur' },
          ],
          password:[
            { required: true, message: '请输入密码', trigger: 'blur' },
          ],
        }
      }
    },
    methods: {
      login() {
        http.Login(this.form)
          .then(res => {
          if(res.status==200){
            this.$message("登录成功")
            setToken(res.data.data.access_token)
            setId(res.data.data.id)
            this.$router.push("/index/recommend")
          }
          }).catch(err => { })
      }
    }
  }
</script>
<style scoped>
  .login {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("../../assets/img/1.jpg");
    background-size: 100% 100%;

  }

  .box {
    background-color: rgb(41, 37, 37);
    width: 1200px;
    height: 600px;
    opacity: 0.70;
  }

  .leftBox {
    margin-left: 5%;
    height: 80%;
    width: 45%;
    float: left;
    color: rgb(242, 241, 252);
    margin-top: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .rightBox {
    width: 45%;
    margin-top: 60px;
    float: left;
    height: 80%;
  }

  .leftBox div {
    font-size: 26px;
  }

  .font {
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    margin-top: 60px;
  }

  .el-input {
    margin-top: 30px;
  }

  .passWord {
    margin-top: 30px;
  }

  .el-button {
    width: 100%;
    margin-top: 40px;
  }
</style>