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
        <user-radio-card @chooseUser="chooseUser" :users="users"/>
      </b-col>
    </b-row>

    <br/>

    <b-row>
      <b-col>
        <sort-radio-card @chooseSort="chooseSort" :sorts="sorts"/>
      </b-col>
    </b-row>

    <br/>

    <own-layout @chooseSort="chooseSort" @changeOwn="changeOwn" @removeOwn="removeOwn" @turnPage="turnPage"
                :sorts="sorts" :owns="owns" :total="total" :pageSize="ownQuery.pageSize"/>
  </b-container>
</template>

<script>
  import navbar from '../components/navbar'
  import userRadioCard from '../components/userRadioCard'
  import sortRadioCard from '../components/sortRadioCard'
  import ownLayout from '../components/ownLayout'
  import adminOwn from '../adminApi/adminOwn'
  import adminUser from '../adminApi/adminUser'
  import util from '../utils/util'

  export default {
    name: "adminOwnPage",
    data() {
      return {
        users: [],
        sorts: [],
        owns: [],
        total: 20,
        ownQuery: adminOwn.createOwnQuery(),
      }
    },
    created: function () {
      this.created()
    },
    methods: {
      created: function () {
        this.listAllUser()
        this.listSort()
        this.listOwn()
        this.getOwnCount()
      },
      chooseSort: function (sort) {
        this.ownQuery.sort = sort
        this.listOwn()
      },
      changeOwn: function (own) {
        adminOwn.changeOwn(own)
          .then(res => {
            util.successInfo('修改成功')
            this.created()
          })
      },
      removeOwn: function (own) {
        adminOwn.removeOwn(own)
          .then(res => {
            util.successInfo('删除成功')
            this.created()
          })
      },
      turnPage: function (page) {
        this.ownQuery.page = page
        this.listOwn()
      },
      listSort: function () {
        adminOwn.listSort({userId: 0})
          .then(res => {
            this.sorts = res.data.data;
          })
      },
      listOwn: function () {
        this.owns = []
        adminOwn.listOwn(this.ownQuery)
          .then(res => {
            this.owns = res.data.data;
          })
      },
      getOwnCount: function () {
        adminOwn.getOwnCount(this.ownQuery)
          .then(res => {
            this.total = res.data.data;
          })
      },
      listAllUser: function () {
        adminUser.listAllUser()
          .then(res => {
            this.users = res.data.data;
          })
      },
      chooseUser: function (user) {
        if (user == null) {
          this.ownQuery.userId = 0
        } else {
          this.ownQuery.userId = user.userId
        }
        this.listOwn()
      }
    },
    components: {
      'navbar': navbar,
      'user-radio-card': userRadioCard,
      'sort-radio-card': sortRadioCard,
      'own-layout': ownLayout,
    },
  }
</script>

<style scoped>

</style>
