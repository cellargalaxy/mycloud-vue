<template>
  <b-table stacked :items="driveInfos" :fields="driveInfoFields">
    <template slot="删除全部本地文件" slot-scope="row">
      <b-button size="sm" variant="danger" @click="removeAllLocalFile">删除全部本地文件</b-button>
    </template>
  </b-table>
</template>

<!--<drive-info-table/>-->

<script>
  import util from '../utils/util'
  import adminFile from '../adminApi/adminFile'
  import common from '../commonApi/common'

  export default {
    name: "driveInfoTable",
    data() {
      return {
        driveInfoFields: [
          {
            key: 'useSpace',
            label: '已用磁盘',
          },
          {
            key: 'freeSpace',
            label: '空闲磁盘',
          },
          {
            key: 'totalSpace',
            label: '总磁盘',
          },
          {
            key: 'usePhysicalMemorySize',
            label: '已用内存',
          },
          {
            key: 'freePhysicalMemorySize',
            label: '空闲内存',
          },
          {
            key: 'totalPhysicalMemorySize',
            label: '总内存',
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
          {
            key: '删除全部本地文件',
            label: '删除全部本地文件',
          },
        ],
        driveInfos: [],
      }
    },
    created: function () {
      this.getDriveInfo()
    },
    methods: {
      getDriveInfo: function () {
        adminFile.getDriveInfo()
          .then(res => {
            this.driveInfos = [res.data.data];
            for (let i = 0; i < this.driveInfos.length; i++) {
              this.driveInfos[i].usePhysicalMemorySize = this.driveInfos[i].totalPhysicalMemorySize - this.driveInfos[i].freePhysicalMemorySize
            }
            for (let i = 0; i < this.driveInfos.length; i++) {
              this.driveInfos[i] = common.initDriveInfo(this.driveInfos[i])
            }
          })
      },
      removeAllLocalFile: function () {
        adminFile.removeAllLocalFile()
          .then(res => {
            util.successInfo('删除成功')
          })
      },
    },
  }
</script>

<style scoped>

</style>
