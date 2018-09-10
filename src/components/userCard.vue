<template>
  <b-card>
    <b-form>
      <b-button-group size="sm">
        <b-button>权限</b-button>
        <b-button v-for="(authorization,authorizationIndex) in currentUserAuthorization.authorizations"
                  v-text="authorization.permissionName" :key="authorizationIndex"></b-button>
      </b-button-group>
    </b-form>

    <br/>

    <b-form>
      <b-input-group prepend="新账号" size="sm">
        <b-form-input v-model="user.username"></b-form-input>
        <b-input-group-append>
          <b-btn variant="outline-warning" @click="changeUser">修改账号</b-btn>
        </b-input-group-append>
      </b-input-group>
    </b-form>

    <br/>

    <b-form>
      <b-input-group prepend="新密码" size="sm">
        <b-form-input v-model="user.userPassword"></b-form-input>
        <b-input-group-append>
          <b-btn variant="outline-warning" @click="changeUser">修改密码</b-btn>
        </b-input-group-append>
      </b-input-group>
    </b-form>
  </b-card>
</template>

<!--<user-card/>-->

<script>
  import util from '../utils/util'
  import userUser from '../userApi/userUser'
  import publicApi from '../commonApi/publicApi'

  export default {
    name: "userCard",
    data() {
      return {
        currentUserAuthorization: null,
        user: {userId: 0, username: null, userPassword: null},
      }
    },
    created: function () {
      this.created()
    },
    methods: {
      created: function () {
        this.currentUserAuthorization = publicApi.getCurrentUserAuthorization()
        if (this.currentUserAuthorization != null) {
          this.user.userId = this.currentUserAuthorization.user.userId
        }
      },
      changeUser: function () {
        userUser.changeUser(this.user)
          .then(res => {
            util.successInfo('修改成功')
            this.user.username = null
            this.user.userPassword = null
          })
      },
    },
  }
</script>

<style scoped>

</style>
