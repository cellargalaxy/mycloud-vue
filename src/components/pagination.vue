<template>
  <b-pagination :total-rows="total" :per-page="pageSize" v-model="currentPage" @change="change"
                align="center"></b-pagination>
</template>

<script>
  export default {
    name: "pagination",
    data() {
      return {
        currentPage: 1
      }
    },
    methods: {
      change: function (page) {
        this.$emit('turnPage', page)
      },
    },
    props: ['total', 'pageSize'],
  }
</script>

<style scoped>

</style>
