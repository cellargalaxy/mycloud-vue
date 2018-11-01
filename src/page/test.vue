<template>
  <!--<navbar/>-->
</template>

<script>
  import navbar from '../components/userCard'

  export default {
    name: "test",
    methods: {
      turnPage: function (page) {
        console.log('page:' + page)
      }
    },
    components: {
      navbar,
    },
  }
</script>

<style scoped>

</style>
