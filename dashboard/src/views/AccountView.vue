<template>
<div class="col-md-6">
        <div class="card">
          <ul class="list-inline">
            <li><img src="" alt="" /></li>
            <li>Your Daily Quote</li>
          </ul>
          <p>{{positives.positive}}</p>
          <button v-on:click="newDaily">New</button>
        </div>
        <div class="card" >
          <ul class="list-inline">
            <li><img src="" alt="" /></li>
            <li>Your Daily Challenge</li>
          </ul>
          <p>{{challenge}}</p>
          <button v-on:click="newChallenge">New</button>
        </div>
         <div class="card" >
          <ul class="list-inline">
            <li><img src="" alt="" /></li>
            <li>Your Daily Image</li>
          </ul>
          <p>{{image}}</p>
          <button v-on:click="newImage">New</button>
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
      positives: [],
      challenge: '',
      image: ''
    }
  },
  mounted () {
    axios
      .get('http://localhost:3030/daily')
      .then((response) => {
        this.positives = JSON.stringify(response.data)
        console.log(this.positives)
      })
      .catch((err) => {
        console.log(err)
      })

    axios
      .get('http://localhost:3030/challenge')
      .then((response) => {
        this.challenge = JSON.stringify(response.data)
        console.log(response.data)
      })
      .catch((err) => {
        console.log(err)
      })

    axios
      .get('http://localhost:3030/dailyImage')
      .then((response) => {
        this.image = JSON.stringify(response.data)
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
          this.positive = response.data
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
          this.challenge = response.data
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
          this.image = response.data
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
  background-color: pink;
  border-radius: 20px;
  padding: 10px;
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: 0px 7px 30px 2px rgba(0,0,0,0.18);
  margin-top: 80px;

}
h1{
  color:white;
  position: absolute;
  left: 10px;
  bottom: 0px;
}
.date{
    position: absolute;
    right: 10px;
    top: 10px;
    text-align: right;
    color: white;
  }
.city{
    position: absolute;
    right: 10px;
    bottom: 0px;
    color: white;
}

.list-inline{
  margin-bottom: 0 !important;
}

h3{
  margin: 0 !important;
}

</style>
