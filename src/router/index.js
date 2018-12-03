import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Teams from '@/components/Teams'
import AddTeam from '@/components/Addteam'
import AboutUs from '@/components/AboutUs'
import ContactUs from '@/components/ContactUs'
import Edit from '@/components/Edit'
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
      path: '/addTeam',
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
    }
  ]
})
