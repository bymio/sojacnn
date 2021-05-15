import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home')
const Policy = () => import('../views/policy/Policy.vue')
const GsoSP = () => import('../views/gsosp/GsoSP.vue')
// const Profile = () => import('../views/profile/Profile.vue')
// const body = () => import('../views/bodybar/BodyBar.vue')


// 1.安装插件
Vue.use(VueRouter)

// 2.创建router
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/policy',
    component: Policy
  },
  {
    path: '/gsosp',
    component: GsoSP
  },
  // {
  //   path: '/profile',
  //   component: Profile
  // },
  // {
  //   path: '/body',
  //   component: body
  // }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})


export default router
