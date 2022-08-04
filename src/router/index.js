import store from '@/store'
import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Users from '../views/Users.vue'
Vue.use(VueRouter)

const routes = [
  
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard
  },

  {
    path: '/users',
    name: 'users',
    component: Users,
    beforeEnter: (to, from, next) => {
      if (store.state.admin == false) {
        next(false)
      } else {
        next()
      }
      
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
