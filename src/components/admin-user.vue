<template>
  <b-container fluid>

    <b-row>
      <b-col cols="auto">
        <b-input-group prepend="">
          <b-input :value="userForm.username" v-model="userForm.username" type="text" size="sm" placeholder="账号"/>
          <b-input :value="userForm.userPassword" v-model="userForm.userPassword" type="password" size="sm"
                   placeholder="密码"/>
          <b-input-group-append>
            <b-button size="sm" variant="success" @click="addUser">添加</b-button>
          </b-input-group-append>
        </b-input-group>
      </b-col>

      <b-col cols="auto">
        <b-input-group prepend="">
          <b-input :value="userQuery.pageSize" v-model="userQuery.pageSize" type="number" min="1" placeholder="页大小"
                   size="sm"/>
          <b-input :value="userQuery.page" v-model="userQuery.page" type="number" min="1" placeholder="页" size="sm"/>
          <b-input-group-append>
            <b-button variant="primary" size="sm" @click="listUser">查询</b-button>
          </b-input-group-append>
        </b-input-group>
      </b-col>
    </b-row>

    <b-row>
      <b-table hover responsive small caption-top :fields="fields" :items="users">
        <template slot="username" slot-scope="data">
          <b-form-input v-model="users[data.index].username" :value="data.value" type="text" placeholder="账号"
                        size="sm"></b-form-input>
        </template>
        <template slot="userPassword" slot-scope="data">
          <b-form-input v-model="users[data.index].userPassword" :value="data.value" type="password" placeholder="密码"
                        size="sm"></b-form-input>
        </template>

        <template slot="操作" slot-scope="data">
          <b-button-group>
            <b-button variant="warning" size="sm" @click="changeUser(data.index)">修改</b-button>
            <b-button variant="danger" size="sm" @click="removeUser(data.index)">删除</b-button>
          </b-button-group>
        </template>
      </b-table>
    </b-row>

    <b-row>
      <b-col align-self="center">
        <pagination v-on:turnPage="turnPage" :total="total" :pageSize="userQuery.pageSize"></pagination>
      </b-col>
    </b-row>

  </b-container>
</template>

<script>
  import adminApi from '../utils/admin-api'
  import util from '../utils/util'
  import pagination from './pagination'

  export default {
    name: "admin-user",
    data() {
      return {
        userForm: {username: null, userPassword: null},
        userQuery: {pageSize: 10, page: 1, userId: null, username: null, createTime: null, updateTime: null},
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
        total: 0,

      }
    },
    created: function () {
      this.listUser()
      this.getUserCount()
    },
    methods: {
      addUser: function () {
        adminApi.addUser(this.userForm.username, this.userForm.userPassword)
          .then(res => {
            util.successInfo('添加成功')
            this.userForm = {username: null, userPassword: null};
            this.listUser()
            this.getUserCount()
          })
      },
      changeUser: function (index) {
        adminApi.changeUser(this.users[index].userId, this.users[index].username, this.users[index].userPassword)
          .then(res => {
            util.successInfo('修改成功')
            this.listUser()
          })
      },
      removeUser: function (index) {
        adminApi.removeUser(this.users[index].userId)
          .then(res => {
            util.successInfo('删除成功')
            this.listUser()
            this.getUserCount()
          })
      },
      listUser: function () {
        adminApi.listUserByQuery(this.userQuery)
          .then(res => {
              this.users = res.data.data;
              for (let i = 0; i < this.users.length; i++) {
                this.users[i].createTime = util.formatTimestamp(this.users[i].createTime, 'yyyy-MM-dd hh:mm:ss')
                this.users[i].updateTime = util.formatTimestamp(this.users[i].updateTime, 'yyyy-MM-dd hh:mm:ss')
                this.users[i].userPassword = null;
              }
            },
          )
      },
      getUserCount: function () {
        adminApi.getUserCountByQuery(this.userQuery)
          .then(res => {
            this.total = res.data.data;
          })
      },
      turnPage: function (page) {
        this.userQuery.page = page;
        this.listUser()
      },
    },
    components: {
      'pagination': pagination,
    },
  }
</script>

<style scoped>

</style>
