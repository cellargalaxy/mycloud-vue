<template>
  <b-table hover responsive small caption-top :fields="fields" :items="users">
    <template slot="username" slot-scope="data">
      <b-form-input v-model="users[data.index].username" type="text" placeholder="账号" size="sm"/>
    </template>

    <template slot="userPassword" slot-scope="data">
      <b-form-input v-model="users[data.index].userPassword" type="password" placeholder="密码" size="sm"/>
    </template>

    <template slot="操作" slot-scope="data">
      <b-button-group>
        <b-button variant="warning" size="sm" @click="changeUser(data.index)">修改</b-button>
        <b-button variant="danger" size="sm" @click="removeUser(data.index)">删除</b-button>
      </b-button-group>
    </template>
  </b-table>
</template>

<!--<user-table/>-->

<script>
  import adminUser from '../adminApi/adminUser'
  import common from '../commonApi/common'
  import util from '../utils/util'

  export default {
    name: "userTable",
    data() {
      return {
        fields: [
          {
            key: 'username',
            label: '账号',
          },
          {
            key: 'userPassword',
            label: '密码',
          },
          {
            key: 'createTime',
            label: '创建时间',
          },
          {
            key: 'updateTime',
            label: '更新时间',
          },
          '操作',
        ],
        users: [],
      }
    },
    created: function () {
      this.listAllUser()
    },
    methods: {
      changeUser: function (index) {
        adminUser.changeUser(this.users[index])
          .then(res => {
            util.successInfo('修改成功')
            this.listAllUser()
          })
      },
      removeUser: function (index) {
        adminUser.removeUser(this.users[index])
          .then(res => {
            util.successInfo('删除成功')
            this.listAllUser()
          })
      },
      listAllUser: function () {
        this.users = []
        adminUser.listAllUser()
          .then(res => {
              this.users = res.data.data;
              for (let i = 0; i < this.users.length; i++) {
                this.users[i] = common.initUser(this.users[i])
              }
            },
          )
      },
    },
  }
</script>

<style scoped>

</style>
