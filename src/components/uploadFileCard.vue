<template>
  <b-card>
    <b-form>
      <b-input-group prepend="">
        <b-form-file v-model="uploadFileForm.files" :state="Boolean(uploadFileForm.files)" :no-drop="true"
                     :multiple="true" placeholder="可以选择多个文件"/>
      </b-input-group>

      <b-form-group label="">
        <b-input-group prepend="">
          <b-form-input v-model="uploadFileForm.sort" type="text" placeholder="新分类"/>
          <b-form-select :options="sorts" v-model="uploadFileForm.sort"/>
        </b-input-group>
      </b-form-group>

      <b-form-group label="">
        <b-form-textarea v-model="uploadFileForm.description" placeholder="描述" rows="1" maxlength="256"/>
      </b-form-group>

      <b-button type="submit" variant="primary" style="width: 100%" @click="upload">上传</b-button>
    </b-form>
  </b-card>
</template>

<upload-file-card @upload="upload" :sorts="sorts"/>

<script>
  import util from '../utils/util'

  export default {
    name: "uploadFileCard",
    props: {
      sorts: {
        default: function () {
          return ['动漫', '电影', '游戏']
        }
      },
    },
    data() {
      return {
        uploadFileForm: {files: [], sort: null, description: null,}
      }
    },
    methods: {
      upload: function () {
        if (this.uploadFileForm.files == null || this.uploadFileForm.files.length == 0) {
          util.errorInfo('还未选择任何文件')
          return
        }
        for (let i = 0; i < this.uploadFileForm.files.length; i++) {
          this.$emit('upload', {
            file: this.uploadFileForm.files[i],
            sort: this.uploadFileForm.sort,
            description: this.uploadFileForm.description
          })
        }
        this.uploadFileForm = {files: [], sort: null, description: null,}
      },
    },
  }
</script>

<style scoped>

</style>
