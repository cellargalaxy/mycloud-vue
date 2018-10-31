<template>
  <b-card no-body>
    <div @click="setShow(true)">
      <my-img :src="own.ownUrl"/>
    </div>

    <b-input-group size="sm">
      <b-form-input type="text" placeholder="文件名" v-model="own.fileName"/>
      <b-input-group-append>
        <b-btn @click="changeOwn" variant="outline-warning">修改</b-btn>
      </b-input-group-append>
    </b-input-group>

    <own-img-modal @changeOwn="changeOwn" @removeOwn="removeOwn" @setShow="setShow" :show="modelShow" :own="own"/>
  </b-card>
</template>

<own-img-card @changeOwn="changeOwn" @removeOwn="removeOwn" :own="own"/>

<script>
  import myImg from './myImg'
  import ownImgModal from './ownImgModal'

  export default {
    name: "ownImgCard",
    data() {
      return {
        modelShow: false
      }
    },
    props: {
      own: {
        default: function () {
          return {
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
      },
    },
    methods: {
      changeOwn: function (own) {
        this.$emit('changeOwn', own)
      },
      removeOwn: function (own) {
        this.$emit('removeOwn', own)
      },
      setShow(show) {
        this.modelShow = show
      },
    },
    components: {
      myImg,
      ownImgModal,
    },
  }
</script>

<style scoped>

</style>
