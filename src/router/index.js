import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Work from '@/components/Work'
import Tools from '@/components/Tools'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/work',
      name: 'Work',
      component: Work
    },
    {
        path: '/tools',
        name: 'Tools',
        component: Tools
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
