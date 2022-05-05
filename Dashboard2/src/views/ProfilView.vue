<template>
    <div class="container">
        <NavBar />

        <h1>Profil</h1>
        <img
              :src="user.avatar"
              alt="user__image"
              class="user__image"
            />
        <h3>{{user.name}}</h3><!--v-if='login' -->
         <h3>{{user.nickname}}</h3><!--v-if='login' -->
          <h3>{{user.email}}</h3><!--v-if='login' -->
          
          
    </div>
</template>

<script>
const axios = require('axios');
/*import NavBar from '../components/NavBar.vue';


export default {
  
    name: 'ProfilView',
    composents: { NavBar },
    data: () => {
    return { 
      user: {}
      };
    },
  mounted(){
    this.token = localStorage.getItem('myToken');
        axios.get('http://localhost:3000/users', {
          headers: {
            'Authorization': `Bearer ${this.token}` 
          }
        })
        .then((response) => {
        console.log(response.data)
        this.user = response.data
      })
  },
}*/
</script>

<style scoped>
.user__image {
  border-radius: 50%;
  height: 100px;
}
</style>
