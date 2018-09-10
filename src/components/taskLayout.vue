<template>
  <div>
    <b-row>
      <b-col>
        <task-table :waitTasks="waitTasks" :tasks="tasks"/>
      </b-col>
    </b-row>

    <br/>

    <b-row>
      <b-col>
        <pagination @turnPage="turnPage" :total="total" :pageSize="pageSize"/>
      </b-col>
    </b-row>
  </div>
</template>

<!--<task-layout @turnPage="turnPage" :waitTasks="waitTasks" :tasks="tasks" :total="total" :pageSize="pageSize"/>-->

<script>
  import taskTable from './taskTable'
  import pagination from './pagination'

  export default {
    name: "taskLayout",
    props: {
      waitTasks: {
        default: function () {
          return [{
            taskId: 1,
            userId: 3,
            createTime: 1535687887000,
            taskSort: "上传文件",
            status: 4,
            massage: null,
            finishTime: 1535687893000,
            taskDetail: "{\"ownPo\":{\"ownId\":0,\"userId\":0,\"fileId\":0,\"fileName\":\"5b7bb5dd4f0df.png\",\"sort\":\"动漫\",\"description\":\"null\",\"createTime\":1535731200000,\"updateTime\":1535731200000},\"contentType\":\"image/png\"}",
            username: 'mycloud'
          }]
        }
      },
      tasks: {
        default: function () {
          return [{
            taskId: 1,
            userId: 3,
            createTime: 1535687887000,
            taskSort: "上传文件",
            status: 4,
            massage: null,
            finishTime: 1535687893000,
            taskDetail: "{\"ownPo\":{\"ownId\":0,\"userId\":0,\"fileId\":0,\"fileName\":\"5b7bb5dd4f0df.png\",\"sort\":\"动漫\",\"description\":\"null\",\"createTime\":1535731200000,\"updateTime\":1535731200000},\"contentType\":\"image/png\"}",
            username: 'mycloud'
          }]
        }
      },
      total: {
        default: 4
      },
      pageSize: {
        default: 20
      },
    },
    methods: {
      turnPage: function (page) {
        this.$emit('turnPage', page)
      },
    },
    components: {
      'task-table': taskTable,
      'pagination': pagination,
    },
  }
</script>

<style scoped>

</style>
