<template>
  <b-container fluid>
    <b-row>
      <b-col>
        <navbar/>
      </b-col>
    </b-row>

    <br/>

    <task-layout @turnPage="turnPage" :waitTasks="waitTasks" :tasks="tasks" :total="total"
                 :pageSize="takeQuery.pageSize"/>
  </b-container>
</template>

<script>
  import navbar from '../components/navbar'
  import taskLayout from '../components/taskLayout'
  import adminTask from '../adminApi/adminTask'

  export default {
    name: "adminTaskPage",
    data() {
      return {
        waitTasks: [],
        tasks: [],
        total: 0,
        takeQuery: adminTask.createTaskQuery(),
      }
    },
    created: function () {
      this.created()
    },
    methods: {
      created: function () {
        this.listWaitTask()
        this.listTask()
        this.getTaskCount()
      },
      turnPage: function (page) {
        this.takeQuery.page = page
        this.listTask()
      },
      listWaitTask: function () {
        this.waitTasks = []
        adminTask.listWaitTask()
          .then(res => {
            this.waitTasks = res.data.data;
          })
      },
      listTask: function () {
        this.tasks = []
        adminTask.listTask(this.takeQuery)
          .then(res => {
            this.tasks = res.data.data;
          })
      },
      getTaskCount: function () {
        adminTask.getTaskCount(this.takeQuery)
          .then(res => {
            this.total = res.data.data;
          })
      }
    },
    components: {
      'navbar': navbar,
      'task-layout': taskLayout,
    },
  }
</script>

<style scoped>

</style>
