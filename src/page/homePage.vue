<template>
  <b-container fluid>
    <b-row>
      <b-col>
        <navbar/>
      </b-col>
    </b-row>

    <br/>

    <b-row>
      <b-col>
        <b-card overlay
                img-src="https://picsum.photos/900/250/?image=36"
                img-alt="苍白苍白"
                text-variant="black"
                title=""
                sub-title="">
          <h2><b>记录记录记录记录记录记录记录记录记录记录记录记录记录</b></h2>
          <p class="text-right"><b>——苍白苍白</b></p>
        </b-card>
      </b-col>
    </b-row>

    <br/>

    <own-layout @changeOwn="changeOwn" @removeOwn="removeOwn" @turnPage="turnPage"
                :owns="owns" :total="40" :pageSize="20"/>
  </b-container>
</template>

<script>
  import navbar from '../components/navbar'
  import ownLayout from '../components/ownLayout'
  import util from '../utils/util'

  export default {
    name: "homePage",
    data() {
      return {
        sorts: ['动漫', '电影', '游戏'],
        owns: [
          {
            url: 'https://i.loli.net/2018/08/21/5b7bb5dd4f0df.png',
            md5: '4a2599540220af6579e287bcd96a7c35',
            fileLength: '1.64 MB',
            contentType: 'image/png',
            username: 'mycloud',
            fileName: '5b7bb5dd4f0df.png',
            sort: '动漫',
            description: '来自深渊',
            createTime: 1535731200000,
            updateTime: 1535731200000,
          },
          {
            url: 'https://i.loli.net/2018/08/21/5b7bbc8ec3633.jpg',
            md5: '84d91144667fb45e1ad9d8d213a089db',
            fileLength: '716 KB',
            contentType: 'image/jpeg',
            username: 'mycloud',
            fileName: '5b7bbc8ec3633.jpg',
            sort: '动漫',
            description: '宝石之国',
            createTime: 1535731200000,
            updateTime: 1535731200000,
          },
          {
            url: 'https://i.loli.net/2018/04/10/5accdcbcb1738.jpg',
            md5: 'f1098091bf7c85bd106c412b1769d5c2',
            fileLength: '220 KB',
            contentType: 'image/jpeg',
            username: 'mycloud',
            fileName: '5accdcbcb1738.jpg',
            sort: '动漫',
            description: '少女终末旅行',
            createTime: 1535731200000,
            updateTime: 1535731200000,
          },
        ],
      }
    },
    methods: {
      changeOwn: function (own) {
        util.successInfo('修改成功')
      },
      removeOwn: function (own) {
        util.successInfo('删除成功')
      },
      turnPage: function (page) {
        this.owns = this.owns.reverse()
      },
    },
    components: {
      'navbar': navbar,
      'own-layout': ownLayout,
    },
  }
</script>

<style scoped>

</style>
