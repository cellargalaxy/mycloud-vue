import adminUserApi from './adminUserApi'
import account from "../utils/account";
import util from "../utils/util";
import axios from "../utils/axios";

function addUser(user) {
  if (!account.logined()) {
    util.errorInfo('请登录')
    return axios.createEmptyResponse()
  }
  if (util.checkParameterAnd('确认添加账号？', user, 'username', 'password')) {
    return adminUserApi.addUser(user.username, user.password)
  }
  return axios.createEmptyResponse()
}

function removeUser(user) {
  if (!account.logined()) {
    util.errorInfo('请登录')
    return axios.createEmptyResponse()
  }
  if (util.checkParameterAnd('确认删除账号？', user, 'userId')) {
    return adminUserApi.removeUser(user.userId)
  }
  return axios.createEmptyResponse()
}

function changeUser(user) {
  if (!account.logined()) {
    util.errorInfo('请登录')
    return axios.createEmptyResponse()
  }
  if (util.checkParameterAnd('确认修改账号？', user, 'userId')) {
    return adminUserApi.changeUser(user.userId, user.username, user.password)
  }
  return axios.createEmptyResponse()
}

function getUser(user) {
  if (!account.logined()) {
    util.errorInfo('请登录')
    return axios.createEmptyResponse()
  }
  return adminUserApi.getUser(user.userId, user.username)
}

function getUserVo(user) {
  if (!account.logined()) {
    util.errorInfo('请登录')
    return axios.createEmptyResponse()
  }
  return adminUserApi.getUserVo(user.userId, user.username)
}

function listAllUser() {
  if (!account.logined()) {
    util.errorInfo('请登录')
    return axios.createEmptyResponse()
  }
  return adminUserApi.listAllUser()
}

function listAllUserVo() {
  if (!account.logined()) {
    util.errorInfo('请登录')
    return axios.createEmptyResponse()
  }
  return adminUserApi.listAllUserVo()
}

function listAllPermission() {
  if (!account.logined()) {
    util.errorInfo('请登录')
    return axios.createEmptyResponse()
  }
  return adminUserApi.listAllPermission()
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
