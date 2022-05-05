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
        this.quotes = response.data
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

.list-inline{
  margin-bottom: 0 !important;
}
header{
  z-index: 99;
}
</style>
