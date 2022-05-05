<template>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg">
    <!-- Container wrapper -->
    <div class="container-fluid">
      <img src="../assets/Dash_logo.png" alt="logo-dashboard"/>
      <!-- Toggle button -->
      <button class="navbar-toggler" type="button" data-mdb-toggle="collapse"
        data-mdb-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation" >
        <i class="fas fa-bars"></i>
      </button>
      <!-- Collapsible wrapper -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <!-- Navbar brand -->
        <!-- Left links -->
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
<router-link style="text-decoration: none" :to="'/'"><a class="nav-link" href="#">Dashboard</a></router-link
            >
          </li>
          <li class="nav-item"></li>
          <li class="nav-item">
            <a class="nav-link" href="#"></a>
          </li>
        </ul>
        <!-- Left links -->
      </div>
      <!-- Collapsible wrapper -->
      <!-- Right elements -->
      <div class="d-flex align-items-center">
        <ul v-if="this.token == null" class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link style="text-decoration: none" :to="'/register'"
              ><a class="nav-link" href="#">Register</a></router-link
            >
          </li>
          <li class="nav-item">
            <router-link style="text-decoration: none" :to="'/login'">
            <a class="nav-link" href="#">Login</a></router-link>
          </li>
        </ul>
        <!-- Notifications -->
        <!-- <div class="dropdown">
        <a
          class="text-reset me-3 dropdown-toggle hidden-arrow"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <i class="fas fa-bell"></i>
        </a>
        <ul
          class="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuLink"
        >
          <li>
            <a class="dropdown-item" href="#">Some news</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Another news</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Something else here</a>
          </li>
        </ul>
      </div> -->
        <p v-if="this.token != null" style="margin-top: 15px; padding-right: 5px">
          {{ user.name }} </p>
        <!-- Avatar -->
        <div v-if="this.token != null" class="dropdown">
          <a
            class="dropdown-toggle d-flex align-items-center hidden-arrow"
            href="#"
            id="navbarDropdownMenuAvatar"
            role="button"
            data-mdb-toggle="dropdown"
            aria-expanded="false">
            <img :src="user.avatar" class="rounded-circle" height="25" alt="User Image" loading="lazy"
              style="border-radius: 60%; height: 30px; width: 30px"/>
          </a>
          <ul class="dropdown-menu dropdown-menu-end"
            aria-labelledby="navbarDropdownMenuAvatar">
            <li>
<router-link style="text-decoration: none" :to="'/profil'"><a class="dropdown-item" href="#">Profil</a></router-link>
            </li>
            <li v-if="user.is_admin == 1">
<router-link style="text-decoration: none" :to="'/AccueilCrud'"><a class="dropdown-item" href="#">Admin</a></router-link>
            </li>
            <li>
              <a @click="logout" class="dropdown-item" href="#">Logout</a>
            </li>
          </ul>
        </div>
      </div>
      <!-- Right elements -->
    </div>
    <!-- Container wrapper -->
  </nav>
  <!-- Navbar -->
</template>

<script>
const axios = require('axios')
export default {
  name: 'NavBar',
  component: {},
  props: {},
  data: () => {
    return {
      token: '',
      user: {}
    }
  },
  mounted () {
    this.token = localStorage.getItem('myToken')
    axios
      .get('http://localhost:3000/users', {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      })
      .then((response) => {
        console.log(response.data)
        this.user = response.data
      })
  },
  computed () {},
  methods: {
    logout () {
      axios.get('http://localhost:3000/users')
      localStorage.removeItem('myToken')
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed&family=Zen+Antique&display=swap');
.nav-item .router-link {
  text-decoration: none;
}
.navbar{
  background-color: rgb(27, 22, 39);
}
.navbar img{
  margin:1em;
}
.navbar-nav{
  font-family: 'Roboto', Verdana, Geneva, Tahoma, sans-serif;
  font-weight: 800;
  font-size: 24px;
}
</style>
