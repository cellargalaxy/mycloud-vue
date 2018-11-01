<template>
  <b-card :img-src="fileInfo.url" img-bottom>
    <b-form>
      <b-input-group prepend="md5" size="sm">
        <b-form-input v-model="fileInfo.md5"></b-form-input>
        <b-input-group-append>
          <b-btn variant="outline-secondary" @click="getFileInfo">查询</b-btn>
        </b-input-group-append>
      </b-input-group>

      <b-input-group v-if="fileInfo.url!=null" prepend="" size="sm">
        <b-form-input v-model="own.fileName" placeholder="文件名"></b-form-input>
        <b-form-input v-model="own.sort" placeholder="分类"></b-form-input>
        <b-input-group-append>
          <b-btn variant="outline-success" @click="addOwn">保存</b-btn>
        </b-input-group-append>
      </b-input-group>

      <b-input-group v-if="fileInfo.url!=null" prepend="url" size="sm">
        <b-form-input :value="fileInfo.url" readonly></b-form-input>
      </b-input-group>

      <b-input-group v-if="fileInfo.url!=null" size="sm">
        <b-form-input :value="fileInfo.fileLength" readonly></b-form-input>
        <b-form-input :value="fileInfo.contentType" readonly></b-form-input>
      </b-input-group>
    </b-form>
  </b-card>
</template>

<!-- <file-info-query-card/> -->

<script>
  import util from '../utils/util'
  import common from '../commonApi/common'
  import userFileInfo from '../userApi/userFileInfo'
  import userOwn from '../userApi/userOwn'

  export default {
    name: "fileInfoQueryCard",
    data() {
      return {
        fileInfo: {md5: null, url: null, fileLength: null, contentType: null},
        own: {fileId: 0, fileName: null, sort: null},
      }
    },
    methods: {
      getFileInfo: function () {
        this.fileInfo = {md5: this.fileInfo.md5, url: null, fileLength: null, contentType: null}
        this.own = {fileId: 0, fileName: null, sort: null}
        userFileInfo.getFileInfo(this.fileInfo)
          .then(res => {
            if (res.data.data == null) {
              util.errorInfo('查无文件，md5: ' + this.fileInfo.md5)
            } else {
              this.fileInfo = res.data.data
              this.fileInfo = common.initFileInfo(this.fileInfo)
            }
          })
      },
      addOwn: function () {
        this.own.fileId = this.fileInfo.fileId
        userOwn.addOwn(this.own)
          .then(res => {
            util.successInfo('添加成功')
          })
      }
    },
  }
</script>

<style scoped>

</style>
