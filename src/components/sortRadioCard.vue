<template>
  <b-row>
    <b-col>
      <b-card>
        <b-form-radio-group v-model="sort">
          <b-form-radio :value="null" @change="chooseSort">取消选择</b-form-radio>
          <b-form-radio v-for="(sort,sortIndex) in sorts" :key="sortIndex" :value="sort" @change="chooseSort">
            {{sort}}
          </b-form-radio>
        </b-form-radio-group>
      </b-card>
    </b-col>
  </b-row>
</template>

<sort-radio-card @chooseSort="chooseSort" :sorts="sorts"/>

<script>
  export default {
    name: "sortRadioCard",
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
