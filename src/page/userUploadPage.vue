<template>
  <b-container fluid>
    <b-row>
      <b-col>
        <navbar/>
      </b-col>
    </b-row>

    <br/>

    <b-row>
      <b-col sm="0" md="2" lg="3" xl="3"/>
      <b-col sm="12" md="8" lg="6" xl="6">
        <upload-layout @uploadFiles="uploadFiles" @uploadUrls="uploadUrls" :sorts="sorts" :forms="forms"/>
      </b-col>
      <b-col sm="0" md="2" lg="3" xl="3"/>
    </b-row>
  </b-container>
</template>

<script>
  import util from '../utils/util'
  import navbar from '../components/navbar'
  import uploadLayout from '../components/uploadLayout'
  import userOwn from '../userApi/userOwn'
  import userFile from '../userApi/userFile'

  export default {
    name: "userUploadPage",
    data() {
      return {
        sorts: [],
        forms: [],
      }
    },
    created: function () {
      util.exitWarm('确认离开？')
      this.listSort()
    },
    methods: {
      uploadFiles: async function (uploadFileForms) {
        for (let i = 0; i < uploadFileForms.length; i++) {
          let uploadFileForm = uploadFileForms[i]
          uploadFileForm.uploadFunc = userFile.uploadFile

          let data = await userFile.uploadFile(uploadFileForm)
          uploadFileForm.own = data
          this.forms.push(uploadFileForm)
        }
        util.successInfo('完成上传')
      },
      uploadUrls: async function (uploadUrlForms) {
        for (let i = 0; i < uploadUrlForms.length; i++) {
          let uploadUrlForm = uploadUrlForms[i]
          uploadUrlForm.uploadFunc = userFile.submitUrl

          let data = await userFile.submitUrl(uploadUrlForm)
          uploadUrlForm.own = data
          this.forms.push(uploadUrlForm)
        }
        util.successInfo('完成上传')
      },
      listSort: function () {
        this.sorts = []
        userOwn.listSort()
          .then(data => {
            this.sorts = data.data
          })
      },
    },
    components: {
      navbar,
      uploadLayout,
    },
  }
</script>

<style scoped>

</style>
