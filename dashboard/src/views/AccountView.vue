<template>
<div class="flex min-h-screen">
   <nav-bar />
   <h1> My Account </h1>
</div>
  <div class="corps">
      <side-bar-account/>
      <div class="widgets">
      </div>
  </div>
</template>

<script>
// import axios from 'axios'
// import ButtonGlobal from '@/components/ButtonGlobal.vue'
import NavBar from '@/components/NavBar.vue'
import SideBarAccount from '@/components/SideBarAccount.vue'
// import nasaPic from '@/components/nasaPic.vue'
// import nasaInfo from '@/components/nasaInfo.vue'
// import DailyQuotes from '@/components/quotes/DailyQuotes.vue'
// import Challenge from '../components/quotes/Challenge.vue'
// import DailyImage from '../components/quotes/DailyImage.vue'
// import DailyJoke from '../components/quotes/DailyJoke.vue'
// import SpiritAnim from '../components/quotes/SpiritAnim.vue'
// import SideBar from '@/components/SideBar.vue'
// import { apiUrl } from '../../config.json'
export default {
  name: 'DashBoard',
  components: {
    NavBar,
    SideBarAccount
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
  grid-template-columns: 20% 80%;
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
