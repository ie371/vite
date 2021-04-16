import { createRouter, createWebHashHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import UUTS from '../views/UUTS.vue'
import UUHVS from '../views/UUHVS.vue'
import ITP from '../views/ITP.vue'

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/',
    name: 'uuts',
    component: UUTS
  },
  {
    path: '/uuhvs',
    name: 'uuhvs',
    component: UUHVS
  },
  {
    path: '/itp',
    name: 'itp',
    component: ITP
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import('../views/About.vue')
  // },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
