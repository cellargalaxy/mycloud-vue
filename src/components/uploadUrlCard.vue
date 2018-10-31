<template>
  <b-card>
    <b-form>
      <b-input-group prepend="">
        <b-form-input v-model="uploadUrlForm.url" type="url" placeholder="url"/>
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

      <b-button type="submit" variant="primary" style="width: 100%" @click="upload">上传</b-button>
    </b-form>
  </b-card>
</template>

<upload-url-card @upload="upload" :sorts="sorts"/>

<script>
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
        uploadUrlForm: {url: null, sort: null, description: null,}
      }
    },
    methods: {
      upload: function () {
        this.$emit('upload', this.uploadUrlForm)
        this.uploadUrlForm = {url: null, sort: null, description: null,}
      },
    },
  }
</script>

<style scoped>

</style>
