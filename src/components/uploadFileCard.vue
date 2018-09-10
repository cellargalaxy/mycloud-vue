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
        <b-form-textarea v-model="uploadFileForm.description" placeholder="描述" rows="3" maxlength="256"/>
      </b-form-group>

      <b-button type="submit" variant="primary" style="width: 100%" @click="uploadFile">上传</b-button>
    </b-form>
  </b-card>
</template>

<!--<upload-file-card/>-->

<script>
  import util from '../utils/util'
  import userFile from '../userApi/userFile'
  import userOwn from '../userApi/userOwn'

  export default {
    name: "uploadFileCard",
    data() {
      return {
        sorts: [],
        uploadFileForm: {
          files: [],
          sort: null,
          description: null,
        },
      }
    },
    created: function () {
      this.created()
    },
    methods: {
      created: function () {
        this.listSort()
      },
      listSort: function () {
        userOwn.listSort()
          .then(res => {
            this.sorts = res.data.data
          })
      },
      uploadFile: function () {
        userFile.uploadFile(this.uploadFileForm.files, this.uploadFileForm.sort, this.uploadFileForm.description)
          .then(res => {
            util.successInfo('上传成功')
          })
      },
    }
  }
</script>

<style scoped>

</style>
