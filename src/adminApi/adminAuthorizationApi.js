import axios from '../utils/axios'

const url = '/admin/authorization'

function addAuthorization(userId, permissionId) {
  return axios.instance.post(url + '/addAuthorization', {userId: userId, permissionId: permissionId})
}

function removeAuthorization(authorizationId) {
  return axios.instance.post(url + '/removeAuthorization', {authorizationId: authorizationId})
}

function getAuthorization(authorizationId) {
  return axios.instance.get(url + '/getAuthorization', {params: {authorizationId: authorizationId}})
}

function getAuthorizationCount(pageSize, page, authorizationId, userId, permissionId, createTime, updateTime) {
  return axios.instance.get(url + '/getAuthorizationCount', {
    params: {
      pageSize: pageSize,
      page: page,
      authorizationId: authorizationId,
      userId: userId,
      permissionId: permissionId,
      createTime: createTime,
      updateTime: updateTime
    }
  })
}

function listAuthorization(pageSize, page, authorizationId, userId, permissionId, createTime, updateTime) {
  return axios.instance.get(url + '/listAuthorization', {
    params: {
      pageSize: pageSize,
      page: page,
      authorizationId: authorizationId,
      userId: userId,
      permissionId: permissionId,
      createTime: createTime,
      updateTime: updateTime
    }
  })
}

function changeAuthorization(authorizationId, userId, permissionId) {
  return axios.instance.post(url + '/changeAuthorization', {
    authorizationId: authorizationId,
    userId: userId,
    permissionId: permissionId
  })
}

function checkAddAuthorization(userId, permissionId) {
  return axios.instance.get(url + '/checkAddAuthorization', {
    params: {
      userId: userId,
      permissionId: permissionId
    }
  })
}

function checkChangeAuthorization(authorizationId, userId, permissionId) {
  return axios.instance.get(url + '/checkChangeAuthorization', {
    params: {
      authorizationId: authorizationId,
      userId: userId,
      permissionId: permissionId
    }
  })
}

export default {
  addAuthorization: addAuthorization,
  removeAuthorization: removeAuthorization,
  getAuthorization: getAuthorization,
  getAuthorizationCount: getAuthorizationCount,
  listAuthorization: listAuthorization,
  changeAuthorization: changeAuthorization,
  checkAddAuthorization: checkAddAuthorization,
  checkChangeAuthorization: checkChangeAuthorization,
}
