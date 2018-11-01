import Vue from 'vue'
import Router from 'vue-router'
import homePage from '../page/homePage'
import userUploadPage from '../page/userUploadPage'
import userOwnPage from '../page/userOwnPage'
import userUserPage from '../page/userUserPage'
import test from '../page/test'

Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: homePage,
      meta: {
        title: 'mycloud'
      },
    },
    {
      path: '/user/upload',
      name: 'userUploadPage',
      component: userUploadPage,
      meta: {
        title: '上传文件|mycloud'
      },
    },
    {
      path: '/user/own',
      name: 'userOwnPage',
      component: userOwnPage,
      meta: {
        title: '文件管理|mycloud'
      },
    },
    {
      path: '/user/user',
      name: 'userUserPage',
      component: userUserPage,
      meta: {
        title: '个人主页|mycloud'
      },
    },
    {
      path: '/test',
      name: 'test',
      component: test,
      meta: {
        title: 'test|mycloud'
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
