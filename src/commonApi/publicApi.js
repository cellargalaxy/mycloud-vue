import axios from '../utils/axios'
import util from '../utils/util'

function login(username, password) {
  util.checkParameterAnd(null, {username: username, password: password}, 'username', 'password')
  return axios.instance.post('/login', {username: username, password: password})
}

function setLogin(userAuthorization) {
  setCurrentUserAuthorization(userAuthorization)
}

function setLogout() {
  axios.setToken(null)
  setCurrentUserAuthorization(null)
}

function getUserAuthorization(token, username) {
  axios.setToken(token)
  return axios.simpleAxios.get('/user/user/getUserAuthorization', {params: {username: username}})
}

function setCurrentUserAuthorization(userAuthorization) {
  util.setCookie('userAuthorization', JSON.stringify(userAuthorization))
}

function getCurrentUserAuthorization() {
  var userAuthorizationString = util.getCookie('userAuthorization')
  if (userAuthorizationString != undefined && userAuthorizationString != null && userAuthorizationString.length > 0) {
    return JSON.parse(userAuthorizationString)
  }
  return null
}

export default {
  login: login,
  getUserAuthorization: getUserAuthorization,
  setCurrentUserAuthorization: setCurrentUserAuthorization,
  getCurrentUserAuthorization: getCurrentUserAuthorization,
  setLogin: setLogin,
  setLogout: setLogout,
}
