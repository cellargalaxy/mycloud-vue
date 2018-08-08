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
        <admin-user></admin-user>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import navbar from './navbar'
  import adminUser from './admin-user'
    export default {
        name: "page-admin-user",
      components: {
        'navbar': navbar,
        'admin-user': adminUser,
      },
    }
</script>

<style scoped>

</style>
