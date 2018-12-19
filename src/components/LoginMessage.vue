<template>
  <div class="hero">
    <h3 class="vue-title">Already Logged In</h3>
    <p class="lead"><b> You're Already Logged In,</b></p>
    <p class="lead"><b>Please Choose and Option from the Menu!!</b></p>
    <tfooter></tfooter>
  </div>
</template>

<script>
import Footer from '@/components/Footer'
export default {
  name: 'LoginMessage',
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
  .hero {
    height: 100vh;
    margin-top: 30px;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .hero .lead {
    font-weight: 200;
    font-size: 2.5rem;
  }
</style>
