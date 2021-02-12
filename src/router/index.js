import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import UUTS from '../views/UUTS.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/uu',
    name: 'uu',
    component: UUTS
  },
  
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
