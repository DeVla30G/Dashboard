<template>
<div class="nasa_pic_wrapper">
    <h4> What's on your picture today: {{ text.date }} </h4>
    <div class="display_info"> {{ text.explanation }} </div>
    <h5>Copyright: {{ text.copyright }} </h5>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'nasaInfo',
  data () {
    return {
      text: ''
    }
  },
  async mounted () {
    axios
      .get('http://localhost:3100/nasa/all')
      .then((response) => {
        this.text = response.data
        console.log(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
</script>

<style scoped>
.nasa_pic_wrapper{
    border: 2px solid black;
    background-color: rgb(139, 139, 187);
    width:35em;
    height:25em;
    margin-left:60em;
    border-radius:10px;
    box-shadow: 3px 3px 10px 6px rgb(68, 68, 68);
    margin-top:0;
}
.display_info{
  overflow:scroll;
  overflow-x: hidden;
  max-width: 33em;
  height: 15em;
  margin:1em;
  background-color: antiquewhite;
  text-align: justify;
  padding: .8em;
}
h4, h5{
margin:.5em;
}
</style>
