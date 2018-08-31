<template>
  <b-container fluid>
    <b-row>
      <b-table hover :items="driveInfo" :fields="driveInfoFields"></b-table>
    </b-row>
    <b-row>
      <b-button-group>
        <b-button variant="danger" @click="removeAllLocalFile">删除全部文件从本地</b-button>
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
            key: 'useSpace',
            label: '已用磁盘空间',
          },
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
              this.driveInfo[i].useSpace = util.formatFileSize(this.driveInfo[i].useSpace);
              this.driveInfo[i].freeSpace = util.formatFileSize(this.driveInfo[i].freeSpace);
              this.driveInfo[i].totalSpace = util.formatFileSize(this.driveInfo[i].totalSpace);
              this.driveInfo[i].freePhysicalMemorySize = util.formatFileSize(this.driveInfo[i].freePhysicalMemorySize);
              this.driveInfo[i].totalPhysicalMemorySize = util.formatFileSize(this.driveInfo[i].totalPhysicalMemorySize);
              this.driveInfo[i].freeSwapSpaceSize = util.formatFileSize(this.driveInfo[i].freeSwapSpaceSize);
              this.driveInfo[i].totalSwapSpaceSize = util.formatFileSize(this.driveInfo[i].totalSwapSpaceSize);
            }
          })
      },
      removeAllLocalFile: function () {
        adminApi.removeAllLocalFile()
          .then(res => {
            util.successInfo('操作成功')
          })
      },
    }
  }
</script>

<style scoped>

</style>
