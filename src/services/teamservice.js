import Api from '@/services/api'

export default {
  fetchTeams () {
    return Api().get('/teams')
  },
  postTeam (team) {
    return Api().post('/teams', team,
      { headers: {'Content-type': 'application/json'} })
  },
  // upvoteDonation (id) {
  //   return Api().put(`/donations/${id}/vote`)
  // },
  deleteTeam (id) {
    return Api().delete(`/teams/${id}`)
  },
  fetchTeam (id) {
    return Api().get(`/teams/${id}`)
  },
  putTeam (id, team) {
    console.log('REQUESTING ' + team._id + ' ' +
      JSON.stringify(team, null, 5))
    return Api().put(`/team/${id}`, team,
      { headers: {'Content-type': 'application/json'} })
  }
}
