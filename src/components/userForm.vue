<template>
  <b-form inline>
    <b-input v-model="userForm.username" type="text" size="sm" placeholder="账号"/>
    <b-input v-model="userForm.userPassword" type="password" size="sm" placeholder="密码"/>
    <b-button variant="outline-success" size="sm" @click="addUser">添加</b-button>
  </b-form>
</template>

<!--<user-form/>-->

<script>
  import adminUser from '../adminApi/adminUser'
  import util from '../utils/util'

  export default {
    name: "userForm",
    data() {
      return {
        userForm: {username: null, userPassword: null},
      }
    },
    methods: {
      addUser: function () {
        adminUser.addUser(this.userForm)
          .then(res => {
            util.successInfo('添加成功')
            this.userForm = {username: null, userPassword: null}
          })
      },
    }
  }
</script>

<style scoped>

</style>
