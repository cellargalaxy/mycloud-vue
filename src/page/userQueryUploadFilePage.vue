<template>
  <b-container fluid>
    <b-row>
      <b-col>
        <navbar/>
      </b-col>
    </b-row>

    <br/>

    <b-row>
      <b-col sm="0" md="2" lg="2" xl="3"/>
      <b-col sm="12" md="8" lg="8" xl="6">
        <file-info-query-card/>
      </b-col>
      <b-col sm="0" md="2" lg="2" xl="3"/>
    </b-row>

    <br/>

    <b-row>
      <b-col sm="0" md="2" lg="2" xl="3"/>
      <b-col sm="12" md="8" lg="8" xl="6">
        <upload-file-card/>
      </b-col>
      <b-col sm="0" md="2" lg="2" xl="3"/>
    </b-row>
  </b-container>
</template>

<script>
  import navbar from '../components/navbar'
  import fileInfoQueryCard from '../components/fileInfoQueryCard'
  import uploadFileCard from '../components/uploadFileCard'

  export default {
    name: "userQueryUploadFilePage",
    components: {
      'navbar': navbar,
      'file-info-query-card': fileInfoQueryCard,
      'upload-file-card':uploadFileCard,
    },
  }
</script>

<style scoped>

</style>
