<template>
  <b-navbar toggleable="xl" type="light" variant="light">

    <b-navbar-toggle target="nav_collapse"/>

    <b-navbar-brand href="#/">
      <img src="/static/favicon.ico" fluid class="d-inline-block align-top" alt="mycloud" style="max-height: 2em;"/>
      mycloud
    </b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
        <my-nav-item v-show="hasPermission('USER')" :title="'查询上传'" :url="'/user/queryUploadFile'"/>
        <my-nav-item v-show="hasPermission('USER')" :title="'文件管理'" :url="'/user/own'"/>
        <my-nav-item v-show="hasPermission('USER')" :title="'个人主页'" :url="'/user/user'"/>
        <my-nav-item v-show="hasPermission('ROOT')" :title="'用户管理'" :url="'/admin/user'"/>
        <my-nav-item v-show="hasPermission('ROOT')" :title="'授权管理'" :url="'/admin/userAuthorization'"/>
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

<navbar/>

<script>
  import util from '../utils/util'
  import account from '../utils/account'
  import userUser from '../userApi/userUser'
  import publicApi from '../commonApi/publicApi'
  import myNavItem from './myNavItem'

  export default {
    name: "navbar",
    data() {
      return {
        loginForm: {username: null, password: null},
        userVo: null,
      }
    },
    created: function () {
      this.userVo = account.getAccount()
      if (this.userVo == null) {
        this.logout()
      }
    },
    computed: {
      logined: function () {
        return account.logined()
      }
    },
    methods: {
      getAccount() {
        this.userVo = account.getAccount()
        if (this.userVo == null) {
          userUser.getUserVo()
            .then(data => {
              this.userVo = data.data
              account.setAccount(this.userVo)
              util.successInfo('登录成功')
            })
            .catch(error => {
              this.logout()
            });
        }
      },
      hasPermission: function (permission) {
        if (this.userVo == null || this.userVo.authorizations == null) {
          return false;
        }
        for (let i = 0; i < this.userVo.authorizations.length; i++) {
          if (this.userVo.authorizations[i].permission == permission) {
            return true;
          }
        }
        return false;
      },
      login: function (evt) {
        evt.preventDefault();
        publicApi.login(this.loginForm.username, this.loginForm.password)
          .then(data => {
            account.setToken(data.data)
            this.getAccount()
          })
      },
      logout: function () {
        this.loginForm = {username: null, password: null}
        this.userVo = null
        account.logout()
      },
    },
    components: {
      myNavItem,
    },
  }
</script>

<style scoped>

</style>
