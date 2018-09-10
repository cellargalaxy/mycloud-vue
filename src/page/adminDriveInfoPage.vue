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
        <drive-info-table/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import navbar from '../components/navbar'
  import driveInfoTable from '../components/driveInfoTable'

  export default {
    name: "adminDriveInfoPage",
    components: {
      'navbar': navbar,
      'drive-info-table': driveInfoTable,
    },
  }
</script>

<style scoped>

</style>
