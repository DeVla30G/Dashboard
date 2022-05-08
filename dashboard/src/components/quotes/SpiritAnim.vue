<template>
        <div class="card" >
          <div class="list-inline">
            <img src="../../assets/animal.png" alt="lotus"/>
            <h3>Your Daily Spirit Animal :</h3>
          </div>
          <p>{{ spirit_animal }}</p>
          <button v-on:click="newAnim">New</button>
        </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'spirit_animal',
  props: [
    'quot'
  ],
  data: () => {
    return {
      spirit_animal: ''
    }
  },
  mounted () {
    axios
      .get('http://localhost:3030/spiritAnim')
      .then((response) => {
        this.spirit_animal = (response.data[0].spirit_animal)
        console.log(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  methods: {
    newAnim () {
      axios
        .get('http://localhost:3030/spiritAnim')
        .then((response) => {
          this.spirit_animal = response.data[0].spirit_animal
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
  width: 28em;
  background-color: rgb(154, 253, 124);
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
}
</style>
