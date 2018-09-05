<template>
  <b-container fluid>
    <b-row>
      <b-col>
        <navbar/>
      </b-col>
    </b-row>

    <br/>

    <b-row>
      <b-col>
        <own-layout @chooseSort="chooseSort" @changeOwn="changeOwn" @removeOwn="removeOwn" @turnPage="turnPage"
                    :sorts="sorts" :owns="owns" :total="total" :pageSize="ownQuery.pageSize"/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import navbar from '../components/navbar'
  import ownLayout from '../components/ownLayout'
  import userOwn from '../userApi/userOwn'
  import util from '../utils/util'

  export default {
    name: "userOwnPage",
    data() {
      return {
        sorts: [],
        owns: [],
        total: 20,
        ownQuery: userOwn.createOwnQuery(),
      }
    },
    created: function () {
      this.created()
    },
    methods: {
      created: function () {
        this.listAllSort()
        this.listOwn()
        this.getOwnCount()
      },
      chooseSort: function (sort) {
        this.ownQuery.sort = sort
        this.listOwn()
      },
      changeOwn: function (own) {
        userOwn.changeOwn(own)
          .then(res => {
            util.successInfo('修改成功')
            this.created()
          })
      },
      removeOwn: function (own) {
        userOwn.removeOwn(own)
          .then(res => {
            util.successInfo('删除成功')
            this.created()
          })
      },
      turnPage: function (page) {
        this.ownQuery.page = page
        this.listOwn()
      },
      listAllSort: function () {
        userOwn.listAllSort()
          .then(res => {
            this.sorts = res.data.data;
          })
      },
      listOwn: function () {
        this.owns = []
        userOwn.listOwn(this.ownQuery)
          .then(res => {
            this.owns = res.data.data;
          })
      },
      getOwnCount: function () {
        userOwn.getOwnCount(this.ownQuery)
          .then(res => {
            this.total = res.data.data;
          })
      },
    },
    components: {
      'navbar': navbar,
      'own-layout': ownLayout,
    },
  }
</script>

<style scoped>

</style>
