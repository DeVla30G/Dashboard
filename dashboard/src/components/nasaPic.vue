<template>
<div class="nasa_pic_wrapper" >
    <h2> Date {{ result }} </h2>
    <img src="picture" alt="nasa picture of the day"/>
</div>
</template>

<script>
// import axios from 'axios'

export default {
  name: 'nasaPic',
  data () {
    return {
      result: ''
    }
  },
  created () {
    fetch('http://localhost:3100/nasa', { method: 'GET', redirect: 'follow' })
      .then((response) => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error))
  }
}
</script>

<style scoped>
.nasa_pic_wrapper{
    border: 2px solid black;
    background-color: rgb(139, 139, 187);
    width:20em;
    height:15em;
    border-radius:10px;
    box-shadow: 3px 3px 10px 6px rgb(68, 68, 68);
}
</style>
