import axios from "../utils/axios";
import userOwnApi from "./userOwnApi";
import util from "../utils/util";

function addOwn(own) {
  if (!axios.logined()) {
    return axios.createEmtryAxios()
  }
  if (util.checkParameterAnd('确认添加所属？', own, 'fileId', 'fileName', 'sort')) {
    return userOwnApi.addOwn(own.fileId, own.fileName, own.sort, own.description)
  }
  return axios.createEmtryAxios()
}

function removeOwn(own) {
  if (!axios.logined()) {
    return axios.createEmtryAxios()
  }
  if (util.checkParameterOr('确认删除所属？', own, 'fileId', 'fileName', 'sort')) {
    return userOwnApi.removeOwn(own.fileId, own.fileName, own.sort, null, null, null)
  }
  return axios.createEmtryAxios()
}

function createOwnQuery() {
  return {pageSize: 20, page: 1, fileId: 0, fileName: null, sort: null}
}

function getOwnCount(ownQuery) {
  if (!axios.logined()) {
    return axios.createEmtryAxios()
  }
  if (util.checkQueryParameter(ownQuery)) {
    return userOwnApi.getOwnCount(ownQuery.pageSize, ownQuery.page, ownQuery.fileId, ownQuery.fileName, ownQuery.sort, null, null, null)
  }
  return axios.createEmtryAxios()
}

function listOwn(ownQuery) {
  if (!axios.logined()) {
    return axios.createEmtryAxios()
  }
  if (util.checkQueryParameter(ownQuery)) {
    return userOwnApi.listOwn(ownQuery.pageSize, ownQuery.page, ownQuery.fileId, ownQuery.fileName, ownQuery.sort, null, null, null)
  }
  return axios.createEmtryAxios()
}

function listAllSort() {
  if (!axios.logined()) {
    return axios.createEmtryAxios()
  }
  return userOwnApi.listSort(100, 1, 0, null, null, null, null, null)
}

function changeOwn(own) {
  if (!axios.logined()) {
    return axios.createEmtryAxios()
  }
  if (util.checkParameterAnd('确认修改所属？', own, 'ownId')) {
    return userOwnApi.changeOwn(own.ownId, own.userId, own.fileId, own.fileName, own.sort, own.description)
  }
  return axios.createEmtryAxios()
}

export default {
  addOwn: addOwn,
  removeOwn: removeOwn,
  createOwnQuery: createOwnQuery,
  getOwnCount: getOwnCount,
  listOwn: listOwn,
  listSort: listAllSort,
  changeOwn: changeOwn,
}
