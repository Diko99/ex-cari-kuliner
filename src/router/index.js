import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import FoodDetail from '../views/FoodDetail.vue'
import Keranjang from '../views/Keranjang.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/foods/:id',
    name: 'Food',
    component: FoodDetail
  },
  {
    path: '/keranjang',
    name: 'Keranjang',
    component: Keranjang
  },
  {
    path: '/foods',
    name: 'About',
    component: () => import('../views/Foods.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
