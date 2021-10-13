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
          <el-form ref="loginForm" :model="loginForm" :rules="loginRules">
            <el-form-item  prop="username">
              <el-input ref="username" v-model="loginForm.username" prefix-icon="el-icon-user-solid" type="primary"
                placeholder="用户名" class="userName" size="medium"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <!--show-password切换显示和隐藏  -->
              <el-input  ref="password" v-model="loginForm.password" placeholder="密码" show-password
                prefix-icon="el-icon-lock" class="passWord"> </el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click.native.prevent="handleLogin">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { validUsername } from '@/utils/validate'
  export default {
    name: 'Login',
    data() {
 
      return {
        loginForm: {
          username: '',
          password: '',
          type: "account",
        },
        loginRules: {
          username: [{ required: true, trigger: 'blur', message: "请输入用户名" }],
          password: [{ required: true, trigger: 'blur', message: "请输入密码" }]
        },
        loading: false,
        passwordType: 'password',
        redirect: undefined
      }
    },
    watch: {
      $route: {
        handler: function (route) {
          this.redirect = route.query && route.query.redirect
        },
        immediate: true
      }
    },
    methods: {
      showPwd() {
        if (this.passwordType === 'password') {
          this.passwordType = ''
        } else {
          this.passwordType = 'password'
        }
        this.$nextTick(() => {
          this.$refs.password.focus()
        })
      },
      handleLogin() {
        // this.$router.push('/setting/types_set' )
        // console.log("dadsadsad",this.$router)
        this.$refs.loginForm.validate(valid => {
          if (valid) {
            this.loading = true
            //派遣任务将this.loginForm传递给状态机那里去 
            this.$store.dispatch('user/login', this.loginForm).then(() => {
              //验证回来的数据成功允许跳转页面
              this.$router.push({ path: '/product/recommend' })
              this.loading = false
            }).catch(() => {
              this.loading = false
            })
          } else {
            return false
          }
        })
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
    background-image: url("../../assets/登录页.jpg");
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