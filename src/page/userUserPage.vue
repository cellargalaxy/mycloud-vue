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
        <user-card/>
      </b-col>
      <b-col sm="0" md="2" lg="2" xl="3"/>
    </b-row>
  </b-container>
</template>

<script>
  import navbar from '../components/navbar'
  import userCard from '../components/userCard'
    export default {
        name: "userUserPage",
      components: {
        'navbar': navbar,
        'user-card': userCard,
      },
    }
</script>

<style scoped>

</style>
