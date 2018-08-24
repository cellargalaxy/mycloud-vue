<template>
  <b-navbar toggleable="xl" type="light" variant="light">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand href="#/">
      <img src="/static/favicon.ico" fluid class="d-inline-block align-top" alt="mycloud"
           style="max-height: 2em;"/>
      mycloud
    </b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">

      <b-navbar-nav>
        <b-nav-item v-show="hasPermission('USER')" href="#/user/uploadFile"
                    :active="this.$route.path=='/user/uploadFile'">上传文件
        </b-nav-item>
        <b-nav-item v-show="hasPermission('USER')" href="#/user/own" :active="this.$route.path=='/user/own'">文件管理
        </b-nav-item>
        <b-nav-item v-show="hasPermission('USER')" href="#/user/user" :active="this.$route.path=='/user/user'">个人主页
        </b-nav-item>
        <b-nav-item v-show="hasPermission('ADMIN')" href="#/admin/fileInfoOwn"
                    :active="this.$route.path=='/admin/fileInfoOwn'">所属管理
        </b-nav-item>
        <b-nav-item v-show="hasPermission('ADMIN')" href="#/admin/file"
                    :active="this.$route.path=='/admin/file'">文件配置
        </b-nav-item>
        <b-nav-item v-show="hasPermission('ADMIN')" href="#/admin/exceptionInfo"
                    :active="this.$route.path=='/admin/exceptionInfo'">异常日志
        </b-nav-item>
        <b-nav-item v-show="hasPermission('ADMIN')" href="#/admin/task" :active="this.$route.path=='/admin/task'">任务日志
        </b-nav-item>
        <b-nav-item v-show="hasPermission('ROOT')" href="#/admin/user" :active="this.$route.path=='/admin/user'">用户管理
        </b-nav-item>
        <b-nav-item v-show="hasPermission('ROOT')" href="#/admin/userAuthorization"
                    :active="this.$route.path=='/admin/userAuthorization'">授权管理
        </b-nav-item>
        <b-nav-item v-show="hasPermission('ROOT')" href="#/admin/permission"
                    :active="this.$route.path=='/admin/permission'">权限管理
        </b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-form @submit="login" v-show="!logined">
          <b-form-input v-model="loginForm.username" size="sm" type="text" placeholder="账号"/>
          <b-form-input v-model="loginForm.password" size="sm" type="password" placeholder="密码"/>
          <b-button size="sm" type="submit">登录</b-button>
        </b-nav-form>
        <b-nav-item v-show="logined" href="#/" :active="this.$route.path=='/'" @click="logout">
          <b-button size="sm">注销</b-button>
        </b-nav-item>
      </b-navbar-nav>

    </b-collapse>

  </b-navbar>
</template>

<script>
  import util from '../utils/util'
  import publicApi from '../utils/public-api'

  export default {
    name: "navbar",
    data() {
      return {
        loginForm: {username: null, password: null},
        userAuthorization: null,
      }
    },
    created: function () {
      this.getUserAuthorization()
    },
    computed: {
      logined: function () {
        return this.userAuthorization != null;
      }
    },
    methods: {
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
      login(evt) {
        evt.preventDefault();
        publicApi.login(this.loginForm.username, this.loginForm.password)
          .then(res => {
            if (res.data.status != 1) {
              alert(res.data.massage)
              return;
            }
            publicApi.setToken(res.data.data)
            util.successInfo('登录成功')
            this.getUserAuthorization()
          })
          .catch(error => {
            alert(error)
          });
      },
      logout: function () {
        publicApi.setToken(null)
        this.userAuthorization = null
        publicApi.setCurrentUserAuthorization(this.userAuthorization);
      },
      getUserAuthorization() {
        this.userAuthorization = publicApi.getCurrentUserAuthorization();
        if (this.userAuthorization != null) {
          return;
        }
        publicApi.getUserAuthorization(this.loginForm.username)
          .then(res => {
            if (res.data.status != 1) {
              alert(res.data.massage)
              return;
            }
            this.userAuthorization = res.data.data;
            publicApi.setCurrentUserAuthorization(this.userAuthorization);
          })
          .catch(error => {
            this.loginForm = {username: null, password: null};
            this.userAuthorization = null;
          });
      },
    }
  }
</script>

<style scoped>

</style>
