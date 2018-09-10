import userUserApi from './userUserApi'
import axios from "../utils/axios";
import util from "../utils/util";

function getUser(user) {
  if (!axios.logined()) {
    return axios.createEmtryAxios()
  }
  if (util.checkParameterOr(null, own, 'userId', 'username')) {
    return userUserApi.getUser(user.userId, user.username, null, null)
  }
  return axios.createEmtryAxios()
}

function getUserAuthorization(user) {
  if (!axios.logined()) {
    return axios.createEmtryAxios()
  }
  if (util.checkParameterOr(null, own, 'userId', 'username')) {
    return userUserApi.getUserAuthorization(user.userId, user.username, null, null)
  }
  return axios.createEmtryAxios()
}

function changeUser(user) {
  if (!axios.logined()) {
    return axios.createEmtryAxios()
  }
  if (util.checkParameterAnd('确认修改账号？', user, 'userId')) {
    return userUserApi.changeUser(user.userId, user.username, user.userPassword)
  }
  return axios.createEmtryAxios()
}

export default {
  getUser: getUser,
  getUserAuthorization: getUserAuthorization,
  changeUser: changeUser,
}
