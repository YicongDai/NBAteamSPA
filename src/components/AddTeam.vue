<template>
  <div id="app1" class="hero">
    <h3 class="vue-title"><i class="fa fa-money" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div class="container mt-3 mt-sm-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <team-form :team="team" teamBtnTitle="Make Team" @team-is-created-updated="submitTeam"></team-form>
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
      team: {name: '', city: '', numPlayer: 0, championships: 0, rank: 0, message: ''},
      messagetitle: ' Make Team '
    }
  },
  components: {
    'team-form': TeamForm
  },
  methods: {
    submitTeam: function (team) {
      TeamService.postTeam(team)
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
