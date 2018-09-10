<template>
  <b-row>
    <b-col>
      <b-card>
        <b-button @click="chooseUser(null)" size="sm" variant="link">取消选择用户</b-button>
        <b-form-radio-group v-model="userIndex" :options="options" @input="chooseUser"/>
      </b-card>
    </b-col>
  </b-row>
</template>

<!--<user-radio-card @chooseSort="chooseUser" :sorts="users"/>-->

<script>
  export default {
    name: "userRadioCard",
    data() {
      return {
        userIndex: null,
        options: [],
      }
    },
    props: {
      users: {
        default: function () {
          return [{userId: 1, username: 'cellargalaxy'}]
        }
      },
    },
    watch: {
      users(val) {
        this.setOptions(val)
      },
    },
    created: function () {
      this.setOptions(this.users)
    },
    methods: {
      chooseUser: function (val) {
        this.userIndex = val
        this.$emit('chooseUser', this.users[this.userIndex])
      },
      setOptions: function (users) {
        if (users != null) {
          this.options = []
          for (let i = 0; i < users.length; i++) {
            this.options.push({text: users[i].username, value: i})
          }
        }
      },
    },
  }
</script>

<style scoped>

</style>
