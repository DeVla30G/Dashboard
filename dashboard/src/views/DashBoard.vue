<template>

<header>
  <NavBar />
</header>
<aside class="side">
  <side-bar/>
</aside>
<div>
  <nasa-pic/> <nasa-info/>
  <DailyQuotes/>
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
// import SideBar from '@/components/SideBar.vue'
// import { apiUrl } from '../../config.json'

export default {
  name: 'DashBoard',
  components: {
    NavBar,
    SideBar,
    nasaPic,
    nasaInfo,
    DailyQuotes
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
    background: rgb(210, 208, 218);
    border-radius: 0.45rem;
    -webkit-box-shadow: var(--widget-shadow);
    box-shadow: var(--widget-shadow);
    margin: 15em;
}
.side{
  width: 15%;
}

</style>
