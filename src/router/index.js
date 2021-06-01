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
const Administrators = () => import('../components/common/administrators/Administrators.vue')


// const originalPush = VueRouter.prototype.push

// VueRouter.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }
const routerPush = VueRouter.prototype.push  
// 重写push函数
VueRouter.prototype.push = function push(location) {
 
  // 这个if语句在跳转相同路径的时候，在路径末尾添加新参数（一些随机数字）
  // 用来触发watch
  if(typeof(location)=="string"){
    var Separator = "&";
    if(location.indexOf('?')==-1) { Separator='?'; }
    location = location + Separator + "random=" + Math.random();
  }
 
  // 这个语句用来解决报错
  // 调用原来的push函数，并捕获异常
  return routerPush.call(this, location).catch(error => error)

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
    component: Login,
  },
  {
    path: '/administrators',
    component: Administrators,
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
})






export default router
