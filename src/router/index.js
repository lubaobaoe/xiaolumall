import Vue from 'vue'
import Router from 'vue-router'

const home = () => import('../views/home/home')
const category = () => import('../views/category/category')
const shopcart = () => import('../views/shopcart/shopcart')
const profile = () => import('../views/profile/profile')
Vue.use(Router)
const routes = [{
    path: '',
    redirect: '/home'
  }, {
    path: '/home',
    name: 'home',
    component: home
  },
  {
    path: '/category',
    name: 'category',
    component: category
  },
  {
    path: '/shopcart',
    name: 'shopcart',
    component: shopcart
  },
  {
    path: '/profile',
    name: 'profile',
    component: profile
  }
]
const routers = new Router({
  routes,
  mode: 'history'
})
export default routers
