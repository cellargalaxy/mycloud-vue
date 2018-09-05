<template>
  <b-row>
    <b-col>
      <b-card>
        <b-button @click="chooseSort(null)" size="sm" variant="link">取消选择</b-button>
        <b-form-radio-group v-model="sort" :options="sorts" @input="chooseSort"/>
      </b-card>
    </b-col>
  </b-row>
</template>

<!-- <sort-badge-wall @chooseSort="chooseSort" :sorts="sorts"/> -->

<script>
  export default {
    name: "sortBadgeWall",
    data() {
      return {
        sort: null,
      }
    },
    props: {
      sorts: {
        default: function () {
          return ['动漫', '电影', '游戏']
        }
      },
    },
    methods: {
      chooseSort: function (val) {
        this.sort = val
        this.$emit('chooseSort', this.sort)
      },
    },
  }
</script>

<style scoped>

</style>
