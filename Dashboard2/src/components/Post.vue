<template>
<div class="container">
  <div class="containercards">
    <div class="card" v-for="post in posts" :key="post.id">
      <div class="card__header">
        <img :src="post.img_post" alt="">
        
      </div>
      <div class="card__body">
        <router-link style="text-decoration: none;" :to="{ name: 'post', params: { id: post.id }}"><h4>{{post.title}}</h4> </router-link>  
        
        <p>
          
          {{post.content}}
          {{post.user_id}}
          {{post.category_id}}
      
        </p>
      </div>
      <div class="card__footer">
        <div class="user">
          <div class="user__info">

            <small>{{post.created_at.substr(0, 16)}}</small>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>

const axios = require('axios')
export default {
  name: 'Post',
  component: { },
  props: {
    //posts
      id: "",
      title: "",
      user_id: "",
      category_id: "",
      content: "",
      img_post: "",
      created_at: "",
    //users
      name: "",
      nickname: "",
      avatar: "",
      email: "",
      },
      data() {
        return {
          posts: "",
          user: ""
        };
      },
      mounted() {
      /*axios.get('http://localhost:8000/api/posts')
        .then((response) => {
          // console.log(response.data);
          this.posts = response.data;
        })
        .catch((error) => {
          console.log(error);
        }),*/
        axios.get('http://localhost:3000/users')
        .then((response) => {
          // console.log(response.data);
          this.users = response.data;
        })
        .catch((error) => {
          console.log(error);
        })

    },
  }
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap");

body {
  font-family: "Quicksand", sans-serif;
  display: grid;
  place-items: center;
  height: 100vh;
  background: #7f7fd5;
  background: linear-gradient(to right, #91eae4, #86a8e7, #7f7fd5);
}

.containercards {
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1200px;
  margin-block: 2rem;
  gap: 2rem;
}

img {
  max-width: 100%;
  display: block;
  object-fit: cover;
}

.card {
  display: flex;
  flex-direction: column;
  width: clamp(20rem, calc(20rem + 2vw), 15rem);
  overflow: hidden;
  box-shadow: 0 0.1rem 1rem rgba(0, 0, 0, 0.1);
  border-radius: 1em;
  background: #ece9e6;
  background: linear-gradient(to right, #ffffff, #ece9e6);
}

.card__body {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.tag {
  align-self: flex-start;
  padding: 0.25em 0.75em;
  border-radius: 1em;
  font-size: 0.75rem;
}

.tag + .tag {
  margin-left: 0.5em;
}

.tag-blue {
  background: #56ccf2;
  background: linear-gradient(to bottom, #2f80ed, #56ccf2);
  color: #fafafa;
}

.tag-brown {
  background: #d1913c;
  background: linear-gradient(to bottom, #ffd194, #d1913c);
  color: #fafafa;
}

.tag-red {
  background: #cb2d3e;
  background: linear-gradient(to bottom, #ef473a, #cb2d3e);
  color: #fafafa;
}

.card__body h4 {
  font-size: 1.5rem;
  text-transform: capitalize;
}

.card__footer {
  display: flex;
  padding: 1rem;
  margin-top: auto;
}

.user {
  display: flex;
  gap: 0.5rem;
}

.user__image {
  border-radius: 50%;
  height: 50px;
}

.user__info > small {
  color: #666;
}
</style>