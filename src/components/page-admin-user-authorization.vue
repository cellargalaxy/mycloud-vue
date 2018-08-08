<template>
  <b-container fluid>
    <b-row>
      <b-col>
        <navbar></navbar>
      </b-col>
    </b-row>
    <br/>
    <b-row>
      <b-col>
        <admin-user-authorization></admin-user-authorization>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import navbar from './navbar'
  import adminUserAuthorizationr from './admin-user-authorization'

  export default {
    name: "page-admin-user-authorization",
    components: {
      'navbar': navbar,
      'admin-user-authorization': adminUserAuthorizationr,
    },
  }
</script>

<style scoped>

</style>
