<template>
  <b-container fluid>
    <b-row>
      <b-table :fields="fields" :items="waitTasks">

        <template slot="任务详情" slot-scope="row">
          <b-button size="sm" @click.stop="row.toggleDetails">任务详情</b-button>
        </template>

        <template slot="row-details" slot-scope="row">
          <pre><code v-text="row.item.taskDetail"></code></pre>
        </template>

      </b-table>
    </b-row>

    <b-row>
      <b-table :fields="fields" :items="tasks">

        <template slot="任务详情" slot-scope="row">
          <b-button size="sm" @click.stop="row.toggleDetails">任务详情</b-button>
        </template>

        <template slot="row-details" slot-scope="row">
          <b-form-textarea plaintext :value="row.item.taskDetail" :rows="3"></b-form-textarea>
        </template>

      </b-table>
    </b-row>
  </b-container>
</template>

<script>
  import adminApi from '../utils/admin-api'
  import util from '../utils/util'

  export default {
    name: "admin-task",
    data() {
      return {
        fields: [
          '任务详情',
          {
            key: 'taskSort',
            label: '任务类型',
          },
          {
            key: 'status',
            label: '状态',
          },
          {
            key: 'username',
            label: '提交用户',
          },
          {
            key: 'massage',
            label: '信息',
          },
          {
            key: 'createTime',
            label: '创建时间',
            sortable: true,
          },
          {
            key: 'finishTime',
            label: '完成时间',
            sortable: true,
          },
        ],
        waitTasks: [],
        tasksQuery: {
          taskId: 0,
          userId: 0,
          createTime: null,
          taskSor: null,
          status: 0,
          massage: null,
          finishTime: null
        },
        tasks: [],
      }
    },
    created: function () {
      this.listWaitTask()
      this.listTask()
    },
    methods: {
      listWaitTask: function () {
        adminApi.listWaitTask()
          .then(res => {
            this.waitTasks = res.data.data;
            for (let i = 0; i < this.waitTasks.length; i++) {
              this.waitTasks[i].createTime = util.formatTimestamp(this.waitTasks[i].createTime, 'yyyy-MM-dd hh:mm:ss');
              this.waitTasks[i].finishTime = util.formatTimestamp(this.waitTasks[i].finishTime, 'yyyy-MM-dd hh:mm:ss');
              this.waitTasks[i].status = this.getStatusName(this.waitTasks[i].status)
            }
          })
      },
      listTask: function () {
        adminApi.listTaskByQuery(this.tasksQuery)
          .then(res => {
            this.tasks = res.data.data;
            for (let i = 0; i < this.tasks.length; i++) {
              this.tasks[i].createTime = util.formatTimestamp(this.tasks[i].createTime, 'yyyy-MM-dd hh:mm:ss');
              this.tasks[i].finishTime = util.formatTimestamp(this.tasks[i].finishTime, 'yyyy-MM-dd hh:mm:ss');
              this.tasks[i].status = this.getStatusName(this.tasks[i].status)
            }
          })
      },
      getStatusName: function (status) {
        if (status == 1) {
          return '等待执行'
        } else if (status == 2) {
          return '正在执行'
        } else if (status == 3) {
          return '已被取消'
        } else if (status == 4) {
          return '执行成功'
        } else if (status == 5) {
          return '执行失败'
        }
      },
    },
  }
</script>

<style scoped>

</style>
