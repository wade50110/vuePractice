<template>
    <body id='poster'>
      <el-form label-width='0px' class='login-container'>
            <h3 class='login_title'>註冊</h3>
            <el-form-item>
              <el-input type='text' v-model='loginForm.username'
                auto-complete='off' placeholder='帳號'></el-input>
            </el-form-item>
            <el-form-item>
            <el-input type='password' v-model='loginForm.password'
                      auto-complete='off'  placeholder='密碼'></el-input>
            </el-form-item>
            <el-form-item>
            <el-input type='password' v-model='loginForm.confirmPassword'
                      auto-complete='off'  placeholder='確認新密碼'></el-input>
            </el-form-item>
            <el-form-item style='width: 100%'>
              <el-button type='primary' id="register" v-on:click='register' style='float:right;width: 100%;' :disabled="disabled">註冊</el-button>
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
        password: '',
        confirmPassword: ''
      },
      disabled: true,
      responseResult: []
    }
  },
  watch: {
    'loginForm': {
      handler: function (newValue, oldvalue) {
        if (this.loginForm.username.length === 0 ||
        this.loginForm.password.length === 0 ||
        this.loginForm.confirmPassword.length === 0) {
          this.disabled = true
        } else {
          this.disabled = false
        }
      },
      deep: true
    }
  },
  methods: {
    register () {
      this.$axios
        .post('/registerService/api/register', {
          username: this.loginForm.username,
          password: this.loginForm.password
        })
        .then((successResponse) => {
          if (!successResponse.errorMessage.length > 0) {
            alert(successResponse.errorMessage)
          }
          alert('註冊成功')
        })
        .catch((failResponse) => {
        })
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
