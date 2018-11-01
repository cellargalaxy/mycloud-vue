<template>
  <div>
    <video v-if="mime.startsWith('audio')||mime.startsWith('video')" style="width: 100%" controls="controls">
      <source :src="url" type="video/mp4"/>
      <source :src="url" type="video/ogg"/>
      <source :src="url" type="video/webm"/>
      <object :data="url">
        <embed :src="url"/>
      </object>
    </video>
    <my-img v-else :src="url"/>
  </div>
</template>

<multimedia :url="url" :mime="mime"/>

<script>
  import myImg from './myImg'

  export default {
    name: "multimedia",
    props: {
      url: {
        default: function () {
          return ''
        }
      },
      mime: {
        default: function () {
          return ''
        }
      },
    },
    components: {
      myImg,
    },
  }
</script>

<style scoped>

</style>
