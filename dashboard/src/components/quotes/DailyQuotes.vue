<template>
 <div class="col-md-6">
        <div class="card" >
          <ul class="list-inline">
            <li><img src="" alt="" /></li>
            <li>Your Daily Quote</li>
          </ul>
          <p></p>
        </div>
      </div>
</template>

<script>
export default {
  name: 'DailyQuotes'
}
async mounted () {
    axios
      .get('http://localhost:3000/ ')
      .then((response) => {
        this.posts = response.data
        console.log(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  },

</script>

<style scoped>
.card{
  height: 100px;
  margin-bottom: 80px;
  width: 350px;
  position: relative;
  background-color: pink;
  border-radius: 20px;
  padding: 10px;
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: 0px 7px 30px 2px rgba(0,0,0,0.18);
  margin-top: 80px;

}
h1{
  color:white;
  position: absolute;
  left: 10px;
  bottom: 0px;
}
.date{
    position: absolute;
    right: 10px;
    top: 10px;
    text-align: right;
    color: white;
  }
.city{
    position: absolute;
    right: 10px;
    bottom: 0px;
    color: white;
}

.list-inline{
  margin-bottom: 0 !important;
}

h3{
  margin: 0 !important;
}

</style>
