<template>
  <div>
    <b-row>
      <b-col>
        <b-table :fields="fields" :items="waitTasks">
          <template slot="任务详情" slot-scope="row">
            <b-button size="sm" @click.stop="row.toggleDetails">任务详情</b-button>
          </template>

          <template slot="row-details" slot-scope="row">
            <b-form-textarea plaintext :value="row.item.taskDetail" :rows="3"/>
          </template>
        </b-table>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <b-table :fields="fields" :items="tasks">
          <template slot="任务详情" slot-scope="row">
            <b-button size="sm" @click.stop="row.toggleDetails">任务详情</b-button>
          </template>

          <template slot="row-details" slot-scope="row">
            <b-form-textarea plaintext :value="row.item.taskDetail" :rows="3"/>
          </template>
        </b-table>
      </b-col>
    </b-row>
  </div>
</template>

<!--<task-table :waitTasks="waitTasks" :tasks="tasks"/>-->

<script>
  import common from '../commonApi/common'

  export default {
    name: "taskTable",
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
      }
    },
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
    },
    watch: {
      waitTasks(val) {
        this.waitTasks = val
        for (let i = 0; i < this.waitTasks.length; i++) {
          this.waitTasks[i] = common.initTask(this.waitTasks[i])
        }
      },
      tasks(val) {
        this.tasks = val
        for (let i = 0; i < this.tasks.length; i++) {
          this.tasks[i] = common.initTask(this.tasks[i])
        }
      },
    },
    created: function () {
      this.created()
    },
    methods: {
      created: function () {
        for (let i = 0; i < this.waitTasks.length; i++) {
          this.waitTasks[i] = common.initTask(this.waitTasks[i])
        }
        for (let i = 0; i < this.tasks.length; i++) {
          this.tasks[i] = common.initTask(this.tasks[i])
        }
      },
    },
  }
</script>

<style scoped>

</style>
