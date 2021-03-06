import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Teams from '@/components/Teams'
import ViewTeams from '@/components/ViewTeams'
import AddTeam from '@/components/AddTeam'
import AboutUs from '@/components/AboutUs'
import ContactUs from '@/components/ContactUs'
import Edit from '@/components/Edit'
import Login from '@/components/Login'
import LoginMessage from '@/components/LoginMessage'
import Logout from '@/components/Logout'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/teams',
      name: 'Teams',
      component: Teams
    },
    {
      path: '/viewteams',
      name: 'ViewTeams',
      component: ViewTeams
    },
    {
      path: '/team',
      name: 'AddTeam',
      component: AddTeam
    }, {
      path: '/about',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/contact',
      name: 'ContactUs',
      component: ContactUs
    },
    {
      path: '/edit',
      name: 'Edit',
      component: Edit,
      props: true
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/loginMessage',
      name: 'LoginMessage',
      component: LoginMessage
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout
    }
  ]
})
