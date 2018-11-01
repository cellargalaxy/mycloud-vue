import userOwnApi from "./userOwnApi";
import account from "../utils/account";
import util from "../utils/util";
import axios from "../utils/axios";

function createOwnQuery() {
  return {pageSize: 24, page: 1, ownId: 0, ownUuid: null, fileId: 0, contentType: null, fileName: null, sort: null}
}

function addOwn(own) {
  if (!account.logined()) {
    util.errorInfo('请登录')
    return axios.createEmptyResponse()
  }
  if (util.checkParameterAnd('确认添加所属？', own, 'fileId', 'fileLength', 'contentType', 'fileName', 'sort')) {
    return userOwnApi.addOwn(own.fileId, own.fileLength, own.contentType, own.fileName, own.sort, own.description)
  }
  return axios.createEmptyResponse()
}

function removeOwn(own) {
  if (!account.logined()) {
    util.errorInfo('请登录')
    return axios.createEmptyResponse()
  }
  if (util.checkParameterOr('确认删除所属？', own, 'ownId', 'ownUuid')) {
    return userOwnApi.removeOwn(own.ownId, own.ownUuid)
  }
  return axios.createEmptyResponse()
}

function changeOwn(own) {
  if (!account.logined()) {
    util.errorInfo('请登录')
    return axios.createEmptyResponse()
  }
  if (util.checkParameterOr('确认修改所属？', own, 'ownId', 'ownUuid')) {
    return userOwnApi.changeOwn(own.ownId, own.ownUuid, own.fileName, own.sort, own.description)
  }
  return axios.createEmptyResponse()
}

function getOwn(own) {
  if (!account.logined()) {
    util.errorInfo('请登录')
    return axios.createEmptyResponse()
  }
  return userOwnApi.getOwn(own.ownId, own.ownUuid)
}

function listOwn(own) {
  if (!account.logined()) {
    util.errorInfo('请登录')
    return axios.createEmptyResponse()
  }
  return userOwnApi.listOwn(own.pageSize, own.page, own.ownId, own.ownUuid, own.fileId, own.contentType, own.fileName, own.sort)
}

function getOwnCount(own) {
  if (!account.logined()) {
    util.errorInfo('请登录')
    return axios.createEmptyResponse()
  }
  return userOwnApi.getOwnCount(own.pageSize, own.page, own.ownId, own.ownUuid, own.fileId, own.contentType, own.fileName, own.sort)
}

function listSort() {
  if (!account.logined()) {
    util.errorInfo('请登录')
    return axios.createEmptyResponse()
  }
  return userOwnApi.listSort()
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
