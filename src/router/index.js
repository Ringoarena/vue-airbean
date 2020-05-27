import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '../views/Landing.vue'
import About from '../views/About.vue'
import Menu from '../views/Menu.vue'
import Profile from '../views/Profile.vue'
import Status from '../views/Status.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/status',
    name: 'Status',
    component: Status
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
