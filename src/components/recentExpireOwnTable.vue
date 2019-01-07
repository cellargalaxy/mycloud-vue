<template>
  <b-table hover responsive small caption-top :fields="fields" :items="recentExpireOwns">
    <template slot="下载" slot-scope="data">
      <b-button-group>
        <b-link :href="data.item.ownUrl" target="_blank">下载</b-link>
      </b-button-group>
    </template>
  </b-table>
</template>

<recent-expire-own-table :recentExpireOwns="recentExpireOwns"/>

<script>
  import common from '../commonApi/common'

  export default {
    name: "recentExpireOwnTable",
    props: {
      recentExpireOwns: {
        default: function () {
          return [
            {
              "ownId": 2,
              "ownExpireTime": 1546847017435,
              "ownUuid": "80dbaacc-09c3-4d53-82a7-31b2c6f8c268",
              "userId": 0,
              "fileName": "5b7bb5dd4f0df.png",
              "sort": "<TMP_FILE>",
              "description": null,
              "fileLength": 17141096,
              "contentType": "image/png",
              "md5": null,
              "fileId": 0,
              "md5Url": null,
              "ownUrl": "/static/5b7bb5dd4f0df.png"
            },
            {
              "ownId": 1,
              "ownExpireTime": 1546847017435,
              "ownUuid": "753c67cc-784b-4f8a-a305-02e2a60da149",
              "userId": 0,
              "fileName": "5b7bbc8ec3633.jpg",
              "sort": "<TMP_FILE>",
              "description": null,
              "fileLength": 225713,
              "contentType": "image/jpeg",
              "md5": null,
              "fileId": 0,
              "md5Url": null,
              "ownUrl": "/static/5accdcbcb1738.jpg"
            }
          ]
        }
      },
    },
    data() {
      return {
        fields: [
          '下载',
          {
            key: 'ownExpireTime',
            label: '过期时间',
          },
          {
            key: 'contentType',
            label: '文件类型',
          },
          {
            key: 'fileName',
            label: '文件名',
          },
        ],
      }
    },
    watch: {
      recentExpireOwns(val) {
        for (let i = 0; i < val.length; i++) {
          common.initOwnExpire(val[i])
        }
      },
    },
    created: function () {
      for (let i = 0; i < this.recentExpireOwns.length; i++) {
        common.initOwnExpire(this.recentExpireOwns[i])
      }
    },
  }
</script>

<style scoped>

</style>
