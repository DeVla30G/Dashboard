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
      text: ''
    }
  },
  async  created () {
    const response = await fetch('http://localhost:3100/nasa', { method: 'GET', redirect: 'follow' })
    const text = await response.json()
    this.text = response.text
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
