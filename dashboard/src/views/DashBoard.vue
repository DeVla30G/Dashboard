<template>
<b-card-header class="header">  <img src="../assets/Dash_logo.png" alt="logo app"/></b-card-header>
<side-bar></side-bar>
  <h1>Dashboard</h1>

<button-global></button-global>
</template>

<script>
// import axios from 'axios'
import ButtonGlobal from '@/components/ButtonGlobal.vue'
import SideBar from '@/components/SideBar.vue'
// import SideBar from '@/components/SideBar.vue'
// import { apiUrl } from '../../config.json'

export default {
  name: 'DashBoard',
  components: {
    ButtonGlobal,
    SideBar
  }
}
</script>

<style scoped>

.header{
  background-color:rgb(35, 4, 145);
  width:100%;
  height: auto;
  padding:1em;
  display: inline-flex;
  justify-content: space-between;
}
.header img{
  width: 5em;
  height: auto;
}
.header_kpi{
  font-family: 'kanit', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 800;
  display:flex;
  height:10em;
}

.widget {
    display: block;
    position: relative;
    width:40%;
    height:10%;
    padding: 15px 20px;
    background: rgb(202, 241, 233);
    border-radius: 0.45rem;
    -webkit-box-shadow: var(--widget-shadow);
    box-shadow: var(--widget-shadow);
    margin: 5em;
}
h3 {
    display: block;
    font-size: 0.83em;
    margin-block-start: 1.67em;
    margin-block-end: 1.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}
.mb-lg {
    margin-bottom: 1.5rem;
}
.align-items-center {
    -webkit-box-align: center!important;
    -ms-flex-align: center!important;
    align-items: center!important;
}
.justify-content-between {
    -webkit-box-pack: justify!important;
    -ms-flex-pack: justify!important;
    justify-content: space-between!important;
}
.d-flex {
    display: -webkit-box!important;
    display: -ms-flexbox!important;
    display: flex!important;
}
*, :after, :before {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.la-arrow-right:before {
    content: "\F061";
    color:brown;
    height: 2em;
}
*, :after, :before {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.users_table{
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 3px 3px 5px gray;
  margin: 3em;
  width:fit-content;
  font-size:16px;
  background-color: white;
}
.titre{
border: 1px solid rgb(57, 56, 56);
border-radius: 8px;
text-align: center;
background-color: rgb(162, 247, 172);
}
td{
  padding: .5em;
  max-width: 20em;
  word-wrap: break-word;
  flex-wrap: wrap;
  border-bottom: 2px solid blueviolet;
}
th{
  min-width: 5em;
}
.h-100{
  box-shadow: 3px 3px 5px gray;
}
img{
  width:10em;
  height: auto;
}
</style>
