<!--<template>-->
  <!--<div>-->
    <!--<b-card title="通过MD5查询文件" img-bottom-->
            <!--:img-src="fileInfo.url">-->
      <!--<b-form inline>-->
        <!--<b-input type="text" placeholder="MD5" v-model="fileInfoQuery.md5"/>-->
        <!--<b-button variant="primary" @click="getFileInfo">查询</b-button>-->
        <!--<b-button variant="success" @click="addOwn">保存</b-button>-->
      <!--</b-form>-->
      <!--<div v-show="fileInfo.url!=null&&fileInfo.url!=''">-->
        <!--<b-form-group label="">-->
          <!--<b-input-group prepend="文件名">-->
            <!--<b-form-input v-model="ownForm.fileName" type="text" placeholder="文件名"/>-->
          <!--</b-input-group>-->
          <!--<b-input-group prepend="分类">-->
            <!--<b-form-input v-model="ownForm.sort" type="text" placeholder="新分类"></b-form-input>-->
            <!--<b-form-select :options="sorts" v-model="ownForm.sort"/>-->
          <!--</b-input-group>-->
        <!--</b-form-group>-->

        <!--<b-form-group label="">-->
          <!--<b-form-textarea v-model="ownForm.description" placeholder="描述" rows="3"-->
                           <!--maxlength="256"></b-form-textarea>-->
        <!--</b-form-group>-->
      <!--</div>-->
    <!--</b-card>-->

    <!--<br/>-->

    <!--<b-card title="上传文件">-->
      <!--<b-form @submit="uploadFile">-->

        <!--<b-form-group label="">-->
          <!--<b-form-file v-model="uploadFileForm.files" :state="Boolean(uploadFileForm.files)" :no-drop="true"-->
                       <!--:multiple="true"-->
                       <!--placeholder="可以选择多个文件"></b-form-file>-->
        <!--</b-form-group>-->

        <!--<b-form-group label="">-->
          <!--<b-input-group prepend="">-->
            <!--<b-form-input v-model="uploadFileForm.sort" type="text" placeholder="新分类"></b-form-input>-->
            <!--<b-form-select :options="sorts" v-model="uploadFileForm.sort"/>-->
          <!--</b-input-group>-->
        <!--</b-form-group>-->

        <!--<b-form-group label="">-->
          <!--<b-form-textarea v-model="uploadFileForm.description" placeholder="描述" rows="3"-->
                           <!--maxlength="256"></b-form-textarea>-->
        <!--</b-form-group>-->

        <!--<b-button type="submit" variant="primary" style="width: 100%">上传</b-button>-->

      <!--</b-form>-->
    <!--</b-card>-->

  <!--</div>-->
<!--</template>-->

<!--<script>-->
  <!--import util from '../utils/util'-->
  <!--import userApi from '../utils/user-api'-->

  <!--export default {-->
    <!--name: "user-upload-file",-->
    <!--data() {-->
      <!--return {-->
        <!--sortQuery: {-->
          <!--pageSize: 100,-->
          <!--page: 1,-->
          <!--fileId: 0,-->
          <!--fileName: null,-->
          <!--sort: null,-->
          <!--description: null,-->
          <!--createTime: null,-->
          <!--updateTime: null-->
        <!--},-->
        <!--sorts: [],-->
        <!--uploadFileForm: {-->
          <!--files: [],-->
          <!--sort: 'default',-->
          <!--description: null,-->
        <!--},-->
        <!--fileInfoQuery: {-->
          <!--fileId: 0, md5: null, fileLength: 0, contentType: null, createTime: null-->
        <!--},-->
        <!--fileInfo: {url: ''},-->
        <!--ownForm: {-->
          <!--fileId: 0,-->
          <!--fileName: null,-->
          <!--sort: null,-->
          <!--description: null-->
        <!--}-->
      <!--}-->
    <!--},-->
    <!--created: function () {-->
      <!--this.listSort()-->
    <!--},-->
    <!--methods: {-->
      <!--listSort: function () {-->
        <!--userApi.listSortByQuery(this.sortQuery)-->
          <!--.then(res => {-->
            <!--this.sorts = [{value: 'default', text: '默认'}]-->
            <!--for (let i = 0; i < res.data.data.length; i++) {-->
              <!--this.sorts.push({value: res.data.data[i], text: res.data.data[i]})-->
            <!--}-->
          <!--})-->
      <!--},-->
      <!--uploadFile(evt) {-->
        <!--evt.preventDefault();-->
        <!--userApi.uploadFile(this.uploadFileForm.files, (this.uploadFileForm.sort != null && this.uploadFileForm.sort != '') ? this.uploadFileForm.sort : 'default', this.uploadFileForm.description)-->
          <!--.then(res => {-->
              <!--if (res.data.status != 1) {-->
                <!--alert(res.data.massage)-->
                <!--return;-->
              <!--}-->
              <!--util.successInfo('上传成功')-->
              <!--console.log(res.data)-->
            <!--},-->
            <!--error => {-->
              <!--util.errorInfo('上传失败:' + error)-->
            <!--}-->
          <!--)-->
      <!--},-->
      <!--getFileInfo: function () {-->
        <!--userApi.getFileInfoByQuery(this.fileInfoQuery)-->
          <!--.then(res => {-->
            <!--if (res.data.data == null) {-->
              <!--util.errorInfo('找不到md5为(' + this.fileInfoQuery.md5 + ')的文件')-->
              <!--return;-->
            <!--}-->
            <!--this.fileInfo = res.data.data;-->
            <!--this.ownForm.fileId = this.fileInfo.fileId;-->
          <!--})-->
      <!--},-->
      <!--addOwn: function () {-->
        <!--userApi.addOwn(this.ownForm.fileId, this.ownForm.fileName, this.ownForm.sort, this.ownForm.description)-->
          <!--.then(res => {-->
            <!--util.successInfo('添加成功')-->
            <!--this.fileInfo = {url: ''};-->
            <!--this.ownForm = {-->
              <!--fileId: 0,-->
              <!--fileName: null,-->
              <!--sort: null,-->
              <!--description: null-->
            <!--}-->
          <!--})-->
      <!--}-->
    <!--}-->
  <!--}-->
<!--</script>-->

<!--<style scoped>-->

<!--</style>-->
