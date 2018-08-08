<template>
  <b-container>
    <b-row>
      <b-col>
        <navbar></navbar>
      </b-col>
    </b-row>
    <br/>
    <b-row>
      <b-col>
        <b-container fluid>
          <b-row>
            <b-col sm="0" md="2" lg="3" xl="3"></b-col>
            <b-col sm="12" md="8" lg="6" xl="6">
              <user-user></user-user>
            </b-col>
          </b-row>
        </b-container>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import navbar from './navbar'
  import userUser from './user-user'
    export default {
        name: "page-user-user",
      components: {
        'navbar': navbar,
        'user-user': userUser,
      },
    }
</script>

<style scoped>

</style>
