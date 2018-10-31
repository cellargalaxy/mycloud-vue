import axios from '../utils/axios'

const url = '/admin/user'

function addUser(username, password) {
  return axios.tokenAxiosMethod.post(url + '/addUser', {username: username, password: password})
}

function removeUser(userId) {
  return axios.tokenAxiosMethod.post(url + '/removeUser', {userId: userId})
}

function changeUser(userId, username, password) {
  return axios.tokenAxiosMethod.post(url + '/changeUser', {
    userId: userId,
    username: username,
    password: password
  })
}

function getUser(userId, username) {
  return axios.tokenAxiosMethod.get(url + '/getUser', {userId: userId, username: username})
}

function getUserVo(userId, username) {
  return axios.tokenAxiosMethod.get(url + '/getUserVo', {userId: userId, username: username})
}

function listAllUser() {
  return axios.tokenAxiosMethod.get(url + '/listAllUser', {})
}

function listAllUserVo() {
  return axios.tokenAxiosMethod.get(url + '/listAllUserVo', {})
}

function listAllPermission() {
  return axios.tokenAxiosMethod.get(url + '/listAllPermission', {})
}

export default {
  addUser: addUser,
  removeUser: removeUser,
  changeUser: changeUser,
  getUser: getUser,
  getUserVo: getUserVo,
  listAllUser: listAllUser,
  listAllUserVo: listAllUserVo,
  listAllPermission: listAllPermission,
}
