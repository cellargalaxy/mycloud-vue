import Vue from 'vue'
import Router from 'vue-router'
import pageUserUploadFile from '../components/page-user-upload-file'
import pageUserOwn from '../components/page-user-own'
import pageAdminUser from '../components/page-admin-user'
import pageAdminExceptionInfo from '../components/page-admin-exception-info'
import pageAdminPermission from '../components/page-admin-permission'
import pageAdminUserAuthorization from '../components/page-admin-user-authorization'
import pageAdminTask from '../components/page-admin-task'
import pageUserUser from '../components/page-user-user'
import pageAdminFileInfoOwn from '../components/page-admin-file-info-own'
import pageHome from '../components/page-home'
import pageAdminFile from '../components/page-admin-file'

Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '/',
      name: 'pageHome',
      component: pageHome,
      meta: {
        title: 'mycloud-首页'
      },
    },
    {
      path: '/user/uploadFile',
      name: 'pageUploadFile',
      component: pageUserUploadFile,
      meta: {
        title: 'mycloud-上传文件'
      },
    },
    {
      path: '/user/own',
      name: 'pageUserOwn',
      component: pageUserOwn,
      meta: {
        title: 'mycloud-文件管理'
      },
    },
    {
      path: '/admin/user',
      name: 'pageAdminUser',
      component: pageAdminUser,
      meta: {
        title: 'mycloud-用户管理'
      },
    },
    {
      path: '/admin/exceptionInfo',
      name: 'pageAdminExceptionInfo',
      component: pageAdminExceptionInfo,
      meta: {
        title: 'mycloud-异常日志'
      },
    },
    {
      path: '/admin/permission',
      name: 'pageAdminPermission',
      component: pageAdminPermission,
      meta: {
        title: 'mycloud-权限管理'
      },
    },
    {
      path: '/admin/userAuthorization',
      name: 'pageAdminUserAuthorization',
      component: pageAdminUserAuthorization,
      meta: {
        title: 'mycloud-授权管理'
      },
    },
    {
      path: '/admin/task',
      name: 'pageAdminTask',
      component: pageAdminTask,
      meta: {
        title: 'mycloud-任务日志'
      },
    },
    {
      path: '/user/user',
      name: 'pageUserUser',
      component: pageUserUser,
      meta: {
        title: 'mycloud-个人主页'
      },
    },
    {
      path: '/admin/file',
      name: 'pageAdminFile',
      component: pageAdminFile,
      meta: {
        title: 'mycloud-文件配置'
      },
    },
    {
      path: '/admin/fileInfoOwn',
      name: 'pageAdminFileInfoOwn',
      component: pageAdminFileInfoOwn,
      meta: {
        title: 'mycloud-所属管理'
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
