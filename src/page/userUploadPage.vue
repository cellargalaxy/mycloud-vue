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
        <upload-layout @uploadFile="uploadFile" @uploadUrl="uploadUrl" :sorts="sorts" :forms="forms"/>
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
      uploadFile: function (uploadFileForm) {
        uploadFileForm.uploadFunc = userFile.uploadFile
        userFile.uploadFile(uploadFileForm)
          .then(data => {
            uploadFileForm.own = data.data
          })
          .finally(() => {
            this.forms.push(uploadFileForm)
          })
      },
      uploadUrl: function (uploadUrlForm) {
        uploadUrlForm.uploadFunc = userFile.submitUrl
        userFile.submitUrl(uploadUrlForm)
          .then(data => {
            uploadUrlForm.own = data.data
          })
          .finally(() => {
            this.forms.push(uploadUrlForm)
          })
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
