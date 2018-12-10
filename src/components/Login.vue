<template>
  <div class="content">
    <div class="head">
      <h1>login</h1>
    </div>
    <!--  panel   -->
    <div class="panel">
      <form >
        <!--  username and password    -->
        <div class="group">
          <label>username</label>
          <input  type="text" placeholder="please enter the username" name="username" v-model="username">
        </div>
        <div class="group">
          <label>password</label>
          <input type="password" placeholder="please enter the password" name="password" v-model="password">
        </div>
        <!--  login button    -->
        <div class="login">
          <button type="submit" name="login" v-on:click="Login($data)">login</button>
          <button type="reset" name="reset">reset</button>
        </div>
      </form>
    </div>

    <!--  register button    -->
    <div class="register">
      <button onclick="/home">create a new account</button>
    </div>
    <div class="message">
      {{msg}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login.vue',
  data () {
    return {
      username: '',
      password: '',
      msg: ' '
    }
  },
  methods: {
    login (form) {
      if (form.username !== 'root' || form.password !== 'root') {
        this.msg = 'username and password is invaild!'
      } else {
        this.$router.push({
          path: '/'
        })
      }
    }
  }
}
</script>

<style scoped>
  body{
    background-color: #F2F2F2;
  }
  .content {
    margin-top: 80px;
  }

  .content button {
    height: 30px;
    color:  white;
    font-size: 18px;
    border: 0px;
    padding: 0px;
    cursor: pointer;
  }
  .content .head {
    text-align: center;
  }
  .content .panel {
    background-color: white;
    width: 302px;
    text-align: center;
    margin: 0px auto;
    padding-top: 10px;
    padding-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;

  }
  .content .panel1 {
    background-color: white;
    width: 1000px;
    text-align: center;
    margin: 0px auto;/
    border: 1px solid #ddd;
    border-radius: 5px;

  }
  .content .panel .group {
    text-align: left;
    width: 262px;
    margin: 0px auto 20px;
  }
  .content .panel .group label {
    line-height: 30px;
    font-size: 18px;
  }
  .content .panel .group input {
    display: block;
    width: 250px;
    height: 30px;
    border: 1px solid #ddd;
    padding: 0px 0px 0px 10px;
    font-size: 16px;
  }
  .content .panel .group input:focus{

    border-left: 1px solid #CC865E;
  }
  .content .panel .login button {
    background-color: #CC865E;
    width: 130px;
  }
  .content .panel .login button:hover {
    background-color: white;
    color:  #CC865E;
    border: 1px solid #CC865E;
  }
  .content .register {
    text-align: center;
    margin-top: 20px;
  }
  .content .register button {
    background-color: #466BAF;
    width: 180px;
  }

  .content .register button:hover {
    background-color: white;
    color: #466BAF;
    border: 1px solid #466BAF;
  }
</style>
