<template>
<div class="container">

  <div class="container">
    <NavBar />
      <!-- <button @click="toggleCreatePost" type="button" class="btn btn-dark btn-rounded mt-3">Post</button> -->

      <button @click="toggleCreatePost" type="button" class="btn btn-outline-dark mt-3">Create Post</button>
    <Post /> 
  </div>
  
  <div v-if="showCreatePost" class="container">
    <CreatePost @close="toggleCreatePost()" />
  </div>

   <div class="container footerHome"><Footer /> </div>
   </div>
</template>

<script>
const axios = require("axios");
/*import NavBar from '@/components/NavBar.vue'
import Post from '@/components/Post.vue'
import CreatePost from '@/components/CreatePost.vue'
import Footer from '@/components/Footer.vue'


export default {
  name: 'HomeView',
  components: { NavBar, Post, CreatePost, Footer },
  data: () => {
    return {
    title:"",
    user_id:"",
    category_id:"",
    content:"",
    img:"",
    showCreatePost: false
    };
  },
  methods: {
    toggleCreatePost(event) { 
       this.showCreatePost = !this.showCreatePost
      event.preventDefault()
      axios.post('http://localhost:8000/api/posts', {
        title: this.title,
        user_id:this.user_id,
        category_id: this.category_id,
        content:this.content,
        img: this.img
      })
      .then((response) => {
        console.log(response.data);
        var result = response.data;
        if (result != null){
          alert("Post bien créé!")
        }
      })
      .catch((error) => {
        console.log(error);
      }),
        axios.get('http://localhost:8000/api/posts', {      
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
    },
  }
  
}*/
</script>

<style scoped>
.footerHome{
  margin-top: 150px;
}
</style>