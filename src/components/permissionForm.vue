<template>
  <b-form inline>
    <b-input v-model="permissionForm.permissionId" type="number" size="sm" placeholder="权限id"/>
    <b-input v-model="permissionForm.permissionName" type="text" size="sm" placeholder="权限"/>
    <b-button variant="outline-success" size="sm" @click="addPermission">添加</b-button>
  </b-form>
</template>

<script>
  import adminPermission from '../adminApi/adminPermission'
  import util from '../utils/util'

  export default {
    name: "permissionForm",
    data() {
      return {
        permissionForm: {permissionId: 0, permissionName: null},
      }
    },
    methods: {
      addPermission: function () {
        adminPermission.addPermission(this.permissionForm)
          .then(res => {
            util.successInfo('添加成功')
            this.permissionForm = {permissionId: 0, permissionName: null}
          })
      },
    }
  }
</script>

<style scoped>

</style>
