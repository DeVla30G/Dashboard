import axios from 'axios'

export function isLogged () {
  const token = localStorage.getItem('myToken')
  return token != null
}

const setAuth = (token) => {
  axios.defaults.headers.common = {
    Authorization: 'Bearer ' + token
  }
}

export default setAuth
