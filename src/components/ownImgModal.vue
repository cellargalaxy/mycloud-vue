<template>
  <b-modal v-model="tmpShow" :title="'修改'+own.username+'的'+own.fileName" centered @hide="hideModel">
    <b-container fluid>
      <my-img :src="own.url"></my-img>

      <b-form @submit="changeOwn">
        <b-input-group prepend="文件名" size="sm">
          <b-form-input v-model="own.fileName" type="text"></b-form-input>
        </b-input-group>

        <b-input-group prepend="分类" size="sm">
          <b-form-input v-model="own.sort" type="text"></b-form-input>
        </b-input-group>

        <b-input-group prepend="" size="sm">
          <b-form-textarea v-model="own.description" rows="1" placeholder="描述"></b-form-textarea>
        </b-input-group>

        <b-input-group prepend="md5" size="sm">
          <b-form-input :value="own.md5" readonly></b-form-input>
        </b-input-group>

        <b-input-group prepend="url" size="sm">
          <b-form-input :value="own.url" readonly></b-form-input>
        </b-input-group>

        <b-input-group size="sm">
          <b-form-input :value="own.fileLength" readonly></b-form-input>
          <b-form-input :value="own.contentType" readonly></b-form-input>
        </b-input-group>

        <b-input-group size="sm">
          <b-form-input :value="own.createTime" readonly></b-form-input>
          <b-form-input :value="own.updateTime" readonly></b-form-input>
        </b-input-group>
      </b-form>
    </b-container>

    <div slot="modal-footer">
      <b-btn size="sm" class="float-right" variant="outline-secondary" @click="hideModel">取消</b-btn>
      <b-btn size="sm" class="float-right" variant="outline-warning" @click="changeOwn">保存</b-btn>
      <b-btn size="sm" class="float-right" variant="outline-danger" @click="removeOwn">删除</b-btn>
    </div>
  </b-modal>
</template>

<!-- <own-img-modal @changeOwn="changeOwn" @removeOwn="removeOwn" @hide="hide" :own="own" :show="show"/> -->

<script>
  import common from '../commonApi/common'
  import myImg from './myImg'

  export default {
    name: "ownModal",
    data() {
      return {
        tmpShow: this.show,
      }
    },
    props: {
      show: {
        default: false
      },
      own: {
        default: function () {
          return {
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
          }
        }
      },
    },
    watch: {
      show(val) {
        this.tmpShow = val
      },
      tmpShow(val) {
        this.$emit('hide', val)
      },
      own(val) {
        this.own = common.initOwn(val)
      },
    },
    created: function () {
      this.own = common.initOwn(this.own)
    },
    methods: {
      changeOwn: function () {
        this.$emit('changeOwn', this.own)
        this.tmpShow = false
      },
      removeOwn: function () {
        this.$emit('removeOwn', this.own)
        this.tmpShow = false
      },
      hideModel(evt) {
        this.tmpShow = false
      },
    },
    components: {
      'my-img': myImg,
    },
  }
</script>

<style scoped>

</style>
