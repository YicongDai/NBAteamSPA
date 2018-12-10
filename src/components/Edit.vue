<template>
  <div id="app1" class="hero">
    <h3 class="vue-title"><i class="fa fa-money" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div class="container mt-3 mt-sm-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <team-form :team="team" teamBtnTitle="Update Team" @team-is-created-updated="updateTeam"></team-form>
        </div><!-- /col -->
      </div><!-- /row -->
    </div><!-- /container -->
  </div>
</template>

<script>
import TeamService from '@/services/teamservice'
import TeamForm from '@/components/TeamForm'

export default {
  data () {
    return {
      team: {},
      childDataLoaded: false,
      temp: {},
      messagetitle: 'Update Team'
    }
  },
  components: {
    'team-form': TeamForm
  },
  created () {
    this.getTeam()
  },
  methods: {
    getTeam: function () {
      TeamService.fetchTeam(this.$router.params)
        .then(response => {
          this.temp = response.data
          this.team = this.temp[0]
          this.childDataLoaded = true
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },
    updateTeam: function (team) {
      TeamService.putTeam(this.$router.params, team)
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
  #app1 {
    width: 95%;
    margin: 0 auto;
  }
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 10px;
  }
</style>
