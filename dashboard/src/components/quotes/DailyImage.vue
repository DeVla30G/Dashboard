<template>
<div class="col-md-6">
        <div class="card" >
          <button v-on:click='closeMe'>X</button>
          <div class="list-inline">
            <img src="../../assets/cailloux.png" alt="lotus"/>
            <h3>Your Daily sweet image :</h3>
          </div>
          <img v-bind:src= image alt="DailyImage">
          <button v-on:click="newImage">New</button>
        </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'DailyImage',
  props: [
    'quot'
  ],
  data: () => {
    return {
      image: ''
    }
  },
  mounted () {
    axios
      .get('http://localhost:3030/dailyImage')
      .then((response) => {
        this.image = (response.data[0].image)
        console.log(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  methods: {
    newImage () {
      axios
        .get('http://localhost:3030/dailyImage')
        .then((response) => {
          this.image = response.data[0].image
          console.log(response.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    closeMe () {
      this.$emit('closeMe')
    }
  }
}
</script>

<style scoped>
.card{
  height: 30em;
  width: 30em;
  background-color: rgb(192, 255, 225);
  padding:1em;
  border-radius:10px;
  box-shadow: 3px 3px 10px 6px rgb(68, 68, 68);
}
.list-inline{
    display:inline-flex;
    text-decoration : underline;
    text-underline-position: under;
    margin:.5em;
}
img{
  width:4em;
  height:auto;
  border-radius: 50%;
  margin: .5em;
}
img:nth-child(2){
    width: 27em;
    height: auto;
    border-radius: 10px;
    border: 2px double green;
}
button {
border-radius: 20px;
border: 1px solid rgb(100, 77, 228);
background-color: rgb(100, 77, 228);
color: #FFFFFF;
font-size: 12px;
font-weight: bold;
padding: 12px 45px;
letter-spacing: 1px;
text-transform: uppercase;
transition: transform 80ms ease-in;
width: 15em;
margin-left: auto;
margin-right: auto;
}
</style>
