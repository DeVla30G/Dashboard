<template>
    <div class="SideBar">
       <div class="sidebarWrapper">
         <div class="sidebarMenu">
            <ul class="sidebarList">
              <li class="sidebartListItem">
                <img class="icon" src='../assets/quotes.png' alt='quotes' />
 <a v-on:click= "handler('openDaily', 'closeDaily')" >Nice daily quotes</a>
<div class="dropup-content">
  <DailyQuotes v-if= "showDaily" />
  </div>
  </li>
    <li class="sidebartListItem">
        <img class="icon" src='../assets/sweet.png' alt='quotes' />
         <a v-on:click= "openSweet">Sweet image</a>
<div class="dropup-content">
 <DailyImage v-if= "showSweet" />
  </div>
    </li>
       <li class="sidebartListItem">
          <img class="icon" src='../assets/game.png' alt='quotes' />
       <a v-on:click= "openChallenge">Challenge</a>
<div class="dropup-content">
 <Challenge v-if= "showChallenge" />
  </div>
  </li>
          <li class="sidebartListItem">
             <img class="icon" src='../assets/jokes.png' alt='quotes' />
              <a  v-on:click="openJokes">Daily Jokes</a>
<div class="dropup-content">
 <DailyJoke v-if= "showJokes" />
 </div>
 </li>
         <li class="sidebartListItem">
           <img class='icon' src="../assets/spirit.png" alt="spirit-animal"/>
        <a  v-on:click="openTotem">Your spirit animal</a>
<div class="dropup-content">
 <spirit-anim v-if= "showTotem" />
 </div>
 </li>
               <li class="sidebartListItem">
                  <img class="icon" src='../assets/nasa-pic.png' alt='quotes' />
        <a  v-on:click="openNasaPic">NASA Daily Pic</a>
<div class="dropup-content">
<nasaPic v-if= "showNasaPic"/>
</div>
</li>
          <li class="sidebartListItem">
             <img class="icon" src='../assets/nasa-info.png' alt='quotes' />
         <a  v-on:click="openNasaInfo">NASA Info</a>
<div class="dropup-content">
<nasaInfo v-if= "showNasaInfo"/>
</div>
</li>

              <li class="sidebartListItem">
                 <img class="icon" src='../assets/weather.png' alt='quotes' />
<a  v-on:click="openWeather">Weather Next Hours</a>
<div class="dropup-content">
    <weather-view v-if="showWeatherNext"/>
</div>
              </li>
            <li class="sidebartListItem">
 <img class="icon" src='../assets/temperature.png' alt='quotes' />
 <a  v-on:click="openWeather">Weather in my City</a>
<div class="dropup-content">
    <weather-comp v-if="showWeatherCity"/>
</div>
</li>
            </ul>
         </div>
       </div>
    </div>
</template>
<script>
import DailyQuotes from '@/components/quotes/DailyQuotes.vue'
import nasaPic from '@/components/nasaPic.vue'
import nasaInfo from '@/components/nasaInfo.vue'
import Challenge from '../components/quotes/Challenge.vue'
import DailyImage from '../components/quotes/DailyImage.vue'
import DailyJoke from '../components/quotes/DailyJoke.vue'
import WeatherComp from '../components/WeatherComp.vue'
import WeatherView from '../components/WeatherView.vue'
import SpiritAnim from '../components/quotes/SpiritAnim.vue'

export default {
  name: 'SideBar',
  components: {
    DailyQuotes, nasaPic, nasaInfo, Challenge, DailyImage, DailyJoke, SpiritAnim, WeatherComp, WeatherView
  },
  data () {
    return {
      showDaily: false,
      closeMe: true,
      showChallenge: false,
      showJokes: false,
      showTotem: false,
      showSweet: false,
      showNasaPic: false,
      showNasaInfo: false,
      showWeatherCity: false,
      showWeatherNext: false
    }
  },
  methods: {
    goLogin () {
      this.$router.push('/login')
    },
    openDaily () {
      this.showDaily = true
      console.log(this.showDaily)
    },
    closeDaily () {
      this.showDaily = false
    },
    handler: function () {
      this.openDaily()
      this.closeDaily()
    },
    openSweet () {
      this.showSweet = true
      console.log(this.showSweet)
    },
    openJokes () {
      this.showJokes = true
      console.log(this.showJokes)
    },
    openTotem () {
      this.showTotem = true
      console.log(this.showTotem)
    },
    openChallenge () {
      this.showChallenge = true
      console.log(this.showChallenge)
    },
    openNasaPic () {
      this.showNasaPic = true
      console.log(this.showNasaPic)
    },
    openNasaInfo () {
      this.showNasaInfo = true
      console.log(this.showNasaInfo)
    },
    openWeatherNext () {
      this.showWeatherNext = true
      console.log(this.showWeatherNext)
    },
    openWeatherCity () {
      this.showWeatherCity = true
      console.log(this.showWeatherCity)
    }
  }
}
</script>

<style scoped>
.SideBar{
  background-color: rgb(27, 22, 39);
  margin: 0 4px;
  vertical-align: top;
  white-space: nowrap;
  padding:1em;
}
.sidebarWrapper{
    padding: 20px;
    color: #555;
}
a{
    color: black;
}
.sidebarMenu{
    margin-bottom: 10px;
}
.sidebarTitle{
    font-size: 13px;
    color: #555;
}
.sidebarList{
    list-style: none;
    padding: 5px;
}
.sidebartListItem{
    padding: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    border-radius: 10px;
    margin-top: 10px;
}

a{
   color:bisque;
   text-decoration: none;
   font-size:20px;
}
svg{
  margin:1em;
}
.dropup-content{
margin-left: 30em;
}
.icon{
  box-shadow: inset 0 0 40px 0 white;
  width:3em;
  height: auto;
  border-radius:50%;
}
</style>
