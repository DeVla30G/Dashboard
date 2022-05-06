<template>
<header>
  <NavBar />
</header>
<aside class="side">
  <side-bar/>
</aside>
  <nasa-pic/> <nasa-info/>
  <DailyQuotes/>
  <waether-view/>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import SideBar from '@/components/SideBar.vue'
import nasaPic from '@/components/nasaPic.vue'
import nasaInfo from '@/components/nasaInfo.vue'
import DailyQuotes from '@/components/quotes/DailyQuotes.vue'
import WaetherView from '@/components/WeatherView.vue'

export default {
  name: 'DashBoard',
  components: {
    NavBar,
    SideBar,
    nasaPic,
    nasaInfo,
    DailyQuotes,
    WaetherView
  }
}
</script>
,
    WaetherView
<style scoped>

.widget {
    display: block;
    position: relative;
    width:20%;
    height:10%;
    padding: 15px 20px;
    background: rgb(202, 241, 233);
    border-radius: 0.45rem;
    -webkit-box-shadow: var(--widget-shadow);
    box-shadow: var(--widget-shadow);
    margin: 15em;
}
.side{
  width: 15%;
}

</style>
