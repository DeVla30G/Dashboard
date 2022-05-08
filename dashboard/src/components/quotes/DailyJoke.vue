<template>
<div class="col-md-6">
        <div class="card" >
          <div class="list-inline">
            <img src="../../assets/funny-icon.png" alt="lotus"/>
            <h3>Your Daily Joke :</h3>
          </div>
          <p>{{ dailyJoke }}</p>
          <button v-on:click="newJoke">New</button>
        </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'DailyJoke',
  props: [
    'quot'
  ],
  data: () => {
    return {
      dailyJoke: ''
    }
  },
  mounted () {
    axios
      .get('http://localhost:3030/joke')
      .then((response) => {
        this.dailyJoke = (response.data[0].dailyJoke)
        console.log(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  methods: {
    newJoke () {
      axios
        .get('http://localhost:3030/joke')
        .then((response) => {
          this.dailyJoke = response.data[0].dailyJoke
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
  height: 20em;
  width: 25em;
  background-color: rgb(254, 255, 192);
  padding:1em;
  border-radius:10px;
  box-shadow: 3px 3px 10px 6px rgb(68, 68, 68);
  margin-bottom: 2em;
  margin-top: 2em;
  margin-left: 20em;
}
.list-inline{
    display:inline-flex;
    text-decoration : underline;
    text-underline-position: under;
    margin:.5em;
}
img{
  width: 4em;
  height: auto;
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
padding: 12px 15px;
letter-spacing: 1px;
text-transform: uppercase;
transition: transform 80ms ease-in;
width: 10em;
margin-left: auto;
margin-right: auto;
margin-top: 2em;
}
</style>
