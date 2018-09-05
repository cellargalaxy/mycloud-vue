<template>
  <b-container>

    <b-row>
      <b-col>
        <navbar></navbar>
      </b-col>
    </b-row>

    <br/>

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

    <br/>

    <b-row>
      <b-col align-self="center">
        <pagination v-on:turnPage="turnPage" :total="total" :pageSize="2"></pagination>
      </b-col>
    </b-row>

  </b-container>
</template>

<script>
  import navbar from '../components/navbar'
  import pagination from '../components/pagination'

  export default {
    name: "page-home",
    data() {
      return {
        owns: [
          {
            url: 'https://i.loli.net/2018/08/21/5b7bb5dd4f0df.png',
            md5: '4a2599540220af6579e287bcd96a7c35',
            fileLength: '1.64 MB',
            contentType: 'image/png',
            fileName: '5b7bb5dd4f0df.png',
            sort: '动漫',
            description: '来自深渊'
          },
          {
            url: 'https://i.loli.net/2018/08/21/5b7bbc8ec3633.jpg',
            md5: '84d91144667fb45e1ad9d8d213a089db',
            fileLength: '716 KB',
            contentType: 'image/jpeg',
            fileName: '5b7bbc8ec3633.jpg',
            sort: '动漫',
            description: '宝石之国'
          },
          {
            url: 'https://i.loli.net/2018/04/10/5accdcbcb1738.jpg',
            md5: 'f1098091bf7c85bd106c412b1769d5c2',
            fileLength: '220 KB',
            contentType: 'image/jpeg',
            fileName: '5accdcbcb1738.jpg',
            sort: '动漫',
            description: '少女终末旅行'
          },
        ],
        sorts: ['动漫', '电影', '游戏'],
        total: 4,
      }
    },
    methods: {
      turnPage: function (page) {
        this.owns = this.owns.reverse()
      },
      changeOwn: function (ownIndex) {
        alert('修改文件:' + this.owns[ownIndex].fileName)
      },
      removeOwn: function (ownIndex) {
        alert('删除文件:' + this.owns[ownIndex].fileName)
      },
    },
    components: {
      'navbar': navbar,
      'pagination': pagination,
    },
  }
</script>

<style scoped>

</style>
