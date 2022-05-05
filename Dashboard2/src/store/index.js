import { createStore } from 'vuex'
import * as auth from '../Services/auth_service.js';

export default createStore({
  state: {

    apiURL: 'http://localhost:3000',
    serverPath: 'http://localhost:3000',
    profil: {},

  },
  getters: {
  },
  mutations: {

    authenticated(state, payload){
      state.isLogged = auth.isLogged();
      if(state.isLogged){
        state.profil = payload
      } else {
        state.profil = {};
      }
    }

  },
  actions: {
    authenticated(context, payload) {
      context.commit('authenticate', payload);
    }
  },
  modules: {
  }
})
