<template>
  <b-container fluid>
    <b-row>
      <b-col>
        <sort-badge-wall @chooseSort="chooseSort" :sorts="sorts"/>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <b-card>
          <b-form-radio-group size="sm" buttons v-model="ownTable"
                              :options="[{text:'表格',value:true},{text:'图片墙',value:false}]"/>
        </b-card>
      </b-col>
    </b-row>

    <br/>

    <b-row>
      <b-col>
        <own-table v-if="ownTable" @changeOwn="changeOwn" @removeOwn="removeOwn" :owns="owns"/>
        <own-img-wall v-if="!ownTable" @changeOwn="changeOwn" @removeOwn="removeOwn" :owns="owns"/>
      </b-col>
    </b-row>

    <br/>

    <b-row>
      <b-col>
        <pagination @turnPage="turnPage" :total="total" :pageSize="pageSize"/>
      </b-col>
    </b-row>
  </b-container>
</template>

<!-- <own-layout @chooseSort="chooseSort" @changeOwn="changeOwn" @removeOwn="removeOwn" @turnPage="turnPage" :sorts="sorts" :owns="owns" :total="total" :pageSize="pageSize"/> -->

<script>
  import sortBadgeWall from './sortBadgeWall'
  import ownTable from './ownTable'
  import ownImgWall from './ownImgWall'
  import pagination from './pagination'

  export default {
    name: "ownLayout",
    data() {
      return {
        ownTable: true,
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
          return [{
            ownId: 0,
            userId: 0,
            fileId: 0,
            fileName: "5b7bb5dd4f0df.png",
            sort: "动漫",
            description: null,
            createTime: 1535866954000,
            updateTime: 1535866954000,
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
            createTime: 1535866954000,
            updateTime: 1535866954000,
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
            createTime: 1535866954000,
            updateTime: 1535866954000,
            username: "mycloud",
            md5: "f1098091bf7c85bd106c412b1769d5c2",
            fileLength: 163740,
            contentType: "image/jpeg",
            url: "https://i.loli.net/2018/04/10/5accdcbcb1738.jpg"
          }]
        }
      },
      total: {
        default: 4
      },
      pageSize: {
        default: 20
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
      'sort-badge-wall': sortBadgeWall,
      'own-table': ownTable,
      'own-img-wall': ownImgWall,
      'pagination': pagination,
    },
  }
</script>

<style scoped>

</style>
