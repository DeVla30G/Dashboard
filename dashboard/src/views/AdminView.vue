<template>
 <div class="card-deck container d-flex justify-content-center">
  <div v-for="user in users" v-bind:key="user.id">
    <div class="card text-white bg-secondary mb-3" style="max-width: 18rem">
      <div class="card-header"><p>User Id : {{user.id}}</p>
        <p>{{user.username}}</p></div>
      <div class="card-body">
        <p class="card-title"></p>
          <p>Firstname : {{user.firstname}}</p>
          <p>Lastname : {{user.lastname}}</p>
        <p class="card-text"></p>
          <h6>email : {{user.email}}</h6>
          <h6>Role : {{user.role}}</h6>
      </div>
    </div>
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
.card{
  margin-left: 20px;
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>
