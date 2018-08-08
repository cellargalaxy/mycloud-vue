<template>
  <b-container fluid>

    <b-row>
      <b-col cols="auto">
        <b-input-group prepend="">
          <b-input :value="ownQuery.pageSize" v-model="ownQuery.pageSize" type="number" min="1" placeholder="页大小"
                   size="sm"/>
          <b-input :value="ownQuery.page" v-model="ownQuery.page" type="number" min="1" placeholder="页" size="sm"/>
          <b-input-group-append>
            <b-button variant="primary" size="sm" @click="listOwn">查询</b-button>
          </b-input-group-append>
        </b-input-group>
      </b-col>
    </b-row>

    <b-row>
      <b-col sm="12" md="6" lg="4" xl="4" v-for="(own,ownIndex) in owns" :key="ownIndex">
        <b-card no-body>
          <b-link target="_blank" :href="own.url">
            <b-img :src="own.url" center fluid-grow blank-color="#bbb"/>
          </b-link>
          <b-list-group flush>
            <b-list-group-item>
              <code v-text="own.url"></code><br/>
              MD5:<code v-text="own.md5"></code><br/>
              大小：<code v-text="own.fileLength"></code>
              类型：<code v-text="own.contentType"></code>
            </b-list-group-item>
            <b-list-group-item>
              <b-input-group prepend="文件名" size="sm">
                <b-form-input v-model="owns[ownIndex].fileName" :value="own.fileName" type="text" placeholder="文件名"/>
              </b-input-group>
              <b-input-group prepend="分类" size="sm">
                <b-form-input v-model="owns[ownIndex].sort" :value="own.sort" type="text" placeholder="新分类"/>
                <b-form-select :options="sorts" v-model="owns[ownIndex].sort" :value="owns[ownIndex].sort"/>
              </b-input-group>
            </b-list-group-item>
            <b-list-group-item>
              <b-form-textarea :value="own.description"
                               v-model="owns[ownIndex].description"
                               maxlength="256" placeholder="描述"></b-form-textarea>
            </b-list-group-item>
            <b-list-group-item>
              <b-button variant="warning" size="sm" @click="changeOwn(ownIndex)">修改</b-button>
              <b-button variant="danger" size="sm" @click="removeOwn(ownIndex)">删除</b-button>
            </b-list-group-item>
          </b-list-group>
        </b-card>
      </b-col>
    </b-row>

    <b-row>
      <b-col align-self="center">
        <pagination v-on:turnPage="turnPage" :total="total" :pageSize="ownQuery.pageSize"></pagination>
      </b-col>
    </b-row>

  </b-container>
</template>

<script>
  import userApi from '../utils/user-api'
  import util from '../utils/util'
  import pagination from './pagination'

  export default {
    name: "user-own",
    data() {
      return {
        ownQuery: {
          pageSize: 20,
          page: 1,
          fileId: 0,
          fileName: null,
          sort: null,
          description: null,
          createTime: null,
          updateTime: null
        },
        owns: [],
        sortQuery: {
          pageSize: 100,
          page: 1,
          fileId: 0,
          fileName: null,
          sort: null,
          description: null,
          createTime: null,
          updateTime: null
        },
        sorts: [],
        total: 0,
      }
    },
    created: function () {
      this.listOwn()
      this.listSort()
      this.getOwnCount()
    },
    methods: {
      changeOwn: function (ownIndex) {
        userApi.changeOwn(this.owns[ownIndex].ownId, this.owns[ownIndex].userId, this.owns[ownIndex].fileId, this.owns[ownIndex].fileName, this.owns[ownIndex].sort, this.owns[ownIndex].description)
          .then(res => {
            if (res.data.status != 1) {
              alert(res.data.massage)
              return;
            }
            alert('修改成功')
            this.listOwn()
            this.listSort()
          })
      },
      removeOwn: function (ownIndex) {
        userApi.removeOwnByFileId(this.owns[ownIndex].fileId)
          .then(res => {
            if (res.data.status != 1) {
              alert(res.data.massage)
              return;
            }
            alert('删除成功')
            this.listOwn()
            this.listSort()
          })
      },
      listOwn: function () {
        userApi.listOwn(this.ownQuery.pageSize, this.ownQuery.page, this.ownQuery.fileId, this.ownQuery.fileName, this.ownQuery.sort, this.ownQuery.description, this.ownQuery.createTime, this.ownQuery.updateTime)
          .then(res => {
            if (res.data.status != 1) {
              alert(res.data.massage)
              return;
            }
            this.owns = res.data.data
            for (let i = 0; i < this.owns.length; i++) {
              this.owns[i].createTime = util.formatTimestamp(this.owns[i].createTime, 'yyyy-MM-dd hh:mm:ss')
              this.owns[i].updateTime = util.formatTimestamp(this.owns[i].updateTime, 'yyyy-MM-dd hh:mm:ss')
              this.owns[i].fileLength = util.formatFileSize(this.owns[i].fileLength)
            }
          })
      },
      listSort: function () {
        userApi.listSort(this.sortQuery.pageSize, this.sortQuery.page, this.sortQuery.fileId, this.sortQuery.fileName, this.sortQuery.sort, this.sortQuery.description, this.sortQuery.createTime, this.sortQuery.updateTime)
          .then(res => {
            if (res.data.status != 1) {
              alert(res.data.massage)
              return;
            }
            this.sorts = [{value: 'default', text: '默认'}]
            for (let i = 0; i < res.data.data.length; i++) {
              this.sorts.push({value: res.data.data[i], text: res.data.data[i]})
            }
          })
      },
      getOwnCount: function () {
        userApi.getOwnCount(this.ownQuery.pageSize, this.ownQuery.page, this.ownQuery.fileId, this.ownQuery.fileName, this.ownQuery.sort, this.ownQuery.description, this.ownQuery.createTime, this.ownQuery.updateTime)
          .then(res => {
            if (res.data.status != 1) {
              alert(res.data.massage)
              return;
            }
            this.total = res.data.data
          })
      },
      turnPage: function (page) {
        this.ownQuery.page = page;
        this.listOwn()
      },
    },
    components: {
      'pagination': pagination,
    },
  }
</script>

<style scoped>

</style>
