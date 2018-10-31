<template>
  <b-modal v-model="tmpShow" :title="'修改'+own.username+'的'+own.fileName" centered @hide="setShow(false)">
    <b-container fluid>
      <my-img :src="own.ownUrl"/>

      <b-form @submit="changeOwn">
        <b-input-group prepend="文件名" size="sm">
          <b-form-input v-model="own.fileName" type="text"/>
        </b-input-group>

        <b-input-group prepend="分类" size="sm">
          <b-form-input v-model="own.sort" type="text"/>
        </b-input-group>

        <b-input-group prepend="" size="sm">
          <b-form-textarea v-model="own.description" rows="1" placeholder="描述"/>
        </b-input-group>

        <b-input-group prepend="md5" size="sm">
          <b-form-input :value="own.md5" readonly/>
        </b-input-group>

        <b-input-group prepend="uuid" size="sm">
          <b-form-input :value="own.ownUuid" readonly/>
        </b-input-group>

        <b-input-group prepend="url" size="sm">
          <b-form-input :value="own.ownUrl" readonly/>
        </b-input-group>

        <b-input-group size="sm">
          <b-form-input :value="own.fileLength" readonly/>
          <b-form-input :value="own.contentType" readonly/>
        </b-input-group>

        <b-input-group size="sm">
          <b-form-input :value="own.createTime" readonly/>
          <b-form-input :value="own.updateTime" readonly/>
        </b-input-group>
      </b-form>
    </b-container>

    <div slot="modal-footer">
      <b-btn size="sm" variant="outline-danger" @click="removeOwn">删除</b-btn>
      <b-btn size="sm" variant="outline-warning" @click="changeOwn">保存</b-btn>
      <b-btn size="sm" variant="outline-secondary" @click="setShow(false)">取消</b-btn>
    </div>
  </b-modal>
</template>

<own-img-modal @changeOwn="changeOwn" @removeOwn="removeOwn" @setShow="setShow" :show="show" :own="own"/>

<script>
  import common from '../commonApi/common'
  import myImg from './myImg'

  export default {
    name: "ownModal",
    props: {
      show: {
        default: function () {
          return true
        }
      },
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
    data() {
      return {
        tmpShow: this.show
      }
    },
    watch: {
      show(val) {
        this.tmpShow = val
      },
      own(val) {
        common.initOwn(val)
      },
    },
    created: function () {
      common.initOwn(this.own)
    },
    methods: {
      changeOwn: function () {
        this.$emit('changeOwn', this.own)
        this.setShow(false)
      },
      removeOwn: function () {
        this.$emit('removeOwn', this.own)
        this.setShow(false)
      },
      setShow(show) {
        this.$emit('setShow', show)
      },
    },
    components: {
      myImg,
    },
  }
</script>

<style scoped>

</style>
