<template>
  <div>
    <upload-file-card @uploads="uploadFiles" :sorts="sorts"/>
    <upload-url-card @uploads="uploadUrls" :sorts="sorts"/>
    <upload-result-card :forms="forms"/>
  </div>
</template>

<upload-layout @uploadFiles="uploadFiles" @uploadUrls="uploadUrls" :sorts="sorts" :forms="forms"/>

<script>
  import uploadFileCard from './uploadFileCard'
  import uploadUrlCard from './uploadUrlCard'
  import uploadResultCard from './uploadResultCard'

  export default {
    name: "uploadLayout",
    props: {
      sorts: {
        default: function () {
          return ['动漫', '电影', '游戏']
        }
      },
      forms: {
        default: function () {
          return [
            {
              file: null, sort: null, description: null, redo: null, own: {
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
              }
            },
            {
              file: null, sort: null, description: null, redo: null, own: {
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
              }
            },
            {
              file: null, sort: null, description: null, redo: null, own: {
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
              }
            }
          ]
        }
      },
    },
    methods: {
      uploadFiles: function (uploadFileForms) {
        this.$emit('uploadFiles', uploadFileForms)
      },
      uploadUrls: function (uploadUrlForms) {
        this.$emit('uploadUrls', uploadUrlForms)
      },
    },
    components: {
      uploadFileCard,
      uploadUrlCard,
      uploadResultCard,
    },
  }
</script>

<style scoped>

</style>
