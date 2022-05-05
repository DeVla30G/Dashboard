<template>

<div>
<b-card-header class="header">  <img src="../assets/Dash_logo.png" alt="logo app"/></b-card-header>
<side-bar></side-bar>
  <h1>Dashboard</h1>
  <div></div>

<SideBar/>

 <div class="container">
    <div class="row">
      <div class="col-md-6">
        <div class="card">
          <ul class="list-inline">
            <li><img src="" alt="" /></li>
            <li>Sunny</li>
          </ul>
          <h1>36°</h1>
          <div class="date">
            <h3>23:56</h3>
            <p>MON 08/23</p>
          </div>
          <p class="city">Paris</p>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card" >
          <ul class="list-inline">
            <li><img src="" alt="" /></li>
            <li>Sunny</li>
          </ul>
          <h1>27°</h1>
          <div class="date">
            <h3>15:56</h3>
            <p>MON 08/23</p>
          </div>
          <p class="city">Londres</p>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card" >
          <ul class="list-inline">
            <li><img src="" alt="" /></li>
            <li>Daily Quote</li>
          </ul>
          <p>"Aujourd'hui est le plus beau jour de ma vie car c'est le jour que je vis."</p>
        </div>
      </div>
    </div>
 </div>
</div>

</template>

<script>
import axios from 'axios'
import SideBar from '@/components/SideBar.vue'

export default {
  name: 'AccountView',
  components: [
    SideBar
  ],
  data () {
    return {
      me: JSON.parse(localStorage.getItem('user'))

    }
  },
  async mounted () {
    axios
      .get('http://localhost:3000/posts ')
      .then((response) => {
        this.posts = response.data
        console.log(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  methods: {

    AddWidget () {
      axios
        .post('http://localhost:3000/comments',
          {
            comment: this.commentcontent,
            post_id: this.$route.params.id
          })
        .then(function (response) {
          console.log(response)
        })
    },

    logout () {
      localStorage.removeItem('user')
      localStorage.removeItem('token')
      this.that.$router.push('/')
    },
    goProfile () {
      this.$router.push('/profile')
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
