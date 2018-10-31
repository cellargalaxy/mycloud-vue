<template>
  <div>
    <b-row>
      <b-col>
        <sort-radio-card @chooseSort="chooseSort" :sorts="sorts"/>
      </b-col>
    </b-row>

    <br/>

    <b-row>
      <b-col>
        <own-img-wall @changeOwn="changeOwn" @removeOwn="removeOwn" :owns="owns"/>
      </b-col>
    </b-row>

    <br/>

    <b-row>
      <b-col>
        <pagination @turnPage="turnPage" :total="total" :pageSize="pageSize"/>
      </b-col>
    </b-row>
  </div>
</template>

<own-layout @chooseSort="chooseSort" @changeOwn="changeOwn" @removeOwn="removeOwn" @turnPage="turnPage"
            :sorts="sorts" :owns="owns" :total="total" :pageSize="pageSize"/>

<script>
  import sortRadioCard from './sortRadioCard'
  import ownImgWall from './ownImgWall'
  import pagination from './pagination'

  export default {
    name: "ownLayout",
    data() {
      return {
        ownTable: false,
      }
    },
    props: {
      sorts: {
        default: function () {
          return ['动漫', '电影', '游戏']
        }
      },
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
            }
          ]
        }
      },
      total: {
        default: 66
      },
      pageSize: {
        default: 24
      },
    },
    methods: {
      chooseSort: function (sort) {
        this.$emit('chooseSort', sort)
      },
      changeOwn: function (own) {
        this.$emit('changeOwn', own)
      },
      removeOwn: function (own) {
        this.$emit('removeOwn', own)
      },
      turnPage: function (page) {
        this.$emit('turnPage', page)
      },
    },
    components: {
      sortRadioCard,
      ownImgWall,
      pagination,
    },
  }
</script>

<style scoped>

</style>
