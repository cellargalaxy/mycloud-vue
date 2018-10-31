<template>
  <b-media>
    <div @click="setShow(true)" slot="aside" style="width: 10.3em;">
      <my-img :src="form.own.ownUrl"/>
    </div>

    <b-form>
      <b-input-group prepend="url" size="sm">
        <b-form-input :value="form.own.ownUrl" readonly/>
      </b-input-group>

      <b-input-group size="sm">
        <b-form-input :value="form.own.fileLength" readonly/>
        <b-form-input :value="form.own.contentType" readonly/>
      </b-input-group>

      <b-input-group size="sm">
        <b-button :variant="form.uploadFunc==null?'outline-success':'outline-warning'" :disabled="form.uploadFunc==null"
                  v-text="form.uploadFunc==null?'上传成功':'上传失败，重新上传'" @click="upload" style="width: 100%;" size="sm"/>
      </b-input-group>
    </b-form>

    <own-img-modal @setShow="setShow" :show="show" :own="form.own"/>
  </b-media>
</template>

<upload-result-media :form="form"/>

<script>
  import util from '../utils/util'
  import myImg from './myImg'
  import ownImgModal from './ownImgModal'

  export default {
    name: "uploadResultMedia",
    props: {
      form: {
        default: function () {
          return {
            uploadFunc: null, own: {
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
        }
      },
    },
    data() {
      return {
        show: false
      }
    },
    methods: {
      upload: function () {
        this.form.uploadFunc(this.form)
          .then(data => {
            this.form.own = data.data
            this.form.uploadFunc = null
            util.successInfo('上传成功')
          })
      },
      setShow: function (show) {
        this.show = show
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
