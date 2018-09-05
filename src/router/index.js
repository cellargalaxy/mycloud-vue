import Vue from 'vue'
import Router from 'vue-router'
import userOwnPage from '../page/userOwnPage'
import test from '../page/userOwnPage'

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
    // {
    //   path: '/',
    //   name: 'pageHome',
    //   component: pageHome,
    //   meta: {
    //     title: 'mycloud-首页'
    //   },
    // },
    // {
    //   path: '/user/uploadFile',
    //   name: 'pageUploadFile',
    //   component: pageUserUploadFile,
    //   meta: {
    //     title: 'mycloud-上传文件'
    //   },
    // },
    {
      path: '/user/own',
      name: 'userOwnPage',
      component: userOwnPage,
      meta: {
        title: 'mycloud-文件管理'
      },
    },
    // {
    //   path: '/admin/user',
    //   name: 'pageAdminUser',
    //   component: pageAdminUser,
    //   meta: {
    //     title: 'mycloud-用户管理'
    //   },
    // },
    // {
    //   path: '/admin/exceptionInfo',
    //   name: 'pageAdminExceptionInfo',
    //   component: pageAdminExceptionInfo,
    //   meta: {
    //     title: 'mycloud-异常日志'
    //   },
    // },
    // {
    //   path: '/admin/permission',
    //   name: 'pageAdminPermission',
    //   component: pageAdminPermission,
    //   meta: {
    //     title: 'mycloud-权限管理'
    //   },
    // },
    // {
    //   path: '/admin/userAuthorization',
    //   name: 'pageAdminUserAuthorization',
    //   component: pageAdminUserAuthorization,
    //   meta: {
    //     title: 'mycloud-授权管理'
    //   },
    // },
    // {
    //   path: '/admin/task',
    //   name: 'pageAdminTask',
    //   component: pageAdminTask,
    //   meta: {
    //     title: 'mycloud-任务日志'
    //   },
    // },
    // {
    //   path: '/user/user',
    //   name: 'pageUserUser',
    //   component: pageUserUser,
    //   meta: {
    //     title: 'mycloud-个人主页'
    //   },
    // },
    // {
    //   path: '/admin/file',
    //   name: 'pageAdminFile',
    //   component: pageAdminFile,
    //   meta: {
    //     title: 'mycloud-文件配置'
    //   },
    // },
    // {
    //   path: '/admin/fileInfoOwn',
    //   name: 'pageAdminFileInfoOwn',
    //   component: pageAdminFileInfoOwn,
    //   meta: {
    //     title: 'mycloud-所属管理'
    //   },
    // },
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
