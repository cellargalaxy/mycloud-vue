<template>
  <b-card no-body>
    <div @click="showModal">
      <my-img :src="own.url"/>
    </div>

    <b-input-group size="sm">
      <b-form-input type="text" placeholder="文件名" v-model="own.fileName"/>
      <b-input-group-append>
        <b-btn @click="changeOwn(own)" variant="outline-warning">修改</b-btn>
      </b-input-group-append>
    </b-input-group>

    <own-img-modal @changeOwn="changeOwn" @removeOwn="removeOwn" @hide="hideModal" :own="own" :show="modelShow"/>
  </b-card>
</template>

<!-- <own-img-card @changeOwn="changeOwn" @removeOwn="removeOwn" :own="own"/> -->

<script>
  import common from '../commonApi/common'
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
          }
        }
      },
    },
    watch: {
      own(val) {
        this.own = common.initOwn(val)
      },
    },
    created: function () {
      this.own = common.initOwn(this.own)
    },
    methods: {
      changeOwn: function (own) {
        this.$emit('changeOwn', own)
      },
      removeOwn: function (own) {
        this.$emit('removeOwn', own)
      },
      showModal() {
        this.modelShow = true
      },
      hideModal(val) {
        this.modelShow = val
      },
    },
    components: {
      'my-img': myImg,
      'own-img-modal': ownImgModal,
    },
  }
</script>

<style scoped>

</style>
