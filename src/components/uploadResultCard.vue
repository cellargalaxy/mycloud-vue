<template>
  <b-card no-body>
    <b-card-body v-for="(form,formIndex) in forms" :key="formIndex">
      <upload-result-media :form="form"/>
    </b-card-body>
  </b-card>
</template>

<upload-result-card :forms="forms"/>

<script>
  import uploadResultMedia from './uploadResultMedia'

  export default {
    name: "uploadResultCard",
    props: {
      forms: {
        default: function () {
          return [
            {
              file: null, sort: null, description: null, uploadFunc: null, own: {
                "ownId": 0,
                "ownUuid": "fe9d5d59-5ae1-4382-afab-f1e53c109e45",
                "userId": 0,
                "fileId": 0,
                "fileLength": 17141096,
                "contentType": "image/png",
                "fileName": "5b7bb5dd4f0df.png",
                "sort": "sort",
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
              file: null, sort: null, description: null, uploadFunc: null, own: {
                "ownId": 0,
                "ownUuid": "fe9d5d59-5ae1-4382-afab-f1e53c109e45",
                "userId": 0,
                "fileId": 0,
                "fileLength": 17141096,
                "contentType": "image/png",
                "fileName": "5b7bb5dd4f0df.png",
                "sort": "sort",
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
              file: null, sort: null, description: null, uploadFunc: null, own: {
                "ownId": 0,
                "ownUuid": "fe9d5d59-5ae1-4382-afab-f1e53c109e45",
                "userId": 0,
                "fileId": 0,
                "fileLength": 17141096,
                "contentType": "image/png",
                "fileName": "5b7bb5dd4f0df.png",
                "sort": "sort",
                "description": null,
                "createTime": 1535731200000,
                "updateTime": 1535731200000,
                "username": "mycloud",
                "md5": "4a2599540220af6579e287bcd96a7c35",
                "md5Url": "https://i.loli.net/2018/08/21/5b7bb5dd4f0df.png",
                "ownUrl": "https://i.loli.net/2018/08/21/5b7bb5dd4f0df.png"
              }
            }
          ]
        }
      },
    },
    components: {
      uploadResultMedia,
    },
  }
</script>

<style scoped>

</style>
