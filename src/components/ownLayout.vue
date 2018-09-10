<template>
  <div>
    <b-row>
      <b-col>
        <b-card>
          <b-form-radio-group size="sm" buttons v-model="ownTable"
                              :options="[{text:'图片墙',value:false},{text:'表格',value:true}]"/>
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
  </div>
</template>

<!-- <own-layout @changeOwn="changeOwn" @removeOwn="removeOwn" @turnPage="turnPage" :owns="owns" :total="total" :pageSize="pageSize"/> -->

<script>
  import ownTable from './ownTable'
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
      'own-table': ownTable,
      'own-img-wall': ownImgWall,
      'pagination': pagination,
    },
  }
</script>

<style scoped>

</style>
