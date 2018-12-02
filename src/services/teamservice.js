import Api from '@/services/api'

export default {
  fetchTeams () {
    return Api().get('/teams')
  },
  postTeam (team) {
    return Api().post('/teams', team,
      { headers: {'Content-type': 'application/json'} })
  }
  // upvoteDonation (id) {
  //   return Api().put(`/donations/${id}/vote`)
  // },
  // deleteDonation (id) {
  //   return Api().delete(`/donations/${id}`)
  // },
  // fetchDonation (id) {
  //   return Api().get(`/donations/${id}`)
  // },
  // putDonation (id, donation) {
  //   console.log('REQUESTING ' + donation._id + ' ' +
  //     JSON.stringify(donation, null, 5))
  //   return Api().put(`/donations/${id}`, donation,
  //     { headers: {'Content-type': 'application/json'} })
  // }
}
