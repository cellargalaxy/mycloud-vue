<template>
  <b-container fluid>
    <b-row>
      <b-col>
        <navbar/>
      </b-col>
    </b-row>

    <br/>

    <b-row>
      <b-col sm="2" md="3" lg="4" xl="4"/>
      <b-col sm="8" md="6" lg="4" xl="4">
        <user-card/>
      </b-col>
      <b-col sm="2" md="3" lg="4" xl="4"/>
    </b-row>
  </b-container>
</template>

<script>
  import navbar from '../components/navbar'
  import userCard from '../components/userCard'

  export default {
    name: "userUserPage",
    components: {
      navbar,
      userCard,
    },
  }
</script>

<style scoped>

</style>
