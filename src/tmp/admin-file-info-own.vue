<!--<template>-->
  <!--<b-container fluid>-->

    <!--<b-row>-->
      <!--<b-col sm="6" md="4" lg="3" xl="2" v-for="(fileInfoOwn,fileInfoOwnIndex) in fileInfoOwns" :key="fileInfoOwnIndex">-->
        <!--<b-card no-body>-->
          <!--<b-link target="_blank" :href="fileInfoOwn.fileInfo.url">-->
            <!--<b-img-lazy :src="fileInfoOwn.fileInfo.url" center fluid-grow blank-color="#bbb"/>-->
          <!--</b-link>-->
          <!--<b-list-group flush>-->
            <!--<b-list-group-item>-->
              <!--<code v-text="fileInfoOwn.fileInfo.url"></code><br/>-->
              <!--<code v-text="fileInfoOwn.fileInfo.md5"></code><br/>-->
              <!--大小：<code v-text="fileInfoOwn.fileInfo.fileLength"></code>-->
              <!--类型：<code v-text="fileInfoOwn.fileInfo.contentType"></code><br/>-->
              <!--创建日期：<code v-text="fileInfoOwn.fileInfo.createTime"></code><br/>-->
            <!--</b-list-group-item>-->
            <!--<b-list-group-item>-->
              <!--<b-input-group size="sm">-->
                <!--<b-button size="sm" variant="danger" @click="removeFileInfo(fileInfoOwnIndex)">删除文件</b-button>-->
                <!--<b-form-select :options="users" v-model="fileInfoOwns[fileInfoOwnIndex].ownForm.userId"/>-->
                <!--<b-input-group-append>-->
                  <!--<b-button variant="success" @click="addOwn(fileInfoOwnIndex)">添加所属</b-button>-->
                <!--</b-input-group-append>-->
              <!--</b-input-group>-->
            <!--</b-list-group-item>-->
            <!--<b-list-group-item>-->
              <!--<b-badge v-for="(own,ownIndex) in fileInfoOwn.owns" v-text="own.username" :key="ownIndex"-->
                       <!--@click="showModal(fileInfoOwnIndex,ownIndex)"></b-badge>-->
            <!--</b-list-group-item>-->
          <!--</b-list-group>-->
        <!--</b-card>-->
      <!--</b-col>-->
    <!--</b-row>-->

    <!--<b-modal ref="own" centered :title="'所属('+own.username+')'" ok-only>-->
      <!--<b-link target="_blank" :href="own.url">-->
        <!--<b-img :src="own.url!=null?own.url:''" center fluid-grow blank-color="#bbb"/>-->
      <!--</b-link>-->
      <!--<b-list-group flush>-->
        <!--<b-list-group-item>-->
          <!--<code v-text="own.url"></code><br/>-->
          <!--MD5:<code v-text="own.md5"></code><br/>-->
          <!--大小：<code v-text="own.fileLength"></code>-->
          <!--类型：<code v-text="own.contentType"></code>-->
        <!--</b-list-group-item>-->
        <!--<b-list-group-item>-->
          <!--<b-input-group prepend="文件名" size="sm">-->
            <!--<b-form-input v-model="own.fileName" :value="own.fileName" type="text" placeholder="文件名"/>-->
          <!--</b-input-group>-->
          <!--<b-input-group prepend="分类" size="sm">-->
            <!--<b-form-input v-model="own.sort" :value="own.sort" type="text" placeholder="新分类"/>-->
          <!--</b-input-group>-->
        <!--</b-list-group-item>-->
        <!--<b-list-group-item>-->
          <!--<b-form-textarea :value="own.description"-->
                           <!--v-model="own.description"-->
                           <!--maxlength="256" placeholder="描述"></b-form-textarea>-->
        <!--</b-list-group-item>-->
        <!--<b-list-group-item>-->
          <!--<b-button variant="warning" size="sm" @click="changeOwn">修改</b-button>-->
          <!--<b-button variant="danger" size="sm" @click="removeOwn">删除</b-button>-->
        <!--</b-list-group-item>-->
      <!--</b-list-group>-->
    <!--</b-modal>-->

    <!--<b-row>-->
      <!--<b-col align-self="center">-->
        <!--<pagination v-on:turnPage="turnPage" :total="total" :pageSize="fileInfoOwnQuery.pageSize"></pagination>-->
      <!--</b-col>-->
    <!--</b-row>-->
  <!--</b-container>-->
<!--</template>-->

