<template>

      <!-- Search bar -->
      <div class="search-box">
          <h3> Search by city:</h3>
        <input type="text" class="search-bar" placeholder="Search..." />
      </div>
      <!-- Result -->
      <div class="weather-wrap">
        <div class="location-box">
          <div class="location">
          </div>
          <div class="date"></div>
        </div>
        <div class="weather-box">
          <div class="temp"> °c</div>
          <div class="weather"> </div>
        </div>
      </div>

</template>

<script>
import axios from 'axios'

export default {
  name: 'WeatherComp',
  data () {
    return {
      meteo: ''
    }
  },
  async mounted () {
    axios
      .get('http://localhost:3600/weather/city')
      .then((response) => {
        this.meteo = response.data
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
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;500;700;900&display=swap");
  .search-box{
    border: 2px solid black;
    background-color: rgb(40, 40, 231);
    width:30em;
    height:25em;
    border-radius:10px;
    box-shadow: 3px 3px 10px 6px rgb(68, 68, 68);
    margin:0;
    padding: 1em;
    margin-left: 20em;
  }
  .col-md-6{
    margin-bottom: 2em;
    margin-top: 2em;
    text-align: center;
    margin-left: 20em;
  }

  .weather-box{
    margin-left: 20em;
  }

</style>
