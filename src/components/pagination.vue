<template>
  <b-pagination :total-rows="total" :per-page="pageSize" v-model="currentPage" @change="turnPage"
                align="center"/>
</template>

<pagination @turnPage="turnPage" :total="total" :pageSize="pageSize"/>

<script>
  export default {
    name: "pagination",
    props: ['total', 'pageSize'],
    data() {
      return {
        currentPage: 1
      }
    },
    methods: {
      turnPage: function (page) {
        this.$emit('turnPage', page)
      },
    },
  }
</script>

<style scoped>

</style>
