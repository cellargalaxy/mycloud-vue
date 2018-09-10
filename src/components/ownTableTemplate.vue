<template>
  <div>
    <b-button size="sm" variant="link" @click="showModel">详细</b-button>
    <own-img-modal @changeOwn="changeOwn" @removeOwn="removeOwn" @hide="hideModel" :own="own" :show="modelShow"/>
  </div>
</template>

 <!--<own-table-template @changeOwn="changeOwn" :own="own"/> -->

<script>
  import ownImgModal from './ownImgModal'

  export default {
    name: "ownTableTemplate",
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
    methods: {
      changeOwn: function (own) {
        this.$emit('changeOwn', own)
      },
      removeOwn: function (own) {
        this.$emit('removeOwn', own)
      },
      showModel: function () {
        this.modelShow = true
      },
      hideModel: function (val) {
        this.modelShow = val
      },
    },
    components: {
      'own-img-modal': ownImgModal,
    },
  }
</script>

<style scoped>

</style>
