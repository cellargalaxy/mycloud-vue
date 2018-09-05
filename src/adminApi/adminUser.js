import axios from '../utils/axios'
import adminUserApi from './adminUserApi'
import util from "../utils/util";

function addUser(user) {
  if (!axios.logined()) {
    return axios.createEmtryAxios()
  }
  if (util.checkParameterAnd('确认添加用户？', user, 'username', 'userPassword')) {
    return adminUserApi.addUser(user.username, user.userPassword)
  }
  return axios.createEmtryAxios()
}

function removeUser(user) {
  if (!axios.logined()) {
    return axios.createEmtryAxios()
  }
  if (util.checkParameterAnd('确认删除用户？', user, 'userId')) {
    return adminUserApi.removeUser(user.userId)
  }
  return axios.createEmtryAxios()
}

function listAllUser() {
  if (!axios.logined()) {
    return axios.createEmtryAxios()
  }
  return adminUserApi.listUser(100, 1, 0, null, null, null)
}

function listAllUserAuthorization() {
  if (!axios.logined()) {
    return axios.createEmtryAxios()
  }
  return adminUserApi.listUserAuthorization(100, 1, 0, null, null, null)
}

function listAllUserOwn() {
  if (!axios.logined()) {
    return axios.createEmtryAxios()
  }
  return adminUserApi.listUserOwn(100, 1, 0, null, null, null)
}

function changeUser(user) {
  if (!axios.logined()) {
    return axios.createEmtryAxios()
  }
  if (util.checkParameterAnd('确认修改用户？', user, 'userId')) {
    return adminUserApi.changeUser(user.userId, user.username, user.userPassword)
  }
  return axios.createEmtryAxios()
}

export default {
  addUser: addUser,
  removeUser: removeUser,
  listAllUser: listAllUser,
  listAllUserAuthorization: listAllUserAuthorization,
  listAllUserOwn: listAllUserOwn,
  changeUser: changeUser,
}
