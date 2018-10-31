import Vue from 'vue'
import Router from 'vue-router'
import test from '../page/test'

Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '/',
      name: 'test',
      component: test,
      meta: {
        title: 'mycloud-test'
      },
    },
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
