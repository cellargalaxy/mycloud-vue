import axios from '../utils/axios'

const url = '/admin/authorization'

function addAuthorization(userId, permission) {
  return axios.tokenAxiosMethod.post(url + '/addAuthorization', {userId: userId, permission: permission})
}

function removeAuthorization(authorizationId) {
  return axios.tokenAxiosMethod.post(url + '/removeAuthorization', {authorizationId: authorizationId})
}

function getAuthorization(authorizationId) {
  return axios.tokenAxiosMethod.get(url + '/getAuthorization', {authorizationId: authorizationId})
}

function listAuthorizationByUserId(pageSize, page, userId) {
  return axios.tokenAxiosMethod.get(url + '/listAuthorizationByUserId', {
    pageSize: pageSize,
    page: page,
    userId: userId,
  })
}

export default {
  addAuthorization: addAuthorization,
  removeAuthorization: removeAuthorization,
  getAuthorization: getAuthorization,
  listAuthorizationByUserId: listAuthorizationByUserId,
}
