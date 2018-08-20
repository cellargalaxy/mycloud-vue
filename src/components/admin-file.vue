<template>
  <b-container fluid>
    <b-row>
      <b-table hover :items="driveInfo" :fields="driveInfoFields"></b-table>
    </b-row>
    <b-row>
      <b-button-group>
        <b-button variant="success" @click="restoreAllFileToLocal">恢复全部文件到本地</b-button>
        <b-button variant="info" @click="startRestoreAllFileToLocal">开始自动同步文件到本地</b-button>
        <b-button variant="warning" @click="stopRestoreAllFileToLocal">停止自动同步文件到本地</b-button>
        <b-button variant="danger" @click="deleteAllFileFromLocal">删除全部文件从本地</b-button>
      </b-button-group>
    </b-row>
  </b-container>
</template>

<script>
  import util from '../utils/util'
  import adminApi from '../utils/admin-api'

  export default {
    name: "admin-file",
    data() {
      return {
        driveInfoFields: [
          {
            key: 'freeSpace',
            label: '空闲磁盘空间',
          },
          {
            key: 'totalSpace',
            label: '总磁盘空间',
          },
          {
            key: 'freePhysicalMemorySize',
            label: '空闲物理内存',
          },
          {
            key: 'totalPhysicalMemorySize',
            label: '总物理内存',
          },
          {
            key: 'processCpuLoad',
            label: '进程CPU负载',
          },
          {
            key: 'systemCpuLoad',
            label: ' 系统CPU负载',
          },
          {
            key: 'freeSwapSpaceSize',
            label: '空闲交换内存',
          },
          {
            key: 'totalSwapSpaceSize',
            label: '总交换内存',
          },
        ],
        driveInfo: [],
      }
    },
    created: function () {
      this.getDriveInfo()
    },
    methods: {
      getDriveInfo: function () {
        adminApi.getDriveInfo()
          .then(res => {
            this.driveInfo = [res.data.data];
            for (let i = 0; i < this.driveInfo.length; i++) {
              this.driveInfo[i].freeSpace = util.formatFileSize(this.driveInfo[i].freeSpace);
              this.driveInfo[i].totalSpace = util.formatFileSize(this.driveInfo[i].totalSpace);
              this.driveInfo[i].freePhysicalMemorySize = util.formatFileSize(this.driveInfo[i].freePhysicalMemorySize);
              this.driveInfo[i].totalPhysicalMemorySize = util.formatFileSize(this.driveInfo[i].totalPhysicalMemorySize);
              this.driveInfo[i].freeSwapSpaceSize = util.formatFileSize(this.driveInfo[i].freeSwapSpaceSize);
              this.driveInfo[i].totalSwapSpaceSize = util.formatFileSize(this.driveInfo[i].totalSwapSpaceSize);
            }
          })
      },
      restoreAllFileToLocal: function () {
        adminApi.restoreAllFileToLocal()
          .then(res => {
            util.successInfo('操作成功')
          })
      },
      startRestoreAllFileToLocal: function () {
        adminApi.startRestoreAllFileToLocal()
          .then(res => {
            util.successInfo('操作成功')
          })
      },
      stopRestoreAllFileToLocal: function () {
        adminApi.stopRestoreAllFileToLocal()
          .then(res => {
            util.successInfo('操作成功')
          })
      },
      deleteAllFileFromLocal: function () {
        adminApi.deleteAllFileFromLocal()
          .then(res => {
            util.successInfo('操作成功')
          })
      },
    }
  }
</script>

<style scoped>

</style>
