<template>
  <b-container fluid>

    <b-row>
      <b-col cols="auto">
        <b-input-group prepend="">
          <b-input :value="permissionForm.permissionId" v-model="permissionForm.permissionId" type="number" size="sm"
                   placeholder="权限id"/>
          <b-input :value="permissionForm.permissionMark" v-model="permissionForm.permissionMark" type="text" size="sm"
                   placeholder="权限"/>
          <b-input-group-append>
            <b-button size="sm" variant="success" @click="addPermission">添加</b-button>
          </b-input-group-append>
        </b-input-group>
      </b-col>
    </b-row>

    <b-row>
      <b-table hover responsive small caption-top :fields="fields" :items="permissions">
        <template slot="permissionId" slot-scope="data">
          <b-form-input v-model="permissions[data.index].permissionId" :value="data.value" type="number"
                        placeholder="权限id"
                        size="sm"></b-form-input>
        </template>
        <template slot="permissionMark" slot-scope="data">
          <b-form-input v-model="permissions[data.index].permissionMark" :value="data.value" type="text"
                        placeholder="密码"
                        size="sm"></b-form-input>
        </template>

        <template slot="操作" slot-scope="data">
          <b-button-group>
            <b-button variant="warning" size="sm" @click="changePermission(data.index)">修改</b-button>
            <b-button variant="danger" size="sm" @click="removePermission(data.index)">删除</b-button>
          </b-button-group>
        </template>
      </b-table>
    </b-row>

  </b-container>
</template>

<script>
  import adminApi from '../utils/admin-api'
  import util from '../utils/util'

  export default {
    name: "admin-permission",
    data() {
      return {
        permissionForm: {permissionId: 0, permissionMark: null},
        fields: [
          {
            key: 'permissionId',
            label: '权限id',
          },
          {
            key: 'permissionMark',
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
        permissions: [],
      }
    },
    created: function () {
      this.listPermission()
    },
    methods: {
      addPermission: function () {
        adminApi.addPermission(this.permissionForm.permissionId, this.permissionForm.permissionMark)
          .then(res => {
            util.successInfo('添加成功')
            this.permissionForm = {permissionId: 0, permissionMark: null};
            this.listPermission()
          })
      },
      changePermission: function (permissionIndex) {
        adminApi.changePermission(this.permissions[permissionIndex].permissionId, this.permissions[permissionIndex].permissionMark)
          .then(res => {
            util.successInfo('修改成功')
            this.listPermission()
          })
      },
      removePermission: function (permissionIndex) {
        adminApi.removePermission(this.permissions[permissionIndex].permissionId)
          .then(res => {
            util.successInfo('删除成功')
            this.listPermission()
          })
      },
      listPermission: function () {
        adminApi.listPermission()
          .then(res => {
            this.permissions = res.data.data;
            for (let i = 0; i < this.permissions.length; i++) {
              this.permissions[i].createTime = util.formatTimestamp(this.permissions[i].createTime, 'yyyy-MM-dd hh:mm:ss')
              this.permissions[i].updateTime = util.formatTimestamp(this.permissions[i].updateTime, 'yyyy-MM-dd hh:mm:ss')
            }
          })
      },
    },
    components: {},
  }
</script>

<style scoped>

</style>
