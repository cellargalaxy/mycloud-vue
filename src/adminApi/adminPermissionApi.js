import axios from '../utils/axios'

const url = '/admin/permission'

function addPermission(permissionId, permissionName) {
  return axios.instance.post(url + '/addPermission', {
    permissionId: permissionId,
    permissionName: permissionName
  })
}

function removePermission(permissionId) {
  return axios.instance.post(url + '/removePermission', {permissionId: permissionId})
}

function getPermission(permissionId) {
  return axios.instance.get(url + '/getPermission', {params: {permissionId: permissionId}})
}

function listPermission(pageSize, page, permissionId, permissionName, createTime, updateTime) {
  return axios.instance.get(url + '/listPermission', {
    params: {
      pageSize: pageSize,
      page: page,
      permissionId: permissionId,
      permissionName: permissionName,
      createTime: createTime,
      updateTime: updateTime
    }
  })
}

function getPermissionAuthorization(permissionId) {
  return axios.instance.get(url + '/getPermissionAuthorization', {params: {permissionId: permissionId}})
}

function listPermissionAuthorization(pageSize, page, permissionId, permissionName, createTime, updateTime) {
  return axios.instance.get(url + '/listPermissionAuthorization', {
    params: {
      pageSize: pageSize,
      page: page,
      permissionId: permissionId,
      permissionName: permissionName,
      createTime: createTime,
      updateTime: updateTime
    }
  })
}

function changePermission(permissionId, permissionName) {
  return axios.instance.post(url + '/changePermission', {
    permissionId: permissionId,
    permissionName: permissionName
  })
}

function checkAddPermission(permissionId, permissionName) {
  return axios.instance.get(url + '/checkAddPermission', {
    params: {
      permissionId: permissionId,
      permissionName: permissionName
    }
  })
}

function checkChangePermission(permissionId, permissionName) {
  return axios.instance.get(url + '/checkChangePermission', {
    params: {
      permissionId: permissionId,
      permissionName: permissionName
    }
  })
}


export default {
  addPermission: addPermission,
  removePermission: removePermission,
  getPermission: getPermission,
  listPermission: listPermission,
  getPermissionAuthorization: getPermissionAuthorization,
  listPermissionAuthorization: listPermissionAuthorization,
  changePermission: changePermission,
  checkAddPermission: checkAddPermission,
  checkChangePermission: checkChangePermission,
}
