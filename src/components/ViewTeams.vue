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

import TeamService from '@/services/teamservice'
import Vue from 'vue'
import VueTables from 'vue-tables-2'

Vue.use(VueTables.ClientTable, {compileTemplates: true, filterByColumn: true})
export default {
  name: 'Teams',
  data () {
    return {
      messagetitle: ' Teams List ',
      columns: ['_id', 'name', 'championships', 'rank', 'city', 'numPlayer', 'remove', 'edit'],
      teams: [],
      props: ['_id'],
      errors: [],
      options: {
        perPage: 10,
        filterable: ['name', 'championships', 'rank'],
        sortable: [ 'championships', 'rank', 'numPlayer' ],
        headings: {
          _id: 'ID',
          name: 'Name',
          city: 'City',
          numPlayer: 'NumPlayer',
          championships: 'Championships',
          rank: 'Rank'
        }
      },
      uniqueKey: '_id',
      orderBy: {
        column: 'rank'
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
    },
    deleteTeam: function (id) {
      this.$swal({
        title: 'Are you totaly sure?',
        text: 'You can\'t Undo this action',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'OK Delete it',
        cancelButtonText: 'Cancel',
        showCloseButton: true,
        showLoaderOnConfirm: true
      }).then((result) => {
        console.log('SWAL Result : ' + result)
        if (result === true) {
          TeamService.deleteTeam(id)
            .then(response => {
              // JSON responses are automatically parsed.
              this.message = response.data
              console.log(this.message)
              this.loadTeams()
              // Vue.nextTick(() => this.$refs.vuetable.refresh())
              this.$swal('Deleted', 'You successfully deleted this Team ', 'success')
            })
            .catch(error => {
              this.$swal('ERROR', 'Something went wrong trying to Delete ' + error, 'error')
              this.errors.push(error)
              console.log(error)
            })
        } else {
          this.$swal('Cancelled', 'Your Team still Counts!', 'info')
        }
      })
    },
    editTeam: function (id) {
      this.$router.params = id
      this.$router.push('edit')
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
    width: 65%;
    margin: 0 auto;
  }
  .vue-pagination-ad {
    text-align: center;
  }
  .vue-message {
    text-align: left;
    font-size: 17px;
    margin-left: 30px;
  }
</style>
