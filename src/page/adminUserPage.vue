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
        <user-form/>
      </b-col>
    </b-row>

    <br/>

    <b-row>
      <b-col>
        <user-table/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import navbar from '../components/navbar'
  import userForm from '../components/userForm'
  import userTable from '../components/userTable'

  export default {
    name: "adminUserPage",
    components: {
      'navbar': navbar,
      'user-form': userForm,
      'user-table': userTable,
    },
  }
</script>

<style scoped>

</style>
