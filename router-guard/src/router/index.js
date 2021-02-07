import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../components/Home.vue')
const User = () => import('../components/User.vue')
const About = () => import('../components/About.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: '主页'
    }
  },
  {
    path: '/user',
    component: User,
    meta: {
      title: '用户'
    }
  },
  {
    path: '/about',
    component: About,
    meta: {
      title: '关于'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router
