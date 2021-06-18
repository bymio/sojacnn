import Vue from 'vue'
import VueRouter from 'vue-router'
  // 1.安装插件
  Vue.use(VueRouter)
//登录
const Login = () => import('../components/common/login/Login.vue')
//home相关
const Home = () => import('../views/home/Home')
const HomeImgInfo = () => import('../views/home/home-img-info/HomeImgInfo.vue')
const Circulars = () => import('../views/home/circulars/substance/Substance.vue')
const Work = () => import('../views/home/work/substance/Substance.vue')
const College = () => import('../views/home/college/substance/Substance.vue')

//其余八个导航相关
const GsoSP = () => import('../views/gsosp/GsoSP.vue')
const Policy = () => import('../views/policy/Policy.vue')
const ScienceProject = () => import('../views/scienceproject/ScienceProject.vue')
const AcademicExchange = () => import('../views/academic-exchange/AcademicExchange.vue')
const BusinessGuide = () => import('../views/business-guide/BusinessGuide.vue')
const PopularScience = () => import('../views/popularscience/PopularScience.vue')
const Contact = () => import('../views/contact/Contact.vue')

//后台管理
const Administrators = () => import('../components/common/administrators/Administrators.vue')
// 后台管理路由
const newsList = () => import('../components/common/administrators/adminList/newsList.vue')
const newsList2push = () => import('../components/common/administrators/adminList/newsList2push.vue')
const newsList2find = () => import('../components/common/administrators/adminList/newsList2find.vue')
const newsList3 = () => import('../components/common/administrators/adminList/newsList3.vue')
const newsList4 = () => import('../components/common/administrators/adminList/newsList4.vue')

//左侧导航相关
//科普概况
const gsNavigation = () => import('../views/gsosp/correspondingcontent/1.vue')
const gsNavigation2 = () => import('../views/gsosp/correspondingcontent/2.vue')
const gsNavigation3 = () => import('../views/gsosp/correspondingcontent/3.vue')
const gsNavigation4 = () => import('../views/gsosp/correspondingcontent/4.vue')

//政策法规
const poNavigation = () => import('../views/policy/correspondingcontent/1.vue')
const poNavigation2 = () => import('../views/policy/correspondingcontent/2.vue')
const poNavigation3 = () => import('../views/policy/correspondingcontent/3.vue')
const poNavigation4 = () => import('../views/policy/correspondingcontent/4.vue')

//学术交流
const acNavigation = () => import('../views/academic-exchange/correspondingcontent/1.vue')
const acNavigation2 = () => import('../views/academic-exchange/correspondingcontent/2.vue')

//科普风采
const puNavigation = () => import('../views/popularscience/correspondingcontent/1.vue')
const puNavigation2 = () => import('../views/popularscience/correspondingcontent/2.vue')

const routerPush = VueRouter.prototype.push
// 重写push函数
VueRouter.prototype.push = function push(location) {

  // 这个if语句在跳转相同路径的时候，在路径末尾添加新参数（一些随机数字）
  // 用来触发watch
  if (typeof (location) == "string") {
    var Separator = "&";
    if (location.indexOf('?') == -1) {
      Separator = '?';
    }
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
    id : "",
    redirect: '/nav/1'
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/administrators',
    component: Administrators,
    children: [
      {
        path:'',
        redirect:'/administrators/newsList'
      },
      {
          path: '/administrators/newsList',
          component: newsList
      },
      // {
      //     path: '/administrators/newsList2',
      //     component: newsList2
      // },
      {
          path: '/administrators/newsList3',
          component: newsList3
      },
      {
          path: '/administrators/newsList4',
          component: newsList4
      },
      {
          path: '/administrators/newsList2/push',
          component: newsList2push
      },
      {
          path: '/administrators/newsList2/find',
          component: newsList2find
      }
    ]
  },
  {
    path: '/nav/1',
    component: Home,
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
    path: '/nav/2',
    component: GsoSP,
    children: [
      {
        path: '',
        // redirect: '/1'
      },
      {
        path: '/1',
        component: gsNavigation
      },
      {
        path: '/2',
        component: gsNavigation2,
      },
      {
        path: '/4',
        component: gsNavigation3,
      },
      {
        path: '/5',
        component: gsNavigation4,
      },
    ]
  },
  {
    path: '/nav/3',
    component: Policy,
    children: [{
        path: '',
        redirect: '/6'
      },

      {
        path: '/6',
        component: poNavigation,
      },
      {
        path: '/7',
        component: poNavigation2,
      },
      {
        path: '/8',
        component: poNavigation3,
      },
      {
        path: '/9',
        component: poNavigation4,
      }
    ]
  },
  {
    path: '/nav/4',
    component: ScienceProject
  },
  {
    path: '/nav/5',
    component: AcademicExchange,
    children: [{
        path: '',
        redirect: '/ac1'
      },
      {
        path: '/ac1',
        component: acNavigation
      },
      {
        path: '/ac2',
        component: acNavigation2,
      }
    ]
  },
  {
    path: '/nav/6',
    component: BusinessGuide
  },
  {
    path: '/nav/7',
    component: PopularScience,
    children: [{
        path: '',
        redirect: '/pu1'
      },
      {
        path: '/pu1',
        component: puNavigation
      },
      {
        path: '/pu2',
        component: puNavigation2,
      }
    ]
  },
  {
    path: '/nav/9',
    component: Contact
  },
]

const router = new VueRouter({
  routes,
})
// 路由导航守卫
router.beforeEach((to, from, next) => {
  // 如果去登录页面，放行
  if(to.path === '/administrators/newsList'){
    // 去其他有权限页面，先判断令牌是否存在，不存在返回登录
    if (!document.cookie)return next('/login')
    next()
  }else{
    next()
  }
})

export default router