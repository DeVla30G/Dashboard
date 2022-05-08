<template>
<div class="col-md-6">
        <div class="card" >
          <div class="list-inline">
            <img src="../../assets/zen-icon.png" alt="lotus"/>
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
  width: 35em;
  margin-left: 20em;
  background-color: pink;
  border-radius: 20px;
  padding: 10px;
  box-shadow: 0px 7px 30px 2px rgba(0,0,0,0.18);
  margin-bottom: 2em;
  margin-top: 2em;
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
width: 10em;
}
</style>
