<template>
  <b-row>
    <b-col sm="4" md="3" lg="2" xl="2" v-for="(own,ownIndex) in owns" :key="ownIndex">
      <own-img-card @changeOwn="changeOwn" @removeOwn="removeOwn" :own="own"/>
    </b-col>
  </b-row>
</template>

<!-- <img-wall @changeOwn="changeOwn" @removeOwn="removeOwn" :owns="owns"/> -->

<script>
  import ownImgCard from './ownImgCard'

  export default {
    name: "ownImgWall",
    props: {
      owns: {
        default: function () {
          return [{
            ownId: 0,
            userId: 0,
            fileId: 0,
            fileName: "5b7bb5dd4f0df.png",
            sort: "动漫",
            description: null,
            createTime: 1535731200000,
            updateTime: 1535731200000,
            username: "mycloud",
            md5: "4a2599540220af6579e287bcd96a7c35",
            fileLength: 163740,
            contentType: "image/png",
            url: "https://i.loli.net/2018/08/21/5b7bb5dd4f0df.png"
          }, {
            ownId: 0,
            userId: 0,
            fileId: 0,
            fileName: "5b7bbc8ec3633.jpg",
            sort: "动漫",
            description: null,
            createTime: 1535731200000,
            updateTime: 1535731200000,
            username: "mycloud",
            md5: "84d91144667fb45e1ad9d8d213a089db",
            fileLength: 163740,
            contentType: "image/jpeg",
            url: "https://i.loli.net/2018/08/21/5b7bbc8ec3633.jpg"
          }, {
            ownId: 0,
            userId: 0,
            fileId: 0,
            fileName: "5accdcbcb1738.jpg",
            sort: "动漫",
            description: null,
            createTime: 1535731200000,
            updateTime: 1535731200000,
            username: "mycloud",
            md5: "f1098091bf7c85bd106c412b1769d5c2",
            fileLength: 163740,
            contentType: "image/jpeg",
            url: "https://i.loli.net/2018/04/10/5accdcbcb1738.jpg"
          }]
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
      'own-img-card': ownImgCard,
    },
  }
</script>

<style scoped>

</style>
