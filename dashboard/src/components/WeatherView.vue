<template>

<div class="weather_wrapper">
    <h4> </h4>
    <div class="display_info">
    <table>
        <thead>
            <tr>
            <th colspan="4">Next few days</th>
            </tr>
        </thead>
        <tbody>
            <tr class="next_date">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
             <tr class="weather_icon">
                <td><skycon condition="clear-day" /></td>
                <td><skycon condition="partly-cloudy-day" /></td>
                <td><skycon condition="rain" /></td>
                <td><skycon condition="wind" /></td>
            </tr>
             <tr class="temp">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </tbody>
    </table>
    </div>
    <h5>Date </h5>
</div>
</template>

<script>
import axios from 'axios'
import skycon from 'vue-skycons'

export default {
  name: 'WeatherView',
  components: {
    skycon
  },
  data () {
    return {
      meteo: []
    }
  },
  async mounted () {
    axios
      .get('http://localhost:3600/weather')
      .then((response) => {
        this.meteo = response.data
        console.log(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
</script>

<style scoped>
.weather_wrapper{
    border: 2px solid black;
    background-color: rgb(139, 139, 187);
    width:35em;
    height:25em;
    margin-left:60em;
    border-radius:10px;
    box-shadow: 3px 3px 10px 6px rgb(68, 68, 68);
    margin-top:0;
}
.display_info{
  overflow:scroll;
  overflow-x: hidden;
  max-width: 33em;
  height: 15em;
  margin:1em;
  background-color: antiquewhite;
  text-align: justify;
  padding: .8em;
}
h4, h5{
margin:.5em;
}
</style>
