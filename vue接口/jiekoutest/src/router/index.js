import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login'
import register from '../views/register'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/register',
    name: 'register',
    component: register
  },
 
]

const router = new VueRouter({
  routes
})

export default router
