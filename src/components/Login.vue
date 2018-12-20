<template>
  <div class="hero">
    <h3 class="vue-title">Log in</h3>
    <el-row type="flex" justify="center">
      <el-form ref="loginForm" :model="user" :rules="rules" status-icon label-width="100px">
        <el-form-item label="username:" class = "label1" prop="name">
          <el-input v-model="user.name" class=" input1" ></el-input>
        </el-form-item>
        <el-form-item label="password:" class = "label2" prop="pass">
          <el-input v-model="user.pass" type="password" class=" input2"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-upload" class="button" @click="login">login</el-button>
        </el-form-item>
        <img v-on:click="githubClick" src="../assets/github.png" />sign in with github
      </el-form>
    </el-row>
    <tfooter></tfooter>
  </div>
</template>

<script>
import Footer from '@/components/Footer'
export default {
  methods: {
    login () {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          if (this.user.name === 'admin' && this.user.pass === '123') {
            this.$store.dispatch('login', this.user).then(() => {
              this.$notify({
                type: 'success',
                message: 'Welcome,' + this.user.name + '!',
                duration: 3000
              })
              this.$router.replace('/')
            })
          } else {
            this.$message({
              type: 'error',
              message: 'username or password is incorrect!!',
              showClose: true
            })
          }
        } else {
          return false
        }
      })
    },
    githubClick: function () {
      window.location.href = 'https://github.com/login/oauth/authorize?client_id=a154000b74eb59d3a760&redirect_uri=http://localhost:8080/#/login'
    },
    getUrlData: function (name) {
      var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
      var r = window.location.search.substr(1).match(reg)
      if (r != null) { return unescape(r[2]) }
      return null
    }
  },
  data () {
    return {
      user: {},
      rules: {
        name: [
          {required: true, message: 'username must be required', trigger: 'blur'}
        ],
        pass: [
          {required: true, message: 'password must be required', trigger: 'blur'}
        ]
      }
    }
  },
  components: {
    'tfooter': Footer
  },
  created: function () {
    var code = this.getUrlData('code') || ''
    if (code === '') {
      return
    }
    this.$http.get('http://localhost:8080/api/github/user_info',
      {
        params: {
          code: code
        }
      }
    ).then((response) => {
      if (response.data.status === 100) {
        this.user.name = response.data.data.login
        this.$store.dispatch('login', this.user).then(() => {
          this.$notify({
            type: 'success',
            message: 'Welcome,' + this.user.name + '!',
            duration: 3000
          })
          this.$router.replace('/')
        })
      } else {
      }
    }, (response) => {
    })
  }
}
</script>

<style scoped>
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 10px;
  }
  .input1{
    display: block;
    width: 250px;
    height: 30px;
    padding: 0px 0px 0px 10px;
    font-size: 16px;
  }
  .input2{
    display: block;
    width: 250px;
    height: 30px;
    padding: 0px 0px 0px 10px;
    font-size: 16px;
  }
  img {
    width: 100px;
    height: 100px;
  }
  .button{
    text-align: center;
  }
</style>
