import axios from './axios'
import util from './util'

var token = null

function login(username, password) {
  util.checkParameter(null, username, password)
  return axios.simpleAxios.post('/login', {username: username, password: password})
}

function setToken(t) {
  token = t
  util.setCookie('Authorization', t)
}

function getToken() {
  if (token == null) {
    token = util.getCookie('Authorization')
  }
  return token
}

function getUserAuthorization(username) {
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
  setToken: setToken,
  getToken: getToken,
  getUserAuthorization: getUserAuthorization,
  setCurrentUserAuthorization: setCurrentUserAuthorization,
  getCurrentUserAuthorization: getCurrentUserAuthorization
}
