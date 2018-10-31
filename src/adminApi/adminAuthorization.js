import adminAuthorizationApi from './adminAuthorizationApi'
import account from "../utils/account";
import util from "../utils/util";
import axios from "../utils/axios";

function addAuthorization(authorization) {
  if (!account.logined()) {
    util.errorInfo('请登录')
    return axios.createEmptyResponse()
  }
  if (util.checkParameterAnd('确认添加授权？', authorization, 'userId', 'permission')) {
    return adminAuthorizationApi.addAuthorization(authorization.userId, authorization.permission)
  }
  return axios.createEmptyResponse()
}

function removeAuthorization(authorization) {
  if (!account.logined()) {
    util.errorInfo('请登录')
    return axios.createEmptyResponse()
  }
  if (util.checkParameterAnd('确认删除授权？', authorization, 'authorizationId')) {
    return adminAuthorizationApi.removeAuthorization(authorization.authorizationId)
  }
  return axios.createEmptyResponse()
}

function getAuthorization(authorization) {
  if (!account.logined()) {
    util.errorInfo('请登录')
    return axios.createEmptyResponse()
  }
  return adminAuthorizationApi.getAuthorization(authorization.authorizationId)
}

function listAuthorizationByUserId(authorization) {
  if (!account.logined()) {
    util.errorInfo('请登录')
    return axios.createEmptyResponse()
  }
  return adminAuthorizationApi.listAuthorizationByUserId(authorization.pageSize, authorization.page, authorization.userId)
}

export default {
  addAuthorization: addAuthorization,
  removeAuthorization: removeAuthorization,
  getAuthorization: getAuthorization,
  listAuthorizationByUserId: listAuthorizationByUserId,
}
