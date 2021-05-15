import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home')
const Policy = () => import('../views/policy/Policy.vue')
const GsoSP = () => import('../views/gsosp/GsoSP.vue')
const ScienceProject = () => import('../views/scienceproject/ScienceProject.vue')
const AcademicExchange = () => import('../views/academic-exchange/AcademicExchange.vue')
const BusinessGuide = () => import('../views/business-guide/BusinessGuide.vue')
const PopularScience = () => import('../views/popularscience/PopularScience.vue')
const Contact = () => import('../views/contact/Contact.vue')


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
  {
    path: '/scienceproject',
    component: ScienceProject
  },
  {
    path: '/academicexchange',
    component: AcademicExchange
  },
  {
    path: '/businessguide',
    component: BusinessGuide
  },
  {
    path: '/popularscience',
    component: PopularScience
  },
  {
    path: '/contact',
    component: Contact
  },
]
const router = new VueRouter({
  routes,
  mode: 'history'
})


export default router
