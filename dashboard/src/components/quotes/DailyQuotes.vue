<template>
        <div class="card" >
          <ul class="list-inline">
            <li><img src="" alt="" /></li>
            <li>Your Daily Quote</li>
          </ul>
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

</style>
