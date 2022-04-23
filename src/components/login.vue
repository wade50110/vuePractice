<template>
    <body id='poster'>
      <el-form label-width='0px' class='login-container'>
            <h3 class='login_title'>系統登入1</h3>
            <el-form-item>
              <el-input type='text' v-model='loginForm.username'
                auto-complete='off' placeholder='帳號'></el-input>
            </el-form-item>
            <el-form-item>
            <el-input type='password' v-model='loginForm.password'
                      auto-complete='off'  placeholder='密碼'></el-input>
            </el-form-item>
            <el-form-item style='width: 100%'>
              <el-button type='primary' v-on:click='login' style='float:left;'>登錄</el-button>
              <el-button type='primary' v-on:click='hrefRegister' style='float:right;'>註冊</el-button>
            </el-form-item>
      </el-form>
    </body>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      responseResult: []
    }
  },
  methods: {
    login () {
      this.$axios
        .post('/loginService/api/login', {
          account: this.loginForm.username,
          password: this.loginForm.password
        })
        .then((successResponse) => {
          console.log(successResponse)
          localStorage.setItem('token', successResponse.data.token)
          if (successResponse.status === 200) {
            this.$router.replace({ path: '/index' })
          }
        })
        .catch((failResponse) => {
          alert('請重新登錄')
        })
    },
    hrefRegister () {
      this.$router.replace({ path: '/register' })
    }
  }
}
</script>

<style>
.login-container {
    border-radius: 15px;
    background-clip: padding-box;
    margin: 300px auto;
    width: 350px;
    padding: 15px 15px 15px 15px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }
  .login_title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }
   #poster {
    background:url('../assets/thumb-1920-779575.jpg') no-repeat;
    background-position: center;
    height: 100%;
    width: 100%;
    background-size: cover;
    position: fixed;
  }
  body{
    margin: 0px;
  }
</style>
