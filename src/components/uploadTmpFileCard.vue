<template>
  <b-card>
    <b-form>
      <b-form-group label="">
        <b-input-group prepend="">
          <b-form-file v-model="uploadTmpFileForm.file" :no-drop="true" placeholder="选择文件"/>
          <b-input-group-text>保存时间</b-input-group-text>
          <b-form-select :options="ownExpireTimes" v-model="uploadTmpFileForm.ownExpireTime"/>
        </b-input-group>
      </b-form-group>

      <b-button type="submit" variant="primary" style="width: 100%" @click="upload">上传临时文件</b-button>
    </b-form>
  </b-card>
</template>

<upload-tmp-file-card @upload="upload" :ownExpireTimes="ownExpireTimes"/>

<script>
  import util from '../utils/util'

  export default {
    name: "uploadTmpFileCard",
    props: {
      ownExpireTimes: {
        default: function () {
          return [
            {value: 1, text: '一天'},
            {value: 2, text: '两天'},
            {value: 3, text: '三天'},
          ]
        }
      },
    },
    data() {
      return {
        uploadTmpFileForm: {
          file: null,
          ownExpireTime: this.ownExpireTimes.length > 0 ? this.ownExpireTimes[0].value : 0
        }
      }
    },
    methods: {
      upload: function () {
        if (this.uploadTmpFileForm.file == null) {
          util.errorInfo('还未选择任何文件')
          return
        }
        if (this.uploadTmpFileForm.ownExpireTime == null) {
          util.errorInfo('还未选择文件过期时间')
          return
        }
        this.$emit('upload', this.uploadTmpFileForm)
        this.uploadTmpFileForm = {
          file: null,
          ownExpireTime: this.ownExpireTimes.length > 0 ? this.ownExpireTimes[0].value : 0
        }
      },
    },
  }
</script>

<style scoped>

</style>
