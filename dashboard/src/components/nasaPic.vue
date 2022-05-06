<template>
<div class="nasa_pic_wrapper" >
    <h2> {{ url.date }} </h2>
    <div class="display-pic">
    <img v-bind:src= url alt="nasa picture of the day"/>
    </div>
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
        this.url = response.data
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
    display:flex;
    border: 2px solid black;
    background-color: rgb(139, 139, 187);
    width:40em;
    height:30em;
    border-radius:10px;
    box-shadow: 3px 3px 10px 6px rgb(68, 68, 68);
    top:0;
    margin-left: 20em;
}
.display-pic{
  display:bloc
}
img{
  max-width: 35em;
  max-height: 20em;
  object-fit: cover;
  justify-content: center;
  margin:1em;
}
</style>
