import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/example1',
      name: 'example1',
      component: () => import(/* webpackChunkName: "example1" */ './views/Example1.vue')
    },
    // {
    //   path: '/example2',
    //   name: 'example2',
    //   component: () => import(/* webpackChunkName: "example2" */ './views/Example2.vue')
    // },
    {
      path: '/example3',
      name: 'example3',
      component: () => import(/* webpackChunkName: "example3" */ './views/Example3.vue')
    },
    {
      path: '/example4',
      name: 'example4',
      component: () => import(/* webpackChunkName: "example4" */ './views/Example4.vue')
    }
  ]
})
