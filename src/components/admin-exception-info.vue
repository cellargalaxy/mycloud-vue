<template>
  <b-container fluid>
    <b-row>
      <b-table :fields="fields" :items="exceptionInfos">

        <template slot="异常栈" slot-scope="row">
          <b-button size="sm" @click.stop="row.toggleDetails">异常栈</b-button>
        </template>

        <template slot="row-details" slot-scope="row">
          <pre><code v-text="row.item.exceptionStack"></code></pre>
        </template>

      </b-table>
    </b-row>
  </b-container>
</template>

<script>
  import adminApi from '../utils/admin-api'
  import util from '../utils/util'

  export default {
    name: "admin-exception-info",
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
    created:function () {
      adminApi.listExceptionInfo()
        .then(res => {
          this.exceptionInfos = res.data.data;
          for (let i = 0; i < this.exceptionInfos.length; i++) {
            this.exceptionInfos[i].date = util.formatTimestamp(this.exceptionInfos[i].date, 'yyyy-MM-dd hh:mm:ss');
          }
        })
    }
  }
</script>

<style scoped>

</style>
