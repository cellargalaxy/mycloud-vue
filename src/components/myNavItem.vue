<template>
  <b-nav-item :href="'#'+url" :active="this.$route.path==url">{{title}}</b-nav-item>
</template>

<!--<my-nav-item :title="title" :url="url"/>-->

<script>
  export default {
    name: "myNavItem",
    props: ['url', 'title'],
  }
</script>

<style scoped>

</style>
