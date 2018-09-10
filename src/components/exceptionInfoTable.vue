<template>
  <b-table :fields="fields" :items="exceptionInfos">
    <template slot="异常栈" slot-scope="row">
      <b-button size="sm" @click.stop="row.toggleDetails">异常栈</b-button>
    </template>

    <template slot="row-details" slot-scope="row">
      <pre><code v-text="row.item.exceptionStack"></code></pre>
    </template>
  </b-table>
</template>

<!--<exception-info-table/>-->

<script>
  import adminExceptionInfo from '../adminApi/adminExceptionInfo'
  import common from '../commonApi/common'

  export default {
    name: "exceptionInfoTable",
    data() {
      return {
        fields: [
          '异常栈',
          {
            key: 'status',
            label: '状态',
          },
          {
            key: 'massage',
            label: '信息',
          },
          {
            key: 'date',
            label: '日期',
            sortable: true,
          },
        ],
        exceptionInfos: []
      }
    },
    created: function () {
      adminExceptionInfo.listExceptionInfo()
        .then(res => {
          this.exceptionInfos = res.data.data;
          for (let i = 0; i < this.exceptionInfos.length; i++) {
            this.exceptionInfos[i] = common.initExceptionInfo(this.exceptionInfos[i])
          }
        })
    }
  }
</script>

<style scoped>

</style>
