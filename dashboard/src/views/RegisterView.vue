<template>
<div>
<div class="form-container">
<form >
<h1> Create an Account</h1>
<input v-model="firstname" type="text" placeholder="Firstname" required/><br>
<input v-model="lastname" type="text" placeholder="Lastname" required/><br>
<input v-model="username" type="text" placeholder="Choose a Username" required/><br>
<input v-model="email" type="email" placeholder="Email" required/><br>
<input v-model="password" type="password" placeholder="Password" required/><br>
<input v-model="password_confirmation" type="password" placeholder="Confirm your Password" required/><br>
<button @click="signup">Sign Up</button>
</form>
</div>
</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'RegisterView',

  data () {
    return {
      firstname: '',
      lastname: '',
      username: '',
      email: '',
      password: '',
      password_confirmation: ''
    }
  },
  methods: {
    async signup (event) {
      event.preventDefault()
      axios.post('http://localhost:3000/register', {
        firstname: this.firstname,
        lastname: this.lastname,
        username: this.username,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation
      })

        .then((response) => {
          console.log(response)

          const result = response.data
          if (result != null) {
            alert('Account created!')
            this.$router.push('/login')
          }
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
h1 {
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
width: 800px;
max-width: 100%;
min-height: 900px;
   display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
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
