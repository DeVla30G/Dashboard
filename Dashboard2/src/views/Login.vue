<template>
<div class="container">
  <NavBar />
  <div class="container">
  <div class="container loginForm">
  <!-- Pills navs -->
<ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">


</ul>
<!-- Pills navs -->

<!-- Pills content -->
<div class="tab-content">
  <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
    <form>

      <!-- Email input -->


      <div class="form-group">
    <input v-model="login.email" type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email...">
    </div>

       <div class="form-group">
      <input v-model="login.password" type="password" class="form-control" id="exampleFormControlInput1" placeholder="Password">
      </div>

      <!-- 2 column grid layout -->
      <div class="row mb-4">
        <div class="col-md-6 d-flex justify-content-center">
          <!-- Checkbox -->
          <div class="form-check mb-3 mb-md-0">
            <input class="form-check-input" type="checkbox" value="" id="loginCheck" checked />
            <label class="form-check-label" for="loginCheck"> Remember me </label>
          </div>
        </div>

        <div class="col-md-6 d-flex justify-content-center">
          <!-- Simple link -->
          <a href="#!">Forgot password?</a>
        </div>
      </div>

      <!-- Submit button -->
      <button @click="login" type="submit" class="btn btn-primary btn-block mb-4">Login</button>

      <!-- Register buttons -->
      <div class="text-center">
        <p>Not a member? <router-link :to="'/register'">Register</router-link></p>
      </div>
    </form>
  </div>
</div>
  </div>
</div>
</div>


  
</template>

<script>
import NavBar from '../components/NavBar.vue';
import setAuth from '../Services/auth_service.js';
const axios = require('axios');
export default {
  name: "Login",
  components: { NavBar },
  data: () => {
    return {
      email: "",
      password: "",
      user: ""
    };
  },
  mounted() {

  },
  methods: {
    login(event){
      event.preventDefault()
      axios.post('http://localhost:3000/login', {
        email: this.login.email,
        password: this.login.password,
      })
      .then((response) => {
        console.log(response.data.user);
        console.log(response.data.access_token);

        var token = response.data.access_token;
        localStorage.setItem('myToken', token);

        setAuth(token);

        this.$router.push("/");
      })
      .catch((error) => {
        console.log(error);
      });    
    },
  }
};
</script>