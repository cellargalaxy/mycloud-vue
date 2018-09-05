<template>
  <b-img :src="src" center fluid-grow/>
</template>

<!-- <my-img :src="url" :contentType="null"></my-img> -->

<script>
  export default {
    name: "myImg",
    props: {
      src: {
        required: true
      },
      contentType: {
        default: null
      }
    }
  }
</script>

<style scoped>

</style>
