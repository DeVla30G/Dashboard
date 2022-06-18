<template>
<div class="col-md-6">
<div class="nasa_pic_wrapper" >
    <div class="title">
    <h2> {{ url.title }} </h2>
    </div>
    <div class="display-pic">
    <img v-bind:src= url.url alt="nasa picture of the day"/>
    </div>
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
      .get('http://localhost:3100/nasa/all')
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

<style>
.nasa_pic_wrapper{
    display:flex;
    flex-direction: column;
    border: 2px solid black;
    background-color: rgb(139, 139, 187);
    width:33em;
    height:30em;
    border-radius:10px;
    box-shadow: 3px 3px 10px 6px rgb(68, 68, 68);
    justify-content: center;
    align-content: normal;
    text-align: center;
}
.display-pic{
    display:flex;
    justify-content: center;
    align-content: normal;
}
.title{
    padding: 0 3em;
    text-align: center;
    overflow:auto;
}
img{
  max-width: 35em;
  max-height: 20em;
  object-fit: cover;
  margin:1em;
}
</style>
