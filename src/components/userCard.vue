<template>
  <b-card>
    <b-form>
      <b-button-group size="sm">
        <b-button>权限</b-button>
        <b-button v-for="(authorization,authorizationIndex) in currentUserVo.authorizations"
                  v-text="authorization.permission" :key="authorizationIndex"/>
      </b-button-group>

      <b-button-group size="sm">
        <b-button variant="success" @click="downloadTar">下载全部文件</b-button>
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

<user-card/>

<script>
  import util from '../utils/util'
  import account from '../utils/account'
  import userUser from '../userApi/userUser'
  import userFile from '../userApi/userFile'

  export default {
    name: "userCard",
    data() {
      return {
        currentUserVo: null,
        user: {userId: 0, username: null, userPassword: null},
      }
    },
    created: function () {
      this.created()
    },
    methods: {
      created: function () {
        this.currentUserVo = account.getAccount()
        if (this.currentUserVo != null) {
          this.user.userId = this.currentUserVo.user.userId
        }
      },
      changeUser: function () {
        userUser.changeUser(this.user)
          .then(data => {
            util.successInfo('修改成功')
            this.user.username = null
            this.user.userPassword = null
          })
      },
      downloadTar: function () {
        userFile.downloadTar()
      },
    },
  }
</script>

<style scoped>

</style>
