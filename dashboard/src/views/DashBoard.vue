<template>
<div class="flex ">
   <nav-bar />
</div>
  <div class="corps">
    <aside>
      <side-bar/>
    </aside>
    <div class="widgets">
      <nasa-info/>
      <nasa-pic/>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import SideBar from '@/components/SideBar.vue'
import nasaPic from '@/components/nasaPic.vue'
import nasaInfo from '@/components/nasaInfo.vue'
/* import DailyQuotes from '@/components/quotes/DailyQuotes.vue'
import WeatherView from '@/components/WeatherView.vue'
import WeatherComp from '@/components/WeatherComp.vue'
import Challenge from '@/components/quotes/Challenge.vue'
import DailyImage from '@/components/quotes/DailyImage.vue'
import DailyJoke from '@/components/quotes/DailyJoke.vue'
import LocalStore from '../assets/localStore' */

export default {
  name: 'DashBoard',
  components: {
    NavBar,
    SideBar,
    nasaPic,
    nasaInfo
  /* DailyQuotes,
    WeatherView,
    WeatherComp,
    Challenge,
    DailyImage,
    DailyJoke */
  }
}
</script>

<style scoped>
.corps{
  width:100%;
  display: grid;
  grid-template-columns: 18% 82%;
}
aside{
  height: 100%;
  display:flex;
  flex-direction: column;
}
.widgets{
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(3, minmax(250px,1fr));
  grid-auto-rows: 35em;
  margin:0;
}

</style>
