<template>
  <b-container fluid>
    <b-row>
      <b-col>
        <navbar/>
      </b-col>
    </b-row>

    <br/>

    <b-row v-if="false">
      <b-col sm="0" md="0" lg="1" xl="2"/>
      <b-col sm="12" md="12" lg="10" xl="8">
        <b-card
          img-src="/static/5b96976fb4a80.png"
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
    <hr/>
    <br/>

    <b-row>
      <b-col sm="0" md="2" lg="3" xl="3"/>
      <b-col sm="12" md="8" lg="6" xl="6">
        <upload-tmp-file-layout @uploadTmpFile="uploadTmpFile" :ownExpireTimes="ownExpireTimes"
                                :forms="uploadTmpFileForms"/>
      </b-col>
      <b-col sm="0" md="2" lg="3" xl="3"/>
    </b-row>

    <br/>

    <b-row>
      <b-col sm="0" md="2" lg="3" xl="3"/>
      <b-col sm="12" md="8" lg="6" xl="6">
        <recent-expire-own-table :recentExpireOwns="recentExpireOwns"/>
      </b-col>
      <b-col sm="0" md="2" lg="3" xl="3"/>
    </b-row>

    <br/>
    <hr/>
    <br/>

    <own-layout @chooseSort="chooseSort" @changeOwn="changeOwn" @removeOwn="removeOwn" @turnPage="turnPage"
                :sorts="sorts" :owns="owns" :total="66" :pageSize="24"/>
  </b-container>
</template>

<script>
  import navbar from '../components/navbar'
  import uploadTmpFileLayout from '../components/uploadTmpFileLayout'
  import ownLayout from '../components/ownLayout'
  import recentExpireOwnTable from '../components/recentExpireOwnTable'
  import guestOwnExpire from '../guestApi/guestOwnExpire'
  import guestFile from '../guestApi/guestFile'
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
            "md5Url": "/static/5b7bb5dd4f0df.png",
            "ownUrl": "/static/5b7bb5dd4f0df.png"
          },
          {
            "ownId": 0,
            "ownUuid": "fe9d5d59-5ae1-4382-afab-f1e53c109e45",
            "userId": 0,
            "fileId": 0,
            "fileLength": 733578,
            "contentType": "image/jpeg",
            "fileName": "5b7bbc8ec3633.jpg",
            "sort": "动漫",
            "description": null,
            "createTime": 1535731200000,
            "updateTime": 1535731200000,
            "username": "mycloud",
            "md5": "84d91144667fb45e1ad9d8d213a089db",
            "md5Url": "/static/5b7bbc8ec3633.jpg",
            "ownUrl": "/static/5b7bbc8ec3633.jpg"
          },
          {
            "ownId": 0,
            "ownUuid": "fe9d5d59-5ae1-4382-afab-f1e53c109e45",
            "userId": 0,
            "fileId": 0,
            "fileLength": 225713,
            "contentType": "image/jpeg",
            "fileName": "5accdcbcb1738.jpg",
            "sort": "动漫",
            "description": null,
            "createTime": 1535731200000,
            "updateTime": 1535731200000,
            "username": "mycloud",
            "md5": "f1098091bf7c85bd106c412b1769d5c2",
            "md5Url": "/static/5accdcbcb1738.jpg",
            "ownUrl": "/static/5accdcbcb1738.jpg"
          },
          {
            "ownId": 0,
            "ownUuid": "fe9d5d59-5ae1-4382-afab-f1e53c109e45",
            "userId": 0,
            "fileId": 0,
            "fileLength": 3170389,
            "contentType": "video/mpeg",
            "fileName": "09 - little moa - Aoi Tamago (orgel ver.).flac",
            "sort": "动漫",
            "description": null,
            "createTime": 1535731200000,
            "updateTime": 1535731200000,
            "username": "mycloud",
            "md5": "f1098091bf7c85bd106c412b1769d5c2",
            "md5Url": "/static/09 - little moa - Aoi Tamago (orgel ver.).flac",
            "ownUrl": "/static/09 - little moa - Aoi Tamago (orgel ver.).flac"
          },
          {
            "ownId": 0,
            "ownUuid": "fe9d5d59-5ae1-4382-afab-f1e53c109e45",
            "userId": 0,
            "fileId": 0,
            "fileLength": 1972167,
            "contentType": "video/mp4",
            "fileName": "その一言で、フラッシュバックする。Netflixアニ名言 特別映像 篇 60秒.mp4",
            "sort": "动漫",
            "description": "网飞爸爸请补交广告费",
            "createTime": 1535731200000,
            "updateTime": 1535731200000,
            "username": "mycloud",
            "md5": "f1098091bf7c85bd106c412b1769d5c2",
            "md5Url": "/static/その一言で、フラッシュバックする。Netflixアニ名言 特別映像 篇 60秒.mp4",
            "ownUrl": "/static/その一言で、フラッシュバックする。Netflixアニ名言 特別映像 篇 60秒.mp4"
          },
        ],
        uploadTmpFileForms: [],
        ownExpireTimes: [],
        recentExpireOwns: [],
      }
    },
    created: function () {
      this.ownExpireTimes.push({value: new Date().getTime() + 1000 * 60 * 60 * 1, text: '1h'})
      this.ownExpireTimes.push({value: new Date().getTime() + 1000 * 60 * 60 * 2, text: '2h'})
      this.ownExpireTimes.push({value: new Date().getTime() + 1000 * 60 * 60 * 6, text: '6h'})
      this.ownExpireTimes.push({value: new Date().getTime() + 1000 * 60 * 60 * 12, text: '12h'})
      this.ownExpireTimes.push({value: new Date().getTime() + 1000 * 60 * 60 * 24 * 1, text: '1d'})
      this.ownExpireTimes.push({value: new Date().getTime() + 1000 * 60 * 60 * 24 * 2, text: '2d'})
      this.ownExpireTimes.push({value: new Date().getTime() + 1000 * 60 * 60 * 24 * 5, text: '5d'})
      this.ownExpireTimes.push({value: new Date().getTime() + 1000 * 60 * 60 * 24 * 7, text: '7d'})
      this.ownExpireTimes.push({value: new Date().getTime() + 1000 * 60 * 60 * 24 * 10, text: '10d'})

      this.listRecentExpireOwn()
    },
    methods: {
      uploadTmpFile: async function (uploadTmpFileForm) {
        uploadTmpFileForm.uploadFunc = guestFile.uploadTmpFile
        let data = await guestFile.uploadTmpFile(uploadTmpFileForm)
        uploadTmpFileForm.own = data
        this.uploadTmpFileForms.push(uploadTmpFileForm)
        util.successInfo('完成上传')
        this.listRecentExpireOwn()
      },
      listRecentExpireOwn: function () {
        guestOwnExpire.listRecentExpireOwn()
          .then(data => {
            this.recentExpireOwns = data.data
          })
      },
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
      uploadTmpFileLayout,
      ownLayout,
      recentExpireOwnTable,
    },
  }
</script>

<style scoped>
</style>
