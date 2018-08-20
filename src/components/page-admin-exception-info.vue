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
        <admin-exception-info></admin-exception-info>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import navbar from './navbar'
  import adminExceptionInfo from './admin-exception-info'

  export default {
    name: "page-admin-exception-info",
    components: {
      'navbar': navbar,
      'admin-exception-info': adminExceptionInfo,
    },
  }
</script>

<style scoped>

</style>
