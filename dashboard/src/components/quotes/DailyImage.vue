<template>
        <div class="card" >
          <div class="list-inline">
            <img src="../../assets/zen-icon.png" alt="lotus"/>
            <h3>Your Daily sweet image :</h3>
          </div>
          <img v-bind:src= image alt="DailyImage">
          <button v-on:click="newImage">New</button>
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
    }
  }
}
</script>

<style scoped>
.card{
  height: auto;
  width: 35em;
  margin-left: 20em;
  background-color: pink;
  border-radius: 20px;
  padding: 10px;
  box-shadow: 0px 7px 30px 2px rgba(0,0,0,0.18);
}
.list-inline{
    display:inline-flex;
    text-decoration : underline;
    text-underline-position: under;
    margin:.5em;
}
img{
  border-radius: 50%;
  margin: .5em;
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
}
</style>
