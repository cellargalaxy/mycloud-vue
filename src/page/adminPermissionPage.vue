<template>
  <b-container fluid>
    <b-row>
      <b-col>
        <navbar/>
      </b-col>
    </b-row>

    <br/>

    <b-row>
      <b-col>
        <permission-form/>
      </b-col>
    </b-row>

    <br/>

    <b-row>
      <b-col>
        <permission-table/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import navbar from '../components/navbar'
  import permissionForm from '../components/permissionForm'
  import permissionTable from '../components/permissionTable'
    export default {
        name: "adminPermissionPage",
      components: {
        'navbar': navbar,
        'permission-form': permissionForm,
        'permission-table': permissionTable,
      },
    }
</script>

<style scoped>

</style>
