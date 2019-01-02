<template>
  <b-container fluid>
    <b-row>
      <b-col>
        <navbar/>
      </b-col>
    </b-row>

    <br/>

    <b-row>
      <b-col sm="0" md="0" lg="1" xl="2"/>
      <b-col sm="12" md="12" lg="10" xl="8">
        <b-card
          img-src="https://i.loli.net/2018/09/11/5b96976fb4a80.png"
          img-alt="苍之萤"
          text-variant="black"
          title=""
          sub-title="">
          <h2><b>我在这里的时候经常想，以前的人为什么总是留下记录呢？因为他们不想让有些事情发生改变。</b></h2>
          <p class="text-right"><b>——苍之萤</b></p>
        </b-card>
      </b-col>
      <b-col sm="0" md="0" lg="1" xl="2"/>
    </b-row>

    <br/>

    <own-layout @chooseSort="chooseSort" @changeOwn="changeOwn" @removeOwn="removeOwn" @turnPage="turnPage"
                :sorts="sorts" :owns="owns" :total="66" :pageSize="24"/>
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
            "ownId": 0,
            "ownUuid": "fe9d5d59-5ae1-4382-afab-f1e53c109e45",
            "userId": 0,
            "fileId": 0,
            "fileLength": 17141096,
            "contentType": "image/png",
            "fileName": "5b7bb5dd4f0df.png",
            "sort": "动漫",
            "description": null,
            "createTime": 1535731200000,
            "updateTime": 1535731200000,
            "username": "mycloud",
            "md5": "4a2599540220af6579e287bcd96a7c35",
            "md5Url": "https://i.loli.net/2018/08/21/5b7bb5dd4f0df.png",
            "ownUrl": "https://i.loli.net/2018/08/21/5b7bb5dd4f0df.png"
          },
          {
            "ownId": 0,
            "ownUuid": "fe9d5d59-5ae1-4382-afab-f1e53c109e45",
            "userId": 0,
            "fileId": 0,
            "fileLength": 733578,
            "contentType": "image/jpeg",
            "fileName": "5b7bbc8ec3633.png",
            "sort": "动漫",
            "description": null,
            "createTime": 1535731200000,
            "updateTime": 1535731200000,
            "username": "mycloud",
            "md5": "84d91144667fb45e1ad9d8d213a089db",
            "md5Url": "https://i.loli.net/2018/08/21/5b7bbc8ec3633.jpg",
            "ownUrl": "https://i.loli.net/2018/08/21/5b7bbc8ec3633.jpg"
          },
          {
            "ownId": 0,
            "ownUuid": "fe9d5d59-5ae1-4382-afab-f1e53c109e45",
            "userId": 0,
            "fileId": 0,
            "fileLength": 225713,
            "contentType": "image/jpeg",
            "fileName": "5accdcbcb1738.png",
            "sort": "动漫",
            "description": null,
            "createTime": 1535731200000,
            "updateTime": 1535731200000,
            "username": "mycloud",
            "md5": "f1098091bf7c85bd106c412b1769d5c2",
            "md5Url": "https://i.loli.net/2018/04/10/5accdcbcb1738.jpg",
            "ownUrl": "https://i.loli.net/2018/04/10/5accdcbcb1738.jpg"
          },
          {
            "ownId": 0,
            "ownUuid": "fe9d5d59-5ae1-4382-afab-f1e53c109e45",
            "userId": 0,
            "fileId": 0,
            "fileLength": 3170389,
            "contentType": "video/mpeg",
            "fileName": "1566661044.flac",
            "sort": "动漫",
            "description": null,
            "createTime": 1535731200000,
            "updateTime": 1535731200000,
            "username": "mycloud",
            "md5": "f1098091bf7c85bd106c412b1769d5c2",
            "md5Url": "http://thyrsi.com/t6/403/1541058146x-1566661044.jpg",
            "ownUrl": "http://thyrsi.com/t6/403/1541058146x-1566661044.jpg"
          },
          {
            "ownId": 0,
            "ownUuid": "fe9d5d59-5ae1-4382-afab-f1e53c109e45",
            "userId": 0,
            "fileId": 0,
            "fileLength": 1972167,
            "contentType": "video/mp4",
            "fileName": "1566661044.mp4",
            "sort": "动漫",
            "description": null,
            "createTime": 1535731200000,
            "updateTime": 1535731200000,
            "username": "mycloud",
            "md5": "f1098091bf7c85bd106c412b1769d5c2",
            "md5Url": "http://thyrsi.com/t6/403/1541057827x-1566661044.jpg",
            "ownUrl": "http://thyrsi.com/t6/403/1541057827x-1566661044.jpg"
          },
        ],
      }
    },
    methods: {
      chooseSort: function (sort) {
        console.log('选择分类：' + sort)
      },
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
      navbar,
      ownLayout,
    },
  }
</script>

<style scoped>
</style>
