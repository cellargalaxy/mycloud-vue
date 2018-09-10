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
        <user-authorization-table/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import navbar from '../components/navbar'
  import userAuthorizationTable from '../components/userAuthorizationTable'

  export default {
    name: "adminUserAuthorizationPage",
    components: {
      'navbar': navbar,
      'user-authorization-table': userAuthorizationTable,
    },
  }
</script>

<style scoped>

</style>
