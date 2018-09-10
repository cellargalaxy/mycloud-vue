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
        <exception-info-table/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import navbar from '../components/navbar'
  import exceptionInfoTable from '../components/exceptionInfoTable'

  export default {
    name: "adminExceptionInfoPage",
    components: {
      'navbar': navbar,
      'exception-info-table': exceptionInfoTable,
    },
  }
</script>

<style scoped>

</style>
