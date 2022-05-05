<template>

<div class="container">
  <NavBar />
  <div class="container loginForm">
  <!-- Pills navs -->
<ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
  
</ul>
<!-- Pills navs -->

<!-- Pills content -->
<div class="tab-content">

    <form>


      <!-- Firstname input -->
        <div class="form-group mb-1">
    <input v-model="firstname" type="text" class="form-control" id="exampleFormControlInput1" placeholder="Firstname">
    </div>

     <!-- Lastname input -->
        <div class="form-group mb-1">
    <input v-model="lastname" type="text" class="form-control" id="exampleFormControlInput1" placeholder="Lastname">
    </div>

      <!-- Username input -->
        <div class="form-group mb-1">
    <input v-model="username" type="text" class="form-control" id="exampleFormControlInput1" placeholder="Username">
    </div>

      <!-- Email input -->
        <div class="form-group mb-1">
    <input v-model="email" type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email">
    </div>

      <!-- Password input -->
        <div class="form-group mb-1">
    <input v-model="password" type="password" class="form-control" id="exampleFormControlInput1" placeholder="Password">
    </div>

      <!-- Repeat Password input -->
        <div class="form-group mb-2">
    <input v-model="password_confirmation" type="password" class="form-control" id="exampleFormControlInput1" placeholder="Password">
    </div>

      <!-- Submit button -->
      <button @click="signin" type="submit" class="btn btn-primary btn-block mb-3">Sign in</button>
    </form>

</div>
</div>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue';

// @ is an alias to /src
const axios = require('axios');
export default {
  name: "Register",
  components: {NavBar},
  data: () => {
    return {
      firstname: "",
      lastname: "",
      username:"",
      email: "",
      password: "",
      password_confirmation: "",
    };
  },
  methods: {
    async signin(event) {     
      event.preventDefault();
             axios.post("http://localhost:3000/register", {
                firstname: this.firstname,
                lastname: this.lastname,
                username:this.username,
                email: this.email,
                password: this.password,
                password_confirmation: this.password_confirmation
            })          
        
        .then((response) => {
           console.log(response)
          
          var result = response.data;
          if (result != null) {
            alert("User bien créé!");
            
          }
        })
        .catch((error) => {
          console.log(error);
        })

        /*axios
          .get("http://localhost:3000/users", {})
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            alert(error);
            console.log(error);
          });*/
          
    },
  },
};
</script>
<style>
.loginForm{
  width: 50%;
  margin-top: 150px;
}
</style>

async signin(event) {     
      event.preventDefault();
      const preview = document.querySelector('avatar');
        const file = document.querySelector('input[type=file]').files[0];
        const reader = new FileReader();
        let avatarUser = '';
        await reader.addEventListener("load", async () => {
          // on convertit l'image en une chaîne de caractères base64
          avatarUser = reader.result;
          console.log(avatarUser);
          fetch(avatarUser)
          .then(res => res.blob())
          .then(blob => {
            console.log(blob)
             axios.post("http://localhost:8000/api/users", {
                name: this.name,
                nickname:this.nickname,
                email: this.email,
                avatar: avatarUser,
                password: this.password,
                password_confirmation: this.password_confirmation
            })          
        })
        .then((response) => {
          // console.log('table')
          // console.table([this.title,
          // this.user_id,
          // this.category_id,
          // this.content,
          // this.img_post])
          // console.log(response.data);
          var result = response.data;
          if (result != null) {
            alert("User bien créé!");
            location.reload();
          }
        })
        .catch((error) => {
          console.log(error);
        })
        }, false);

        if (file) {
          await reader.readAsDataURL(file);
          console.log(reader);
          console.log(avatarUser);
          
    }
        axios
          .get("http://localhost:8000/api/users", {})
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            alert(error);
            console.log(error);
          });
          
    },
  },
};