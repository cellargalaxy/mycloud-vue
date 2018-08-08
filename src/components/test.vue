<template>
  <pagination v-on:turnPage="turnPage" :total="200" :pageSize="10"></pagination>
</template>

<script>
  import pagination from './admin-user-authorization'

  export default {
    name: "test",
    methods:{
      turnPage:function (page) {
        console.log('page:'+page)
      }
    },
    components: {
      'pagination': pagination,
    },
  }
</script>

<style scoped>

</style>
