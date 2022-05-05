<template>
  <div class="container">
    <NavBar />
    <h1>Profil</h1>
    <h3>{{ user.firstname }}</h3>
    <h3>{{ user.username }}</h3>
    <h3>{{ user.email }}</h3>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
const axios = require('axios')
export default {
  name: 'AboutView',
  props: ['id'],
  composents: { NavBar },
  data: () => {
    return {
      user: {}
    }
  },
  mounted () {
    this.token = localStorage.getItem('myToken')
    axios
      .get('http://localhost:3000/users/' + this.$route.params.id, {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      })
      .then((response) => {
        console.log(response.data)
        this.user = response.data
      })
  }
}
</script>

<style scoped>
.user__image {
  border-radius: 50%;
  height: 100px;
}
</style>
