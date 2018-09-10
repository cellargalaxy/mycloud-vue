import axios from '../utils/axios'
import adminPermissionApi from './adminPermissionApi'
import util from "../utils/util";

function addPermission(permission) {
  if (!axios.logined()) {
    return axios.createEmtryAxios()
  }
  if (util.checkParameterAnd('确认添加权限？', permission, 'permissionId', 'permissionName')) {
    return adminPermissionApi.addPermission(permission.permissionId, permission.permissionName)
  }
  return axios.createEmtryAxios()
}

function removePermission(permission) {
  if (!axios.logined()) {
    return axios.createEmtryAxios()
  }
  if (util.checkParameterAnd('确认删除权限？', permission, 'permissionId')) {
    return adminPermissionApi.removePermission(permission.permissionId)
  }
  return axios.createEmtryAxios()
}

function listAllPermission() {
  if (!axios.logined()) {
    return axios.createEmtryAxios()
  }
  return adminPermissionApi.listPermission(100, 1, 0, null, null, null)
}

function listAllPermissionAuthorization() {
  if (!axios.logined()) {
    return axios.createEmtryAxios()
  }
  return adminPermissionApi.listPermissionAuthorization(100, 1, 0, null, null, null)
}

function changePermission(permission) {
  if (!axios.logined()) {
    return axios.createEmtryAxios()
  }
  if (util.checkParameterAnd('确认修改权限？', permission, 'permissionId', 'permissionName')) {
    return adminPermissionApi.changePermission(permission.permissionId, permission.permissionName)
  }
  return axios.createEmtryAxios()
}

export default {
  addPermission: addPermission,
  removePermission: removePermission,
  listAllPermission: listAllPermission,
  listAllPermissionAuthorization: listAllPermissionAuthorization,
  changePermission: changePermission,
}