<!--<script>-->
  <!--import util from '../utils/util'-->
  <!--import adminApi from '../utils/admin-api'-->
  <!--import pagination from './pagination'-->

  <!--export default {-->
    <!--name: "admin-file-info-own",-->
    <!--data() {-->
      <!--return {-->
        <!--fileInfoOwnQuery: {-->
          <!--pageSize: 100,-->
          <!--page: 1,-->
          <!--fileId: 0,-->
          <!--md5: null,-->
          <!--fileLength: null,-->
          <!--contentType: null,-->
          <!--createTime: null,-->
          <!--updateTime: null-->
        <!--},-->
        <!--fileInfoOwns: [],-->
        <!--total: 0,-->
        <!--own: {-->
          <!--ownId: 0,-->
          <!--userId: 0,-->
          <!--fileId: 0,-->
          <!--fileName: null,-->
          <!--sort: null,-->
          <!--description: null,-->
          <!--createTime: null,-->
          <!--updateTime: null,-->
          <!--username: null,-->
          <!--md5: null,-->
          <!--fileLength: null,-->
          <!--contentType: null,-->
          <!--url: null-->
        <!--},-->
        <!--userQuery: {pageSize: 100, page: 1, userId: null, username: null, createTime: null, updateTime: null},-->
        <!--users: [],-->
      <!--}-->
    <!--},-->
    <!--created: function () {-->
      <!--this.listUser()-->
      <!--this.getFileInfoCount()-->
      <!--this.listFileInfoOwn()-->
    <!--},-->
    <!--methods: {-->
      <!--listFileInfoOwn: function () {-->
        <!--adminApi.listFileInfoOwnByQuery(this.fileInfoOwnQuery)-->
          <!--.then(res => {-->
            <!--for (let i = 0; i < res.data.data.length; i++) {-->
              <!--res.data.data[i].fileInfo.createTime = util.formatTimestamp(res.data.data[i].fileInfo.createTime, 'yyyy-MM-dd hh:mm:ss')-->
              <!--res.data.data[i].fileInfo.updateTime = util.formatTimestamp(res.data.data[i].fileInfo.updateTime, 'yyyy-MM-dd hh:mm:ss')-->
              <!--res.data.data[i].fileInfo.fileLength = util.formatFileSize(res.data.data[i].fileInfo.fileLength)-->
              <!--res.data.data[i].ownForm = {-->
                <!--userId: 0,-->
                <!--fileId: res.data.data[i].fileInfo.fileId,-->
                <!--fileName: 'default',-->
                <!--sort: 'default',-->
                <!--description: null-->
              <!--}-->
            <!--}-->
            <!--this.fileInfoOwns = res.data.data-->
          <!--})-->
      <!--},-->
      <!--showModal: function (fileInfoOwnIndex, ownIndex) {-->
        <!--this.own = this.fileInfoOwns[fileInfoOwnIndex].owns[ownIndex];-->
        <!--this.$refs.own.show()-->
      <!--},-->
      <!--hideModal: function () {-->
        <!--this.own = null;-->
        <!--this.$refs.own.hide()-->
      <!--},-->
      <!--changeOwn: function () {-->
        <!--adminApi.changeOwn(this.own.ownId, this.own.userId, this.own.fileId, this.own.fileName, this.own.sort, this.own.description)-->
          <!--.then(res => {-->
            <!--util.successInfo('修改成功')-->
            <!--this.listFileInfoOwn()-->
          <!--})-->
      <!--},-->
      <!--removeOwn: function () {-->
        <!--adminApi.removeOwn(this.own.ownId)-->
          <!--.then(res => {-->
            <!--util.successInfo('删除成功')-->
            <!--this.hideModal()-->
            <!--this.listFileInfoOwn()-->
            <!--this.getFileInfoCount()-->
          <!--})-->
      <!--},-->
      <!--listUser: function () {-->
        <!--adminApi.listUserByQuery(this.userQuery)-->
          <!--.then(res => {-->
              <!--this.users = [];-->
              <!--for (let i = 0; i < res.data.data.length; i++) {-->
                <!--this.users.push({value: res.data.data[i].userId, text: res.data.data[i].username})-->
              <!--}-->
            <!--},-->
          <!--)-->
      <!--},-->
      <!--turnPage: function (page) {-->
        <!--this.fileInfoOwnQuery.page = page;-->
        <!--this.listFileInfoOwn()-->
      <!--},-->
      <!--removeFileInfo: function (fileInfoOwnIndex) {-->
        <!--adminApi.removeFile(this.fileInfoOwns[fileInfoOwnIndex].fileInfo.fileId)-->
          <!--.then(res => {-->
            <!--util.successInfo('删除成功')-->
            <!--this.listFileInfoOwn()-->
            <!--this.getFileInfoCount()-->
          <!--})-->
      <!--},-->
      <!--getFileInfoCount: function () {-->
        <!--adminApi.getFileInfoCountByQuery(this.fileInfoOwnQuery)-->
          <!--.then(res => {-->
            <!--this.total = res.data.data;-->
          <!--})-->
      <!--},-->
      <!--addOwn: function (fileInfoOwnIndex) {-->
        <!--adminApi.addOwn(this.fileInfoOwns[fileInfoOwnIndex].ownForm.userId, this.fileInfoOwns[fileInfoOwnIndex].ownForm.fileId, this.fileInfoOwns[fileInfoOwnIndex].ownForm.fileName, this.fileInfoOwns[fileInfoOwnIndex].ownForm.sort, this.fileInfoOwns[fileInfoOwnIndex].ownForm.description)-->
          <!--.then(res => {-->
            <!--util.successInfo('添加成功')-->
            <!--this.fileInfoOwns[fileInfoOwnIndex].ownForm = {-->
              <!--userId: 0,-->
              <!--fileId: this.fileInfoOwns[fileInfoOwnIndex].fileInfo.fileId,-->
              <!--fileName: 'default',-->
              <!--sort: 'default',-->
              <!--description: null-->
            <!--}-->
            <!--this.listFileInfoOwn()-->
            <!--this.getFileInfoCount()-->
          <!--})-->
      <!--},-->
    <!--},-->
    <!--components: {-->
      <!--'pagination': pagination,-->
    <!--},-->
  <!--}-->
<!--</script>-->

<!--<style scoped>-->

<!--</style>-->
