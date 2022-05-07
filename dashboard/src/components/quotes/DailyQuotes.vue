<template>
        <div class="card" >
          <div class="list-inline">
            <img src="../../assets/zen-icon.png" alt="lotus"/>
            <h3>Your Daily Quote :</h3>
          </div>
          <p>{{ positive }}</p>
          <button v-on:click="newQuote">New</button>
        </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'DailyQuotes',
  props: [
    'quot'
  ],
  data: () => {
    return {
      positive: ''
    }
  },
  mounted () {
    axios
      .get('http://localhost:3030/daily')
      .then((response) => {
        this.positive = (response.data[0].positive)
        console.log(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  methods: {
    newQuote () {
      axios
        .get('http://localhost:3030/daily')
        .then((response) => {
          this.positive = response.data[0].positive
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
  background-color: pink;
  padding:1em;
  border-radius:10px;
  box-shadow: 3px 3px 10px 6px rgb(68, 68, 68);
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
