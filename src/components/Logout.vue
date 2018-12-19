<template>
  <div class="hero">
    <h3 class="vue-title">Log out</h3>
    Welcome
    <span v-if="user"> {{user.name}}!!If You Really Want to Log out, Click Below!!
      <p></p>
      <div><el-button type="warning"  @click="logout">logout</el-button></div>
        </span>
    <el-button v-else type="success" @click="login">login</el-button>
    <p></p>
    <p></p>
    <p></p>
    <tfooter></tfooter>
  </div>
</template>

<script>
import Footer from '@/components/Footer'
export default {
  methods: {
    login () {
      this.$router.replace('/login')
    },
    logout () {
      this.$store.dispatch('logout').then(() => {
        this.$router.replace('/login')
      })
    }
  },
  computed: {
    user () {
      return this.$store.state.user
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
font-size: 30pt;
margin-bottom: 10px;
}
</style>
