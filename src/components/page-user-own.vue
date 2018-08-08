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
        <user-own></user-own>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import navbar from './navbar'
  import userOwn from './user-own'
  export default {
    name: "page-user-own",

    components: {
      'navbar': navbar,
      'user-own': userOwn,
    },
  }
</script>

<style scoped>

</style>
