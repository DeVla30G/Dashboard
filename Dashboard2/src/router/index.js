import { createRouter, createWebHistory, onBeforeRouteLeave } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProfilView from '../views/ProfilView.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import PostDetailsView from '../views/PostDetailsView.vue'
import * as auth from '../Services/auth_service.js';


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: 
    [
      

    ],
    beforeEnter(to, from, next)
    {
      if(!auth.isLogged()){
        next('/login');
      } else {
        next();
      }
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/profil',
    name: 'profil',
    component: ProfilView,
  },
  

  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/post/:id',
    name: 'post',
    component: PostDetailsView,
    props: true
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
