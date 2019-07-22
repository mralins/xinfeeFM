import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import Home from '@/pages/Home'
import Subscribe from '@/pages/Subscribe'
import Featured from '@/pages/Featured'
import Classify from '@/pages/Classify'
import Mine from '@/pages/Mine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/subscribe',
      name: 'Subscribe',
      component: Subscribe
    },
    {
      path: '/featured',
      name: 'Featured',
      component: Featured
    },
    {
      path: '/classify',
      name: 'Classify',
      component: Classify
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    }
  ]
})
