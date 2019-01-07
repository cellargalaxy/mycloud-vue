<template>
  <div>
    <upload-tmp-file-card @upload="uploadTmpFile" :ownExpireTimes="ownExpireTimes"/>
    <upload-result-card :forms="forms"/>
  </div>
</template>

<upload-tmp-file-layout @uploadTmpFile="uploadTmpFile" :ownExpireTimes="ownExpireTimes" :forms="forms"/>

<script>
  import uploadTmpFileCard from './uploadTmpFileCard'
  import uploadResultCard from './uploadResultCard'

  export default {
    name: "uploadTmpFileLayout",
    props: {
      ownExpireTimes: {
        default: function () {
          return [
            {value: 1, text: '一天'},
            {value: 2, text: '两天'},
            {value: 3, text: '三天'},
          ]
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
      uploadTmpFile: function (uploadTmpFileForm) {
        this.$emit('uploadTmpFile', uploadTmpFileForm)
      },
    },
    components: {
      uploadTmpFileCard,
      uploadResultCard,
    },
  }
</script>

<style scoped>

</style>
