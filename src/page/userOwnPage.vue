<template>
  <b-container fluid>
    <b-row>
      <b-col>
        <navbar/>
      </b-col>
    </b-row>

    <br/>

    <own-layout @chooseSort="chooseSort" @changeOwn="changeOwn" @removeOwn="removeOwn" @turnPage="turnPage"
                :sorts="sorts" :owns="owns" :total="total" :pageSize="ownQuery.pageSize"/>
  </b-container>
</template>

<script>
  import navbar from '../components/navbar'
  import ownLayout from '../components/ownLayout'
  import util from '../utils/util'
  import userOwn from '../userApi/userOwn'

  export default {
    name: "userOwnPage",
    data() {
      return {
        sorts: [],
        ownQuery: userOwn.createOwnQuery(),
        owns: [],
        total: 0,
      }
    },
    created: function () {
      this.listSort()
      this.turnPage(1)
      this.getOwnCount()
    },
    methods: {
      chooseSort: function (sort) {
        this.ownQuery.sort = sort
        this.listOwn()
      },
      changeOwn: function (own) {
        userOwn.changeOwn(own)
          .then(data => {
            util.successInfo('修改成功')
          })
      },
      removeOwn: function (own) {
        userOwn.removeOwn(own)
          .then(data => {
            util.successInfo('删除成功')
          })
      },
      turnPage: function (page) {
        this.ownQuery.page = page
        this.listOwn()
      },
      listOwn: function () {
        this.owns = []
        userOwn.listOwn(this.ownQuery)
          .then(data => {
            this.owns = data.data
          })
      },
      getOwnCount: function () {
        this.total = 0
        userOwn.getOwnCount(this.ownQuery)
          .then(data => {
            this.total = data.data
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
      ownLayout,
    },
  }
</script>

<style scoped>

</style>
