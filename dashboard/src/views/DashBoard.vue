<template>
<header>
  <nav-bar />
</header>
<div id="app">
<aside class="side">
  <side-bar/>
</aside>
  <nasa-pic/> <nasa-info/>
  <daily-quotes/>
  <weather-view/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import SideBar from '@/components/SideBar.vue'
import nasaPic from '@/components/nasaPic.vue'
import nasaInfo from '@/components/nasaInfo.vue'
import DailyQuotes from '@/components/quotes/DailyQuotes.vue'
import WeatherView from '@/components/WeatherView.vue'

export default {
  name: 'DashBoard',
  components: {
    NavBar,
    SideBar,
    nasaPic,
    nasaInfo,
    DailyQuotes,
    WeatherView
  }, 
 mounted() {
    if (localStorage.user) {
      this.user = localStorage.user;
    }
  }
}
</script>

<style scoped>

</style>
