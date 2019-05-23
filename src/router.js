import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'landing',
      component: () => import(/* webpackChunkName: "about" */ './views/Landing.vue')
    },
    {
      path: '/rooms',
      redirect: 'rooms/main'
    },
    {
      path: '/rooms/:roomOption',
      name: 'rooms',
      component: () => import(/* webpackChunkName: "about" */ './views/Rooms.vue')
    },
    {
      path: '/explore-pagosa',
      name: 'Explore-Pagosa',
      component: () => import(/* webpackChunkName: "about" */ './views/ExplorePagosa.vue')
    },
    {
      path: '/reviews',
      name: 'Reviews',
      component: () => import(/* webpackChunkName: "about" */ './views/Reviews.vue')
    }
  ]
})
