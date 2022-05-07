<template>
<div>
<header>
  <NavBar />
  <h1>My Account</h1>
</header>
<aside class="side">
  <side-bar/>
</aside>
  <nasa-pic/> <nasa-info/>
  <DailyQuotes/>
  <Challenge/>
  <DailyImage/>
  <DailyJoke/>
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
h1{
  font-weight: 600;
  background-color:rgb(27, 22, 39);
  color: bisque;
  margin: 0;
}
</style>
