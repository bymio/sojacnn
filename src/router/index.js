import Vue from 'vue'
import VueRouter from 'vue-router'

const Login = () => import('../components/common/login/Login.vue')
const Home = () => import('../views/home/Home')
const HomeImgInfo = () => import('../views/home/home-img-info/HomeImgInfo.vue')
const Circulars = () => import('../views/home/circulars/substance/Substance.vue')
const Work = () => import('../views/home/work/substance/Substance.vue')
const College = () => import('../views/home/college/substance/Substance.vue')
const Policy = () => import('../views/policy/Policy.vue')
const GsoSP = () => import('../views/gsosp/GsoSP.vue')
const ScienceProject = () => import('../views/scienceproject/ScienceProject.vue')
const AcademicExchange = () => import('../views/academic-exchange/AcademicExchange.vue')
const BusinessGuide = () => import('../views/business-guide/BusinessGuide.vue')
const PopularScience = () => import('../views/popularscience/PopularScience.vue')
const Contact = () => import('../views/contact/Contact.vue')


const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

// 1.安装插件
Vue.use(VueRouter)

// 2.创建router
const routes = [{
    path: '',
    redirect: '/login'
  },
  {
    path: '/login',
    component:Login,
  },
  {
    path: '/home',
    meta: {
      title: '首页'
    },
    component: Home,
    // children: [{
    //     path: 'imginfo',
    //     component: HomeImgInfo
    //   },
    // ]
  },
  {
    path: '/imginfo',
    component: HomeImgInfo
  },
  {
    path: '/circulars',
    component: Circulars
  },
  {
    path: '/work',
    component: Work
  },
  {
    path: '/college',
    component: College
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
