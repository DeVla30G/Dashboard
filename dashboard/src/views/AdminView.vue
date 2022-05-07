<template>
<div>
<div v-for="user in users" v-bind:key="user.id">
   {{user.firstname}}
    {{user.lastname}}
     {{user.username}}
     {{user.role}}
      {{user.created_at}}
      {{user.updated_at}}

</div>
</div>
</template>

<script >
</script>

<script>
import axios from 'axios'
export default {
    name: 'AdminView',
    data () {
      return {
        users: []
    }
  },
    mounted () {
    axios
      .get('http://localhost:3000/users')
      .then((response) => {
        this.users = response.data
        console.log(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

}
</script>

<style scoped>

</style>
