<template>
  <b-table hover small foot-clone responsive :items="owns" :fields="fields">
    <template slot="detail" slot-scope="row">
      <own-table-template @changeOwn="changeOwn" @removeOwn="removeOwn" :own="row.item"/>
    </template>
  </b-table>
</template>

<!-- <own-table @changeOwn="changeOwn" @removeOwn="removeOwn" :owns="owns"/> -->

<script>
  import common from '../commonApi/common'
  import ownTableTemplate from './ownTableTemplate'

  export default {
    name: "ownTable",
    data() {
      return {
        fields: [
          {
            key: 'detail',
            label: 'detail',
          },
          {
            key: 'username',
            label: 'user',
            sortable: true,
          },
          {
            key: 'sort',
            label: 'sort',
            sortable: true,
          },
          {
            key: 'fileName',
            label: 'name',
            sortable: true,
          },
          {
            key: 'fileLength',
            label: 'size',
          },
          {
            key: 'contentType',
            label: 'type',
            sortable: true,
          },
          {
            key: 'url',
            label: 'url',
          },
          {
            key: 'updateTime',
            label: 'time',
            sortable: true,
          }
        ],
        own: {},
      }
    },
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
    },
    watch: {
      owns(val) {
        this.owns = val
        for (let i = 0; i < this.owns.length; i++) {
          this.owns[i] = common.initOwn(this.owns[i])
        }
      },
    },
    created: function () {
      for (let i = 0; i < this.owns.length; i++) {
        this.owns[i] = common.initOwn(this.owns[i])
      }
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
      'own-table-template': ownTableTemplate,
    },
  }
</script>

<style scoped>

</style>
