<template>
<div class="flex min-h-screen">
   <nav-bar />
   <h1> My Account </h1>
</div>
  <div class="corps">
    <aside>
      <side-bar/>
    </aside>
      <div class="widgets">
           <nasa-pic/>
        <nasa-info/>
        <daily-quotes/>
        <daily-joke/>
        <daily-image/>
        <challenge/>
        <weather-view/>
        <weather-comp/>
      </div>
  </div>
</template>

<script>
// import axios from 'axios'
// import ButtonGlobal from '@/components/ButtonGlobal.vue'
import NavBar from '@/components/NavBar.vue'
import SideBar from '@/components/SideBar.vue'
import nasaPic from '@/components/nasaPic.vue'
import nasaInfo from '@/components/nasaInfo.vue'
import DailyQuotes from '@/components/quotes/DailyQuotes.vue'
import Challenge from '../components/quotes/Challenge.vue'
import DailyImage from '../components/quotes/DailyImage.vue'
import DailyJoke from '../components/quotes/DailyJoke.vue'
// import SideBar from '@/components/SideBar.vue'
// import { apiUrl } from '../../config.json'
export default {
  name: 'DashBoard',
  components: {
    NavBar,
    SideBar,
    nasaPic,
    nasaInfo,
    DailyQuotes,
    Challenge,
    DailyImage,
    DailyJoke
  }
}

</script>

<style scoped>
.widgets{
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(3, minmax(250px,1fr));
  grid-auto-rows: 35em;
  margin:0;
}
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
h1{
  font-weight: 600;
  background-color:rgb(27, 22, 39);
  color: bisque;
  margin:0;
}
</style>
