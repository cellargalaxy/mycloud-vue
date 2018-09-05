import util from '../utils/util'
import axios from '../utils/axios'
import adminAuthorizationApi from './adminAuthorizationApi'

function addAuthorization(authorization) {
  if (!axios.logined()) {
    return axios.createEmtryAxios()
  }
  if (util.checkParameterAnd('确认添加授权？', authorization, 'userId', 'permissionId')) {
    return adminAuthorizationApi.addAuthorization(authorization.userId, authorization.permissionId)
  }
  return axios.createEmtryAxios()
}

function removeAuthorization(authorization) {
  if (!axios.logined()) {
    return axios.createEmtryAxios()
  }
  if (util.checkParameterAnd('确认删除授权？', authorization, 'authorizationId')) {
    return adminAuthorizationApi.removeAuthorization(authorization.authorizationId)
  }
  return axios.createEmtryAxios()
}

function createAuthorizationQuery() {
  return {pageSize: 20, page: 1, authorizationId: 0, userId: 0, permissionId: 0}
}

function getAuthorizationCount(authorizationQuery) {
  if (!axios.logined()) {
    return axios.createEmtryAxios()
  }
  if (util.checkQueryParameter(authorization)) {
    return adminAuthorizationApi.getAuthorizationCount(
      authorizationQuery.pageSize,
      authorizationQuery.page,
      authorizationQuery.authorizationId,
      authorizationQuery.userId,
      authorizationQuery.permissionId,
      null, null)
  }
  return axios.createEmtryAxios()
}

function listAuthorization(authorizationQuery) {
  if (!axios.logined()) {
    return axios.createEmtryAxios()
  }
  if (util.checkQueryParameter(authorization)) {
    return adminAuthorizationApi.listAuthorization(
      authorizationQuery.pageSize,
      authorizationQuery.page,
      authorizationQuery.authorizationId,
      authorizationQuery.userId,
      authorizationQuery.permissionId,
      null, null)
  }
  return axios.createEmtryAxios()
}

export default {
  addAuthorization: addAuthorization,
  removeAuthorization: removeAuthorization,
  createAuthorizationQuery: createAuthorizationQuery,
  getAuthorizationCount: getAuthorizationCount,
  listAuthorization: listAuthorization,
}
