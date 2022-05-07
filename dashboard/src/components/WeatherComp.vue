<template>
      <!-- Search bar -->
      <div class="search-box">
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
      meteo: []
    }
  },
  async mounted () {
    axios
      .get('http://localhost:3600/weather/city')
      .then((response) => {
        this.meteo = response.data[0]
        console.log(response.data[0])
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
      max-width: 20em;
      min-width: 15em;
      max-height: 20em;
  }
</style>
