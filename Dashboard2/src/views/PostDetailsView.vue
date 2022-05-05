<template>
<section class="">
      <div id="intro" class="container  ">
      <!-- <h1 class="mb-0 h4"> {{post.title}}</h1> -->
    </div>
  <!--Main Navigation-->
   
    <div class="container shadow-lg p-3 mb-5 bg-white rounded ">
      <!--Grid row-->
            <h2>{{ post.title }}</h2>
        <!--Grid column-->
        <div style="width: 50%;" class="container">
          <!--Section: Post data-mdb-->
          <section class="border-bottom mb-4">         
            <img :src="post.img_post" class="img-fluid shadow-2-strong rounded-5 mb-4" alt="">
          </section>
          <!--Section: Post data-mdb-->

          <!--Section: Text-->
          <section>
            <p class="lead">
             {{ post.content }}
            </p>
            <hr>
            <div>
                        <Like />
            </div>

          </section>
          
          <!--Section: Comments-->
            <Comment :idPost="post.id" />
          <!--Section: Comments-->


          <AddComment :idPost="post.id" />

          <!--Section: Reply-->
        </div>
        <!--Grid column-->

        <!--Grid column-->
      
        <!--Grid column-->
      <!--Grid row-->
    </div>
</section>
</template>

<script>
/*import Comment from '../components/Comment.vue';
import Like from '../components/Like.vue';
import AddComment from '../components/AddComment.vue';
const axios = require('axios');


export default {
    name: 'PostView',
    components: { Comment, AddComment, Like},
    props: ['id'],
      data() {
        return {
          post: {},
        };
      },
      mounted() {
      axios.get(`http://localhost:8000/api/posts/` + this.id, {})
        .then((response) => {
          console.log(response.data);
          this.post = response.data;
          console.log(response.data)
        })
        .catch((error) => {
          console.log(error);
        })
    },
}
*/


</script>

<style scoped>
  #intro {
        /* Margin to fix overlapping fixed navbar */
        margin-top: 58px;
      }

      @media (max-width: 991px) {
        #intro {
          /* Margin to fix overlapping fixed navbar */
          margin-top: 45px;
        }
      }
</style>

<style scoped>

</style>