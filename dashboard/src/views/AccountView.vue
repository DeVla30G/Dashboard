<template>
<div>
  <NavBar></NavBar>
  <side-bar></side-bar>
  <div class="col-md-6">
        <div class="card" >
          <ul class="list-inline">
            <li><img src="" alt="" /></li>
            <li>Your Daily Quote</li>
          </ul>
          <p>{{ quotes }}</p>
        </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'
// import SideBar from '@/components/SideBar.vue'
import DailyQuotes from '@/components/quotes/DailyQuotes.vue'
import SideBar from '@/components/SideBar.vue'
import NavBar from '@/components/NavBar.vue'
export default {
  name: 'AccountView',
  components: [
    DailyQuotes,
    SideBar,
    NavBar
  ],

  data () {
    return {
      quotes: ''
    }
  },
  mounted () {
    axios
      .get('http://localhost:3030/daily')
      .then((response) => {
        this.quotes = response.data[0].positive
        console.log(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  methods: {

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

.main-content {
padding-top: 100px;
padding-bottom: 100px;
width:40%;
margin-right: auto;
margin-left: auto;
}

.post-block {
background: #fff;
padding: 25px;
margin-bottom: 25px;
border-radius: 5px;
overflow: hidden;
box-shadow: 0 2px 30px rgba(0, 0, 0, 0.1);
transition: all 0.2s;
}
.post-block img.author-img {
height: 100px;
width: 100px;
border-radius: 45px;
}
.post-block img.author-img.author-img--small {
height: 100px;
width: 100px;
}
.post-block__content img,
.post-block__content video,
.post-block__content audio {
max-width: 100%;
border-radius: 5px;
}
.post-block .comment-view-box__comment {
border-radius: 5px;
background: #f5f5f5;
padding: 15px;
}
.btn-primary {
color: #fff;
background-color: #007bff;
border-color: #007bff;
height: 25px;
}
img {
padding: 10px 10px 10px 10px;
vertical-align: middle;
border-style: none;
}

h1{
  color:white;
  position: absolute;
  left: 10px;
  bottom: 0px;
}

.list-inline{
  margin-bottom: 0 !important;
}
header{
  z-index: 99;
}
</style>
