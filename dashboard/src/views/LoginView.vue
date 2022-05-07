<template>
<div class="form-container sign-in-container">
<form >
<h1>Please Login</h1>
<span></span>
<input v-model="email" type="text" placeholder="Email" required/>
<input v-model="password" type="password" placeholder="Password" required/>
<button @click="login">Sign In</button><br>
<br>
<a href="">Forgot your password?</a>
</form>
<hr>
<p>Not registered yet ? Please sign up :</p>

<button class="ghost" id="signUp" @click="goRegister()">Sign Up</button>
<br>
<button class="ghost" id="signUp" @click="goHome()">Home</button>
</div>
</template>

<script>
import axios from 'axios'
import setAuth from '../Services/auth_service.js'
export default {
  name: 'LoginView',
  components: {
  },
  data () {
    return {
      email: '',
      password: '',
      user: ''
    }
  },
  methods: {
    login (event) {
      event.preventDefault()
      axios.post('http://localhost:3000/login', {
        email: this.email,
        password: this.password
      })
        .then((response) => {
          console.log(response.data.user)
          console.log(response.data.jwt)

          const token = response.data.jwt
          localStorage.setItem('myToken', token)

          setAuth(token)

          this.$router.push('/account')
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}

</script>
<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Hurricane&family=Pacifico&display=swap');
h1,p {
text-align: center;
font-family: 'Pacifico', cursive;
font-size: 30px;
}
img{
width:280px;
height:280px;
}
.form-container {
height: 100%;
transition: all 0.6s ease-in-out;
background-image: linear-gradient(to bottom right, rgb(173, 80, 154),rgb(0 184 255 / 68%));
border-radius: 10px;
box-shadow: 0 14px 28px rgba(0,0,0,0.25),0 10px 10px rgba(0,0,0,0.22);
overflow: hidden;
width: 600px;
max-width: 100%;
min-height: 900px;
   display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 100px;
    display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 0 50px;
text-align: center;
}
input {
background-color: #eee;
border: none;
padding: 12px 15px;
margin: 8px 0;
width: 100%;
}
button {
border-radius: 20px;
border: 1px solid rgb(85, 21, 3);
background-color: rgb(228, 77, 178);
color: #FFFFFF;
font-size: 12px;
font-weight: bold;
padding: 12px 45px;
letter-spacing: 1px;
text-transform: uppercase;
transition: transform 80ms ease-in;
    margin-top: 10px;
}
</style>
