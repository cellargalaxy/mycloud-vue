<template>
  <b-table hover responsive small caption-top :fields="fields" :items="userAuthorizations">
    <template slot="username" slot-scope="data">
      {{userAuthorizations[data.index].user.username}}
    </template>

    <template slot="authorization" slot-scope="data">
      <b-badge v-for="(authorization,authorizationIndex) in userAuthorizations[data.index].authorizations"
               :key="authorizationIndex"
               :title="authorization.updateTime">
        {{authorization.permissionName}}
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
</template>

<!--<user-authorization-table/>-->

<script>
  import adminUser from '../adminApi/adminUser'
  import adminPermission from '../adminApi/adminPermission'
  import adminAuthorization from '../adminApi/adminAuthorization'
  import common from '../commonApi/common'
  import util from '../utils/util'

  export default {
    name: "userAuthorizationTable",
    data() {
      return {
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
        permissions: [],
        userAuthorizations: [],
      }
    },
    watch: {
      userAuthorizations(val) {
        this.userAuthorizations = val
        for (let i = 0; i < this.userAuthorizations.length; i++) {
          this.userAuthorizations[i] = common.initUserAuthorization(this.userAuthorizations[i])
        }
      },
    },
    created: function () {
      this.created()
    },
    methods: {
      created: function () {
        this.listAllPermission()
        this.listAllUserAuthorization()
      },
      listAllPermission: function () {
        this.permissions = []
        adminPermission.listAllPermission()
          .then(res => {
            for (let i = 0; i < res.data.data.length; i++) {
              this.permissions.push({value: res.data.data[i].permissionId, text: res.data.data[i].permissionName});
            }
          })
      },
      listAllUserAuthorization: function () {
        this.userAuthorizations = []
        adminUser.listAllUserAuthorization()
          .then(res => {
            this.userAuthorizations = res.data.data;
          })
      },
      addAuthorization: function (userAuthorizationIndex) {
        adminAuthorization.addAuthorization(this.userAuthorizations[userAuthorizationIndex].authorizationForm)
          .then(res => {
            util.successInfo('添加成功')
            this.userAuthorizations[userAuthorizationIndex].authorizationForm.permissionId = 0;
            this.listAllUserAuthorization()
          })
      },
      removeAuthorization: function (userAuthorizationIndex, authorizationIndex) {
        adminAuthorization.removeAuthorization(this.userAuthorizations[userAuthorizationIndex].authorizations[authorizationIndex])
          .then(res => {
            util.successInfo('删除成功')
            this.listAllUserAuthorization()
          })
      },
    },
  }
</script>

<style scoped>

</style>
