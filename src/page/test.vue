<template>
  <navbar/>
</template>

<script>
  import navbar from '../components/recentExpireOwnTable'

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
