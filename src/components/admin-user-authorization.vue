<template>
  <b-container fluid>

    <b-row>
      <b-col cols="auto">
        <b-input-group prepend="">
          <b-input :value="userAuthorizationQuery.pageSize" v-model="userAuthorizationQuery.pageSize" type="number"
                   min="1" placeholder="页大小" size="sm"/>
          <b-input :value="userAuthorizationQuery.page" v-model="userAuthorizationQuery.page" type="number" min="1"
                   placeholder="页" size="sm"/>
          <b-input-group-append>
            <b-button variant="primary" size="sm" @click="listUserAuthorization">查询</b-button>
          </b-input-group-append>
        </b-input-group>
      </b-col>
    </b-row>

    <b-row>
      <b-table hover responsive small caption-top :fields="fields" :items="userAuthorizations">
        <template slot="username" slot-scope="data">
          {{userAuthorizations[data.index].user.username}}
        </template>
        <template slot="authorization" slot-scope="data">
          <b-badge v-for="(authorization,authorizationIndex) in userAuthorizations[data.index].authorizations" :key="authorizationIndex"
                   :title="authorization.updateTime">{{authorization.permissionMark}}
            <b-link @click="removeAuthorization(data.index,authorizationIndex)">&times;</b-link>
          </b-badge>
        </template>
        <template slot="操作" slot-scope="data">
          <b-input-group prepend="" size="sm">
            <b-form-select :options="permissions"
                           v-model="userAuthorizations[data.index].authorizationForm.permissionId"/>
            <b-input-group-append>
              <b-btn variant="outline-success" @click="addAuthorization(data.index)">添加</b-btn>
            </b-input-group-append>
          </b-input-group>
        </template>
      </b-table>
    </b-row>

    <b-row>
      <b-col align-self="center">
        <pagination v-on:turnPage="turnPage" :total="total" :pageSize="userAuthorizationQuery.pageSize"></pagination>
      </b-col>
    </b-row>

  </b-container>
</template>

<script>
  import adminApi from '../utils/admin-api'
  import util from '../utils/util'
  import pagination from './pagination'

  export default {
    name: "admin-user-authorization",
    data() {
      return {
        userAuthorizationQuery: {
          pageSize: 10,
          page: 1,
          userId: null,
          username: null,
          createTime: null,
          updateTime: null
        },
        fields: [
          {
            key: 'username',
            label: '账号',
          },
          {
            key: 'authorization',
            label: '授权',
          },
          '操作',
        ],
        userAuthorizations: [],
        total: 0,
        permissions: []
      }
    },
    created: function () {
      this.listPermission()
      this.getUserCount()
      this.listUserAuthorization()
    },
    methods: {
      listUserAuthorization: function () {
        adminApi.listUserAuthorization(this.userAuthorizationQuery.pageSize, this.userAuthorizationQuery.page, this.userAuthorizationQuery.userId, this.userAuthorizationQuery.username, this.userAuthorizationQuery.createTime, this.userAuthorizationQuery.updateTime)
          .then(res => {
              if (res.data.status != 1) {
                alert(res.data.massage)
                return;
              }
              this.userAuthorizations = res.data.data;
              for (let i = 0; i < this.userAuthorizations.length; i++) {
                this.userAuthorizations[i].authorizationForm = {
                  userId: this.userAuthorizations[i].user.userId,
                  permissionId: 0
                };
                for (let j = 0; j < this.userAuthorizations[i].authorizations.length; j++) {
                  this.userAuthorizations[i].authorizations[j].createTime = util.formatTimestamp(this.userAuthorizations[i].authorizations[j].createTime, 'yyyy-MM-dd hh:mm:ss')
                  this.userAuthorizations[i].authorizations[j].updateTime = util.formatTimestamp(this.userAuthorizations[i].authorizations[j].updateTime, 'yyyy-MM-dd hh:mm:ss')
                }
              }
            },
          )
      },
      getUserCount: function () {
        adminApi.getUserCount(this.userAuthorizationQuery.pageSize, this.userAuthorizationQuery.page, this.userAuthorizationQuery.userId, this.userAuthorizationQuery.username, this.userAuthorizationQuery.createTime, this.userAuthorizationQuery.updateTime)
          .then(res => {
            if (res.data.status != 1) {
              alert(res.data.massage)
              return;
            }
            this.total = res.data.data;
          })
      },
      listPermission: function () {
        adminApi.listPermission()
          .then(res => {
              if (res.data.status != 1) {
                alert(res.data.massage)
                return;
              }
              this.permissions = [];
              for (let i = 0; i < res.data.data.length; i++) {
                this.permissions.push({value: res.data.data[i].permissionId, text: res.data.data[i].permissionMark});
              }
            },
          )
      },
      addAuthorization: function (userAuthorizationIndex) {
        adminApi.addAuthorization(this.userAuthorizations[userAuthorizationIndex].authorizationForm.userId, this.userAuthorizations[userAuthorizationIndex].authorizationForm.permissionId)
          .then(res => {
            if (res.data.status != 1) {
              alert(res.data.massage)
              return;
            }
            alert('添加成功')
            this.userAuthorizations[userAuthorizationIndex].authorizationForm.permissionId = 0;
            this.getUserCount()
            this.listUserAuthorization()
          })
      },
      turnPage: function (page) {
        this.userAuthorizationQuery.page = page;
        this.listUserAuthorization()
      },
      removeAuthorization: function (userAuthorizationIndex, authorizationIndex) {
        adminApi.removeAuthorization(this.userAuthorizations[userAuthorizationIndex].authorizations[authorizationIndex].authorizationId)
          .then(res => {
            if (res.data.status != 1) {
              alert(res.data.massage)
              return;
            }
            alert('删除成功')
            this.getUserCount()
            this.listUserAuthorization()
          })
      },
    },
    components: {
      'pagination': pagination,
    },
  }
</script>

<style scoped>

</style>
