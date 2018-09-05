<!--<template>-->
  <!--<b-card>-->
    <!--你账号的权限:-->
    <!--<b-badge v-for="(authorization,authorizationIndex) in currentUserAuthorization.authorizations"-->
             <!--:key="authorizationIndex" v-text="authorization.permissionName"></b-badge>-->

    <!--<b-form>-->
      <!--<b-form-group label="修改你的账号">-->
        <!--<b-form-input v-model="userForm.username" type="text" required placeholder="新的账号"></b-form-input>-->
      <!--</b-form-group>-->
      <!--<b-form-group label="或者修改你的密码">-->
        <!--<b-form-input v-model="userForm.userPassword" type="password" required placeholder="新的密码"></b-form-input>-->
      <!--</b-form-group>-->
      <!--<b-button variant="warning" style="width: 100%" @click="changeUser">修改</b-button>-->
    <!--</b-form>-->
  <!--</b-card>-->
<!--</template>-->

<!--<script>-->
  <!--import util from '../utils/util'-->
  <!--import publicApi from '../utils/publicApi'-->
  <!--import userApi from '../utils/user-api'-->

  <!--export default {-->
    <!--name: "user-user",-->
    <!--data() {-->
      <!--return {-->
        <!--currentUserAuthorization: null,-->
        <!--userForm: {username: null, userPassword: null},-->
      <!--}-->
    <!--},-->
    <!--created: function () {-->
      <!--this.currentUserAuthorization = publicApi.getCurrentUserAuthorization()-->
    <!--},-->
    <!--methods: {-->
      <!--changeUser: function () {-->
        <!--userApi.changeUser(this.currentUserAuthorization.user.userId, this.userForm.username, this.userForm.userPassword)-->
          <!--.then(res => {-->
            <!--util.successInfo('修改成功')-->
            <!--this.userForm = {username: null, userPassword: null};-->
          <!--})-->
      <!--},-->
    <!--},-->
  <!--}-->
<!--</script>-->

<!--<style scoped>-->

<!--</style>-->
