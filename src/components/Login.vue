<template>
  <div class="hero">
    <h3 class="vue-title">Log in</h3>
    <el-row type="flex" justify="center">
      <el-form ref="loginForm" :model="user" :rules="rules" status-icon label-width="80px">
        <el-form-item label="username:" class = "name" prop="name">
          <el-input v-model="user.name" class=" input1"></el-input>
        </el-form-item>
        <el-form-item label="password:" class = "pass" prop="pass">
          <el-input v-model="user.pass" type="password" class=" input2"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-upload" @click="login">login</el-button>
        </el-form-item>
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
  .name{
    line-height: 30px;
    font-size: 20px;
  }
  .pass{
    line-height: 30px;
    font-size: 20px;
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
</style>
