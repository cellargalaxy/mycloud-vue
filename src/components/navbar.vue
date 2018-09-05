<template>
  <b-navbar toggleable="xl" type="light" variant="light">

    <b-navbar-toggle target="nav_collapse"/>

    <b-navbar-brand href="#/">
      <img src="/static/favicon.ico" fluid class="d-inline-block align-top" alt="mycloud" style="max-height: 2em;"/>
      mycloud
    </b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
        <my-nav-item v-show="hasPermission('USER')" :title="'上传文件'" :url="'/user/uploadFile'"/>
        <my-nav-item v-show="hasPermission('USER')" :title="'文件管理'" :url="'/user/own'"/>
        <my-nav-item v-show="hasPermission('USER')" :title="'个人主页'" :url="'/user/user'"/>
        <my-nav-item v-show="hasPermission('ADMIN')" :title="'所属管理'" :url="'/admin/fileInfoOwn'"/>
        <my-nav-item v-show="hasPermission('ADMIN')" :title="'文件配置'" :url="'/admin/file'"/>
        <my-nav-item v-show="hasPermission('ADMIN')" :title="'异常日志'" :url="'/admin/exceptionInfo'"/>
        <my-nav-item v-show="hasPermission('ADMIN')" :title="'任务日志'" :url="'/admin/task'"/>
        <my-nav-item v-show="hasPermission('ROOT')" :title="'用户管理'" :url="'/admin/user'"/>
        <my-nav-item v-show="hasPermission('ROOT')" :title="'授权管理'" :url="'/admin/userAuthorization'"/>
        <my-nav-item v-show="hasPermission('ROOT')" :title="'权限管理'" :url="'/admin/permission'"/>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-form v-show="!logined" @submit="login">
          <b-form-input v-model="loginForm.username" size="sm" type="text" placeholder="账号"/>
          <b-form-input v-model="loginForm.password" size="sm" type="password" placeholder="密码"/>
          <b-button size="sm" type="submit">登录</b-button>
        </b-nav-form>

        <b-nav-item v-show="logined" href="#/" @click="logout">
          <b-button size="sm">注销</b-button>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>

  </b-navbar>
</template>

<script>
  import util from '../utils/util'
  import publicApi from '../commonApi/publicApi'
  import myNavItem from './myNavItem'

  export default {
    name: "navbar",
    data() {
      return {
        loginForm: {username: null, password: null},
        token: null,
        userAuthorization: null,
      }
    },
    created: function () {
      this.getUserAuthorization()
    },
    computed: {
      logined: function () {
        return this.userAuthorization != null
      }
    },
    methods: {
      getUserAuthorization() {
        this.userAuthorization = publicApi.getCurrentUserAuthorization()
        if (this.userAuthorization == null) {
          publicApi.getUserAuthorization(this.token, this.loginForm.username)
            .then(res => {
              if (res.data.status != 1) {
                util.errorInfo(res.data.massage)
                return
              }
              this.userAuthorization = res.data.data
              publicApi.setLogin(this.userAuthorization)
              util.successInfo('登录成功')
            })
            .catch(error => {
              this.logout()
            });
        }
      },
      hasPermission: function (permission) {
        if (this.userAuthorization == null || this.userAuthorization.authorizations == null) {
          return false;
        }
        for (let i = 0; i < this.userAuthorization.authorizations.length; i++) {
          if (this.userAuthorization.authorizations[i].permissionName == permission) {
            return true;
          }
        }
        return false;
      },
      login: function (evt) {
        evt.preventDefault();
        publicApi.login(this.loginForm.username, this.loginForm.password)
          .then(res => {
            this.token = res.data.data
            this.getUserAuthorization()
          })
      },
      logout: function () {
        this.loginForm = {username: null, password: null}
        this.userAuthorization = null
        publicApi.setLogout()
      },
    },
    components: {
      'my-nav-item': myNavItem,
    },
  }
</script>

<style scoped>

</style>
