import adminOwnApi from './adminOwnApi'
import axios from '../utils/axios'
import util from "../utils/util";

function addOwn(own) {
  if (!axios.logined()) {
    return axios.createEmtryAxios()
  }
  if (util.checkParameterAnd('确认添加所属？', own, 'userId', 'fileId', 'fileName', 'sort')) {
    return adminOwnApi.addOwn(own.userId, own.fileId, own.fileName, own.sort, own.description)
  }
  return axios.createEmtryAxios()
}

function removeOwn(own) {
  if (!axios.logined()) {
    return axios.createEmtryAxios()
  }
  if (util.checkParameterOr('确认删除所属？', own, 'ownId', 'userId', 'fileId', 'fileName', 'sort')) {
    return adminOwnApi.removeOwn(own.ownId, own.userId, own.fileId, own.fileName, own.sort, null, null, null)
  }
  return axios.createEmtryAxios()
}

function createOwnQuery() {
  return {pageSize: 20, page: 1, ownId: 0, userId: 0, fileId: 0, fileName: null, sort: null}
}

function getOwnCount(ownQuery) {
  if (!axios.logined()) {
    return axios.createEmtryAxios()
  }
  if (util.checkQueryParameter(ownQuery)) {
    return adminOwnApi.getOwnCount(ownQuery.pageSize, ownQuery.page, ownQuery.ownId, ownQuery.userId, ownQuery.fileId, ownQuery.fileName, ownQuery.sort, null, null, null)
  }
  return axios.createEmtryAxios()
}

function listOwn(ownQuery) {
  if (!axios.logined()) {
    return axios.createEmtryAxios()
  }
  if (util.checkQueryParameter(ownQuery)) {
    return adminOwnApi.listOwn(ownQuery.pageSize, ownQuery.page, ownQuery.ownId, ownQuery.userId, ownQuery.fileId, ownQuery.fileName, ownQuery.sort, null, null, null)
  }
  return axios.createEmtryAxios()
}

function listSort(own) {
  if (!axios.logined()) {
    return axios.createEmtryAxios()
  }
  return adminOwnApi.listSort(own.userId)
}

function changeOwn(own) {
  if (!axios.logined()) {
    return axios.createEmtryAxios()
  }
  if (util.checkParameterAnd('确认修改所属？', own, 'ownId')) {
    return adminOwnApi.changeOwn(own.ownId, own.userId, own.fileId, own.fileName, own.sort, own.description)
  }
  return axios.createEmtryAxios()
}

export default {
  addOwn: addOwn,
  removeOwn: removeOwn,
  createOwnQuery: createOwnQuery,
  getOwnCount: getOwnCount,
  listOwn: listOwn,
  listSort: listSort,
  changeOwn: changeOwn,
}
