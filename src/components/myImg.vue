<template>
  <b-img :src="src" center fluid-grow/>
</template>

<my-img :src="src"/>

<script>
  export default {
    name: "myImg",
    props: {
      src: {
        default: function () {
          return 'https://i.loli.net/2018/08/21/5b7bb5dd4f0df.png'
        },
      },
      contentType: {
        default: function () {
          return null
        }
      },
    },
  }
</script>

<style scoped>

</style>
