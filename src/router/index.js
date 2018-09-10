import Vue from 'vue'
import Router from 'vue-router'
import userOwnPage from '../page/userOwnPage'
import userQueryUploadFilePage from '../page/userQueryUploadFilePage'
import userUserPage from '../page/userUserPage'
import adminOwnPage from '../page/adminOwnPage'
import adminDriveInfoPage from '../page/adminDriveInfoPage'
import adminTaskPage from '../page/adminTaskPage'
import adminExceptionInfoPage from '../page/adminExceptionInfoPage'
import adminUserAuthorizationPage from '../page/adminUserAuthorizationPage'
import adminUserPage from '../page/adminUserPage'
import adminPermissionPage from '../page/adminPermissionPage'
import homePage from '../page/homePage'
import test from '../page/adminPermissionPage'

Vue.use(Router)

var router = new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'test',
    //   component: test,
    //   meta: {
    //     title: 'mycloud-test'
    //   },
    // },
    {
      path: '/',
      name: 'homePage',
      component: homePage,
      meta: {
        title: 'mycloud-首页'
      },
    },
    {
      path: '/user/queryUploadFile',
      name: 'userQueryUploadFilePage',
      component: userQueryUploadFilePage,
      meta: {
        title: 'mycloud-查询上传'
      },
    },
    {
      path: '/user/own',
      name: 'userOwnPage',
      component: userOwnPage,
      meta: {
        title: 'mycloud-文件管理'
      },
    },
    {
      path: '/user/user',
      name: 'userUserPage',
      component: userUserPage,
      meta: {
        title: 'mycloud-个人主页'
      },
    },
    {
      path: '/admin/own',
      name: 'adminOwnPage',
      component: adminOwnPage,
      meta: {
        title: 'mycloud-所属管理'
      },
    },
    {
      path: '/admin/driveInfo',
      name: 'adminDriveInfoPage',
      component: adminDriveInfoPage,
      meta: {
        title: 'mycloud-文件配置'
      },
    },
    {
      path: '/admin/task',
      name: 'adminTaskPage',
      component: adminTaskPage,
      meta: {
        title: 'mycloud-任务日志'
      },
    },
    {
      path: '/admin/exceptionInfo',
      name: 'adminExceptionInfoPage',
      component: adminExceptionInfoPage,
      meta: {
        title: 'mycloud-异常日志'
      },
    },
    {
      path: '/admin/user',
      name: 'adminUserPage',
      component: adminUserPage,
      meta: {
        title: 'mycloud-用户管理'
      },
    },
    {
      path: '/admin/permission',
      name: 'adminPermissionPage',
      component: adminPermissionPage,
      meta: {
        title: 'mycloud-权限管理'
      },
    },
    {
      path: '/admin/userAuthorization',
      name: 'adminUserAuthorizationPage',
      component: adminUserAuthorizationPage,
      meta: {
        title: 'mycloud-授权管理'
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
