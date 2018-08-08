import axios from './axios'
import util from './util'

function login(username, password) {
  return axios.simpleAxios.post('/login', {username: username, password: password});
}

function setToken(token) {
  axios.setToken(token)
  util.setCookie('Authorization', token)
}

function getToken() {
  return util.getCookie('Authorization')
}

function getUserAuthorization(username) {
  return axios.simpleAxios.get('/user/user/getUserAuthorization', {params: {username: username}});
}

function setCurrentUserAuthorization(userAuthorization) {
  util.setCookie('userAuthorization', JSON.stringify(userAuthorization))
}

function getCurrentUserAuthorization() {
  var userAuthorizationString = util.getCookie('userAuthorization');
  if (userAuthorizationString != undefined && userAuthorizationString != null && userAuthorizationString.length > 0) {
    return JSON.parse(userAuthorizationString);
  }
  return null;
}

export default {
  login: login,
  setToken: setToken,
  getToken: getToken,
  getUserAuthorization: getUserAuthorization,
  setCurrentUserAuthorization: setCurrentUserAuthorization,
  getCurrentUserAuthorization: getCurrentUserAuthorization,
}
