import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import("../components/Home.vue")
const About = () => import("../components/About.vue")
const User = () => import("../components/User.vue")

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/user/:username',
    component: User
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
