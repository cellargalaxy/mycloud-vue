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
        <admin-file-info-own></admin-file-info-own>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import navbar from './navbar'
  import adminFileInfoOwn from './admin-file-info-own'

  export default {
    name: "page-admin-file-info-own",
    components: {
      'navbar': navbar,
      'admin-file-info-own': adminFileInfoOwn,
    },
  }
</script>

<style scoped>

</style>
