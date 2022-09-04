import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import Login from '../components/login/Login'
import App from '../App'
import Chapter from '../components/chapter/Chapter'
import NovelContnet from '../components/chapter/NovelContent'
import TopNovel from '../components/navMenu/TopNovel'
import Novel from '../components/navMenu/Novel'
import OngoingNovel from '../components/navMenu/OngoingNovel'
import CompletedNovel from '../components/navMenu/CompletedNovel'
import CatogaryNovel from '../components/navMenu/CatogaryNovel'
import Register from '../components/login/Register'
import Libary from '../components/libary/Libary'
import SearchNovel from '../components/navMenu/SearchNovel'
Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home,
    redirect:'/home/allnovel',
    children:[
      {
        path:'topnovel',
        component: TopNovel,
      },
      {
        path:'allnovel',
        component: Novel,
      },
      {
        path:'ongoingnovel',
        component: OngoingNovel,
      },
      {
        path:'completednovel',
        component: CompletedNovel,
      },
      {
        path:'catogarynovel/:novelType',
        component: CatogaryNovel,
      },
      {
        path:'searchnovel',
        component: SearchNovel,
      }
      
    ]
  },
  {
    path:'/libary',
    name:'libary',
    component:Libary
  },
  {
    path: '/login',
    name: 'login',
    component:Login
  },
  {
    path:'/register',
    name: 'register',
    component: Register,
  },
  {
    path: '/chapter/:novelUid',
    name: 'chapter',
    component: Chapter
  },
  {
    path: '/content/:novelName/:chapterName/:chapterUid',
    name: 'novelContent',
    component: NovelContnet
  }
]

const router = new VueRouter({
  routes
})
const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
export default router
