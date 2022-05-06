<template>
        <div class="card" >
          <div class="list-inline">
            <img src="../../assets/zen-icon.png" alt="lotus"/>
            <h3>Your Daily Quote :</h3>
          </div>
          <p>{{ quotes }}</p>
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
      quotes: ''
    }
  },
  mounted () {
    axios
      .get('http://localhost:3030/daily')
      .then((response) => {
        this.quotes = (response.data[0].positive)
        console.log(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
</script>

<style scoped>
.card{
  height: auto;
  margin-bottom: 80px;
  width: 35em;
  position: relative;
  background-color: pink;
  border-radius: 20px;
  padding: 10px;
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: 0px 7px 30px 2px rgba(0,0,0,0.18);
  margin-top: 80px;
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
</style>
