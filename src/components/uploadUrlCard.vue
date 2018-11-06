<template>
  <b-card>
    <b-form>
      <b-input-group prepend="">
        <b-form-textarea v-model="uploadUrlForm.urls" placeholder="urls" rows="1"/>
      </b-input-group>

      <b-form-group label="">
        <b-input-group prepend="">
          <b-form-input v-model="uploadUrlForm.sort" type="text" placeholder="新分类"/>
          <b-form-select :options="sorts" v-model="uploadUrlForm.sort"/>
        </b-input-group>
      </b-form-group>

      <b-form-group label="">
        <b-form-textarea v-model="uploadUrlForm.description" placeholder="描述" rows="1" maxlength="256"/>
      </b-form-group>

      <b-button type="submit" variant="primary" style="width: 100%" @click="uploads">上传</b-button>
    </b-form>
  </b-card>
</template>

<upload-url-card @uploads="uploads" :sorts="sorts"/>

<script>
  import util from "../utils/util";

  export default {
    name: "uploadUrlCard",
    props: {
      sorts: {
        default: function () {
          return ['动漫', '电影', '游戏']
        }
      },
    },
    data() {
      return {
        uploadUrlForm: {urls: null, sort: null, description: null,}
      }
    },
    methods: {
      uploads: function () {
        if (this.uploadUrlForm.urls == null || this.uploadUrlForm.urls == '') {
          util.errorInfo('还未填写任何的url')
          return
        }
        let urls = this.uploadUrlForm.urls.split(/[\n]/);
        let uploadUrlForms = []
        for (let i = 0; i < urls.length; i++) {
          uploadUrlForms.push({url: urls[i], sort: this.uploadUrlForm.sort, description: this.uploadUrlForm.sort})
        }
        this.$emit('uploads', uploadUrlForms)
        this.uploadUrlForm = {url: null, sort: null, description: null,}
      },
    },
  }
</script>

<style scoped>

</style>
