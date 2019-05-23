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
      name: 'explore-pagosa',
      component: () => import(/* webpackChunkName: "about" */ './views/ExplorePagosa.vue')
    },
    {
      path: '/reviews',
      name: 'reviews',
      component: () => import(/* webpackChunkName: "about" */ './views/Reviews.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import(/* webpackChunkName: "about" */ './views/Contact.vue')
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
