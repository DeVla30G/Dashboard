<template>
<div class="col-md-6">
        <div class="card" >
          <div class="list-inline">
            <img src="../../assets/challenge.png" alt="lotus"/>
            <h3>Your Daily Challenge :</h3>
          </div>
          <p>{{ challenge }}</p>
          <button v-on:click="newChallenge">New</button>
        </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'DailyChallenge',
  props: [
    'quot'
  ],
  data: () => {
    return {
      challenge: ''
    }
  },
  mounted () {
    axios
      .get('http://localhost:3030/challenge')
      .then((response) => {
        this.challenge = (response.data[0].challenge)
        console.log(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  methods: {
    newChallenge () {
      axios
        .get('http://localhost:3030/challenge')
        .then((response) => {
          this.challenge = response.data[0].challenge
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
  height: 15em;
  width: 28em;
  background-color: rgb(237, 145, 254);
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
margin-top: 2em;
}
</style>
