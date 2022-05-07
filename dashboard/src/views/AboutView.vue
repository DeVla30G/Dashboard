<template>
  <div class="container d-flex justify-content-center">
    <NavBar />
    <div class="card text-white bg-secondary mb-3" style="max-width: 18rem">
      <div class="card-header">{{ user.username }}</div>
      <div class="card-body">
        <h5 class="card-title">{{ user.firstname }} {{ user.lastname }}</h5>
        <p class="card-text">
          <img
            src="../assets/avatarF.jpg"
            class="rounded-circle"
            height="35"
            alt="User Image"
            style="border-radius: 50%; height: 4em; width: 4em"
          />
          {{ user.email }}
        </p>
      </div>
    </div>
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
.container{
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>
