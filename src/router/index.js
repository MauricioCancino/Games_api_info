import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ErrorView from "@/views/ErrorView.vue"
import OpinionsView from "@/views/OpinionsView.vue"
import GameView from "@/views/GameView.vue"


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '*',
    name: "error",
    component: ErrorView

  },
  {
    path:'/opinions/:id',
    name: "opiniones",
    props:true,
    component: OpinionsView,
    
  },
  {
    path: "/game/:id",
    name: "game",
    props:true,
    component: GameView
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
