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
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import navbar from './navbar'

  export default {
    name: "page-home",
    components: {
      'navbar': navbar,
    },
  }
</script>

<style scoped>

</style>
