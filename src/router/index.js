import Vue from 'vue'
import Router from 'vue-router'
import svg from '@/components/svg'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'svg',
      component: svg
    }
  ]
})
