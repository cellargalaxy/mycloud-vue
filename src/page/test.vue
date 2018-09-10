<template>
  <navbar></navbar>
</template>

<script>
  import navbar from '../components/permissionTable'

  export default {
    name: "test",
    methods: {
      turnPage: function (page) {
        console.log('page:' + page)
      }
    },
    components: {
      'navbar': navbar,
    },
  }
</script>

<style scoped>

</style>
