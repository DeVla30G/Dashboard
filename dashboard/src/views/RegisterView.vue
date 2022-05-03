<template>
<div>
<div class="form-container">
<form >
<img alt="Vue logo" src="#">
<h1> Create an Account</h1>
<input v-model="firstname" type="text" placeholder="Name" required/><br>
<input v-model="lastname" type="text" placeholder="Surname" required/><br>
<input v-model="email" type="email" placeholder="Email" required/><br>
<input v-model="username" type="text" placeholder="Choose a Username" required/><br>
<input v-model="password" type="password" placeholder="Password" required/><br>
<input v-model="password_confirmation" type="password" placeholder="Confirm your Password" required/><br>
<button @click="createAccount()">Sign Up</button>
</form>
<button-global/>
</div>
</div>
</template>

<script>
import axios from 'axios'
import ButtonGlobal from '@/components/ButtonGlobal.vue'
// import { apiUrl } from '../../config.json'
export default {
  name: 'RegisterView',
  components: {
    ButtonGlobal
  },
  data () {
    return {
      firstname: '',
      lastname: '',
      username: '',
      email: '',
      password: '',
      password_confirmation: '',
      newuser: [{
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: ''
      }]
    }
  },
  methods: {
    validateEmail (email) {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    },
    createAccountTest () {
      this.$router.push('/account')
    },
    createAccount () {
      const newuser = {
        name: this.firstname,
        surname: this.lastname,
        username: this.username,
        email: this.email,
        password: this.password
      }
      axios
        .post('http://localhost:3000/register', newuser)
        .then((result) => {
          this.bool = true
          console.log(result)
          sessionStorage.setItem('token', result.data.jwt)
          sessionStorage.setItem('user', JSON.stringify(result.data))
          this.$router.push('/account')
          return true
        })
        .catch((error) => {
          const code = error.response.status
          code === 403
            ? (this.errorMessage = 'You should be 13 years old to use Yowl')
            : code === 409
              ? (this.errorMessage = 'This User already exist')
              : code === 400
                ? (this.errorMessage = 'Empty field !')
                : (this.errorMessage = 'There was an error')
          console.log(error.response.status)
          console.log('There was an error!', error)
          alert(this.errorMessage)
          return false
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
