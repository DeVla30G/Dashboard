<template>
<div>
<div class="flex min-h-screen">
   <nav-bar />
</div>
  <div class="corps">
    <aside>
      <side-bar/>
    </aside>

  </div>
</div>

</template>

<script>
import NavBar from '@/components/NavBar.vue'
import SideBar from '@/components/SideBar.vue'

export default {
  name: 'DashBoard',
  components: {
    NavBar,
    SideBar
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
