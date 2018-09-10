<template>
  <b-table hover responsive small caption-top :fields="fields" :items="permissions">
    <template slot="permissionId" slot-scope="data">
      <b-form-input v-model="permissions[data.index].permissionId"
                    type="number" placeholder="权限id" size="sm"></b-form-input>
    </template>

    <template slot="permissionName" slot-scope="data">
      <b-form-input v-model="permissions[data.index].permissionName"
                    type="text" placeholder="密码" size="sm"></b-form-input>
    </template>

    <template slot="操作" slot-scope="data">
      <b-button-group>
        <b-button variant="warning" size="sm" @click="changePermission(data.index)">修改</b-button>
        <b-button variant="danger" size="sm" @click="removePermission(data.index)">删除</b-button>
      </b-button-group>
    </template>
  </b-table>
</template>

<script>
  import adminPermission from '../adminApi/adminPermission'
  import common from '../commonApi/common'
  import util from '../utils/util'

  export default {
    name: "permissionTable",
    data() {
      return {
        fields: [
          {
            key: 'permissionId',
            label: '权限id',
          },
          {
            key: 'permissionName',
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
      this.listAllPermission()
    },
    methods: {
      changePermission: function (permissionIndex) {
        adminPermission.changePermission(this.permissions[permissionIndex])
          .then(res => {
            util.successInfo('修改成功')
            this.listAllPermission()
          })
      },
      removePermission: function (permissionIndex) {
        adminPermission.removePermission(this.permissions[permissionIndex])
          .then(res => {
            util.successInfo('删除成功')
            this.listAllPermission()
          })
      },
      listAllPermission: function () {
        this.permissions = []
        adminPermission.listAllPermission()
          .then(res => {
            this.permissions = res.data.data;
            for (let i = 0; i < this.permissions.length; i++) {
              this.permissions[i] = common.initPermission(this.permissions[i])
            }
          })
      },
    },
  }
</script>

<style scoped>

</style>
