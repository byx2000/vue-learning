import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../components/Home.vue')
const About = () => import('../components/About.vue')
const HomeNews = () => import('../components/HomeNews.vue')
const HomeMessage = () => import('../components/HomeMessage.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '/',
        redirect: 'news'
      },
      {
        path: 'news',
        component: HomeNews
      },
      {
        path: 'message',
        component: HomeMessage
      }
    ]
  },
  {
    path: '/about',
    component: About
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
