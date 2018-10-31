import adminOwnApi from './adminOwnApi'
import account from "../utils/account";
import util from "../utils/util";
import axios from "../utils/axios";

function createOwnQuery() {
  return {
    pageSize: 0,
    page: 0,
    ownId: 0,
    ownUuid: null,
    userId: 0,
    fileId: 0,
    contentType: null,
    fileName: null,
    sort: null
  }
}

function addOwn(own) {
  if (!account.logined()) {
    util.errorInfo('请登录')
    return axios.createEmptyResponse()
  }
  if (util.checkParameterAnd('确认添加所属？', own, 'userId', 'fileId', 'fileLength', 'contentType', 'fileName', 'sort')) {
    return adminOwnApi.addOwn(own.userId, own.fileId, own.fileLength, own.contentType, own.fileName, own.sort, own.description)
  }
  return axios.createEmptyResponse()
}

function removeOwn(own) {
  if (!account.logined()) {
    util.errorInfo('请登录')
    return axios.createEmptyResponse()
  }
  if (util.checkParameterOr('确认删除所属？', own, 'ownId', 'ownUuid')) {
    return adminOwnApi.removeOwn(own.ownId, own.ownUuid)
  }
  return axios.createEmptyResponse()
}

function changeOwn(own) {
  if (!account.logined()) {
    util.errorInfo('请登录')
    return axios.createEmptyResponse()
  }
  if (util.checkParameterOr('确认修改所属？', own, 'ownId', 'ownUuid')) {
    return adminOwnApi.changeOwn(own.ownId, own.ownUuid, own.userId, own.fileId, own.fileLength, own.contentType, own.fileName, own.sort, own.description)
  }
  return axios.createEmptyResponse()
}

function getOwn(own) {
  if (!account.logined()) {
    util.errorInfo('请登录')
    return axios.createEmptyResponse()
  }
  return adminOwnApi.getOwn(own.ownId, own.ownUuid)
}

function listOwn(own) {
  if (!account.logined()) {
    util.errorInfo('请登录')
    return axios.createEmptyResponse()
  }
  return adminOwnApi.listOwn(own.pageSize, own.page, own.ownId, own.ownUuid, own.userId, own.fileId, own.contentType, own.fileName, own.sort)
}

function getOwnCount(own) {
  if (!account.logined()) {
    util.errorInfo('请登录')
    return axios.createEmptyResponse()
  }
  return adminOwnApi.getOwnCount(own.pageSize, own.page, own.ownId, own.ownUuid, own.userId, own.fileId, own.contentType, own.fileName, own.sort)
}

function listSort() {
  if (!account.logined()) {
    util.errorInfo('请登录')
    return axios.createEmptyResponse()
  }
  return adminOwnApi.listSort()
}

export default {
  createOwnQuery: createOwnQuery,
  addOwn: addOwn,
  removeOwn: removeOwn,
  getOwn: getOwn,
  getOwnCount: getOwnCount,
  listOwn: listOwn,
  listSort: listSort,
  changeOwn: changeOwn,
}
