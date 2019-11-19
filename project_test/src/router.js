import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import First from './views/First.vue'
import Second from './views/Second.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:'/first',
      name:'first',
      component: First
    },
    {
      path: '/second',
      name: 'second',
      component: Second
    },

  ]
})
