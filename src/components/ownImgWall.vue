<template>
  <b-row>
    <b-col sm="6" md="6" lg="4" xl="3" v-for="(own,ownIndex) in owns" :key="ownIndex">
      <own-img-card @changeOwn="changeOwn" @removeOwn="removeOwn" :own="own"/>
    </b-col>
  </b-row>
</template>

<own-img-wall @changeOwn="changeOwn" @removeOwn="removeOwn" :owns="owns"/>

<script>
  import ownImgCard from './ownImgCard'

  export default {
    name: "ownImgWall",
    props: {
      owns: {
        default: function () {
          return [
            {
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
            },
            {
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
            },
            {
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
          ]
        }
      },
    },
    methods: {
      changeOwn: function (own) {
        this.$emit('changeOwn', own)
      },
      removeOwn: function (own) {
        this.$emit('removeOwn', own)
      },
    },
    components: {
      ownImgCard,
    },
  }
</script>

<style scoped>

</style>
