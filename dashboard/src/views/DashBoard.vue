<template>
<header>
  <NavBar />
</header>
<aside>
  <side-bar/>
</aside>
<div class="dashboard_body" id="app">
  <nasa-pic/>
</div>

</template>

<script>
// import axios from 'axios'
// import ButtonGlobal from '@/components/ButtonGlobal.vue'
import NavBar from '@/components/NavBar.vue'
import SideBar from '@/components/SideBar.vue'
import nasaPic from '@/components/nasaPic.vue'
// import SideBar from '@/components/SideBar.vue'
// import { apiUrl } from '../../config.json'

export default {
  name: 'DashBoard',
  components: {
    NavBar,
    SideBar,
    nasaPic
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

.dashboard-body{
  width:calc(100vh-30px);
  height: 85%;
  overflow:hidden;
}
</style>
