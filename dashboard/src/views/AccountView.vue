<template>
<div class="col-md-6">
        <div class="card">
          <ul class="list-inline">
            <li><img src="" alt="" /></li>
            <li>Your Daily Quote</li>
            <p >{{positives}}</p>
          <button v-on:click="newDaily">New</button>
          </ul>

        </div>
        <div class="card" >
          <ul class="list-inline">
            <li><img src="" alt="" /></li>
            <li>Your Daily Challenge</li>
            <p>{{challenges}}</p>
          <button v-on:click="newChallenge">New</button>
          </ul>

        </div>
         <div class="card" >
          <ul class="list-inline">
            <li><img src="" alt="" /></li>
            <li>Your Daily Image</li>
            <img :src= images />
          <button v-on:click="newImage">New</button>
          </ul>

        </div>
</div>

</template>

<script>
import axios from 'axios'
// import SideBar from '@/components/SideBar.vue'
// import DailyQuotes from '@/components/quotes/DailyQuotes.vue'

export default {
  name: 'AccountView',
  components: [
  ],

  data () {
    return {
      positives: '',
      challenges: '',
      images: ''
    }
  },
  mounted () {
    axios
      .get('http://localhost:3030/daily')
      .then((response) => {
        this.positives = response.data[0].positive
        console.log(this.positives)
      })
      .catch((err) => {
        console.log(err)
      })

    axios
      .get('http://localhost:3030/challenge')
      .then((response) => {
        this.challenges = response.data[0].challenge
        console.log(response.data)
      })
      .catch((err) => {
        console.log(err)
      })

    axios
      .get('http://localhost:3030/dailyImage')
      .then((response) => {
        this.images = response.data[0].image
        console.log(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  methods: {
    newDaily () {
      axios
        .get('http://localhost:3030/daily')
        .then((response) => {
          this.positives = response.data[0].positive
          console.log(response.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    newChallenge () {
      axios
        .get('http://localhost:3030/challenge')
        .then((response) => {
          this.challenges = response.data[0].challenge
          console.log(response.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    newImage () {
      axios
        .get('http://localhost:3030/dailyImage')
        .then((response) => {
          this.images = response.data[0].image
          console.log(response.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}

</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,200;1,400&family=Righteous&family=Zen+Antique&display=swap');

.text-dark{
  font-family: 'Righteous', Georgia, 'Times New Roman', Times, serif;
  font-size: 30px;
}

.topnav {
overflow: hidden;
background-image: linear-gradient(to bottom right, rgb(205, 105, 252),rgb(0 184 255 / 68%));
width:60%;
margin-left: auto;
margin-right:auto;
font-family: "Roboto", sans-serif;
}

.topnav a {
float: left;
display: block;
color: black;
text-align: center;
padding: 14px 16px;
text-decoration: none;
font-size: 17px;
}

.topnav a:hover {
background-color: #ddd;
color: black;
}
.topnav a.active {
background-color: #4121f3;
color: white;
}

.topnav .search-container {
float: right;
}

.topnav input[type=text] {
padding: 6px;
margin-top: 8px;
font-size: 17px;
border: none;
}

.topnav .search-container button {
float: right;
padding: 6px 10px;
margin-top: 8px;
margin-right: 16px;
background: #ddd;
font-size: 17px;
border: none;
cursor: pointer;
}

.topnav .search-container button:hover {
background: #ccc;
}

body {
background: #f1eee9;
font-family: "Roboto", sans-serif;
}

.main-content {
padding-top: 100px;
padding-bottom: 100px;
width:40%;
margin-right: auto;
margin-left: auto;
}

.card{
  height: 100px;
  margin-bottom: 80px;
  width: 350px;
  position: relative;
  background-color: rgb(243, 210, 215);
  border-radius: 20px;
  padding: 10px;
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: 0px 7px 30px 2px rgba(0,0,0,0.18);
  margin-top: 80px;
  height: 150px;

}
h1{
  color:white;
  position: absolute;
  left: 10px;
  bottom: 0px;
}
button {
border-radius: 20px;
border: 1px solid rgb(100, 77, 228);
background-color: rgb(100, 77, 228);
color: #FFFFFF;
font-size: 12px;
font-weight: bold;
padding: 12px 45px;
letter-spacing: 1px;
text-transform: uppercase;
transition: transform 80ms ease-in;

}
.list-inline{
  margin-bottom: 0 !important;
}

h3{
  margin: 0 !important;
}

</style>
