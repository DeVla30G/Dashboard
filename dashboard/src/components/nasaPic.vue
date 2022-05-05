<template>
<div class="nasa_pic_wrapper" v-bind:url='url'>
    <h2> Date</h2>
    <img src=" {{ url }} " alt="nasa picture of the day"/>>
</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'nasaPic',
  data () {
    return {
      url: ''
    }
  },
  async mounted () {
    axios
      .get('http://localhost:3100/nasa')
      .then((response) => {
        this.users = response.data
        console.log(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
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
