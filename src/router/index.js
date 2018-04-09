import Vue from 'vue'
import Router from 'vue-router'
import Home from 'views/Home'
import Calendar from 'views/Calendar'
import Contact from 'views/Contact'
import Opportunities from 'views/Opportunities'
import Podcast from 'views/Podcast'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'is-active', // for router-link
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/calendar',
      name: 'Calendar',
      component: Calendar
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/opportunities',
      name: 'Opportunities',
      component: Opportunities
    },
    {
      path: '/podcast',
      name: 'Podcast',
      component: Podcast
    }
  ]
})
