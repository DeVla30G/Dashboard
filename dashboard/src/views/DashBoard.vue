<template>
<div>
<div class="flex min-h-screen">
   <nav-bar />
</div>
  <div class="corps">
    <aside>
      <side-bar/>
    </aside>
      <div class="widgets">
           <nasa-pic/>
        <nasa-info/>
        <daily-quotes/>
        <weather-view/>
        <weather-comp/>
      </div>
  </div>
</div>

</template>

<script>
import NavBar from '@/components/NavBar.vue'
import SideBar from '@/components/SideBar.vue'
import nasaPic from '@/components/nasaPic.vue'
import nasaInfo from '@/components/nasaInfo.vue'
import DailyQuotes from '@/components/quotes/DailyQuotes.vue'
import WeatherView from '@/components/WeatherView.vue'
import WeatherComp from '@/components/WeatherComp.vue'

export default {
  name: 'DashBoard',
  components: {
    NavBar,
    SideBar,
    nasaPic,
    nasaInfo,
    DailyQuotes,
    WeatherView,
    WeatherComp
  },
  mounted () {
    if (localStorage.user) {
      this.user = localStorage.user
    }
  }
}
</script>

<style scoped>
.corps{
  width:100%;
  display: grid;
  grid-template-columns: 20% 80%;
}
aside{
  height: 100%;
  display:flex;
  flex-direction: column;
}
.widgets{
  display: flexbox;
  position: relative;
}

</style>
