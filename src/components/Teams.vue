<template>
  <div class="hero">
    <h3 class="vue-title"><i class="fa fa-list" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div id="app1">
      <v-client-table :columns="columns" :data="teams" :options="options">
      </v-client-table>
    </div>
  </div>
</template>

<script>
import TeamService from '@/services/TeamService'
import Vue from 'vue'
import VueTables from 'vue-tables-2'

Vue.use(VueTables.ClientTable, {compileTemplates: true, filterByColumn: true})
export default {
  name: 'Teams',
  data () {
    return {
      messagetitle: ' Teams List ',
      teams: [],
      errors: [],
      columns: ['_id', 'name', 'city', 'numPlayer', 'championships', 'rank'],
      options: {
        headings: {
          _id: 'ID',
          name: 'Name',
          city: 'City',
          numPlayer: 'NumPlayer',
          championships: 'Championships',
          rank: 'Rank'
        }
      }
    }
  },
  created () {
    this.loadTeams()
  },
  methods: {
    loadTeams: function () {
      TeamService.fetchTeams()
        .then(response => {
          // JSON responses are automatically parsed.
          this.teams = response.data
          console.log(this.teams)
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
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 10px;
  }
  #app1 {
    width: 60%;
    margin: 0 auto;
  }
</style>
