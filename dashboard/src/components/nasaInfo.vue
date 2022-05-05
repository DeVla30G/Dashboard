<template>
<div class="nasa_pic_wrapper" >
    <h2> Date </h2>
    <p> {{ text.explanation }} </p>
</div>
</template>

<script>

export default {
  name: 'nasaInfo',
  data () {
    return {
      text: []
    }
  },
  created () {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
      mode: 'no-cors'
    }

    fetch('http://localhost:3100/nasa', requestOptions)
      .then(response => response.text())
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
    margin-left:20em;
    border-radius:10px;
    box-shadow: 3px 3px 10px 6px rgb(68, 68, 68);
    margin-top:0;
}
</style>
