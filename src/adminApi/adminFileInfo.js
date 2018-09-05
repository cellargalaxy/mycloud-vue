import adminFileInfoApi from './adminFileInfoApi'
import axios from "../utils/axios";
import util from "../utils/util";

function createFileInfoQuery() {
  return {pageSize: 20, page: 1, fileId: 0, md5: null, contentType: null}
}

function getFileInfoCount(fileInfoQuery) {
  if (!axios.logined()) {
    return axios.createEmtryAxios()
  }
  if (util.checkQueryParameter(fileInfoQuery)) {
    return adminFileInfoApi.getFileInfoCount(
      fileInfoQuery.pageSize,
      fileInfoQuery.page,
      fileInfoQuery.fileId,
      fileInfoQuery.md5,
      0,
      fileInfoQuery.contentType,
      null, null)
  }
  return axios.createEmtryAxios()
}

function listFileInfo(fileInfoQuery) {
  if (!axios.logined()) {
    return axios.createEmtryAxios()
  }
  if (util.checkQueryParameter(fileInfoQuery)) {
    return adminFileInfoApi.listFileInfo(
      fileInfoQuery.pageSize,
      fileInfoQuery.page,
      fileInfoQuery.fileId,
      fileInfoQuery.md5,
      0,
      fileInfoQuery.contentType,
      null, null)
  }
  return axios.createEmtryAxios()
}

function listFileInfoOwn(fileInfoQuery) {
  if (!axios.logined()) {
    return axios.createEmtryAxios()
  }
  if (util.checkQueryParameter(fileInfoQuery)) {
    return adminFileInfoApi.listFileInfoOwn(
      fileInfoQuery.pageSize,
      fileInfoQuery.page,
      fileInfoQuery.fileId,
      fileInfoQuery.md5,
      0,
      fileInfoQuery.contentType,
      null, null)
  }
  return axios.createEmtryAxios()
}

function listContentType() {
  if (!axios.logined()) {
    return axios.createEmtryAxios()
  }
  return adminFileInfoApi.listContentType()
}

export default {
  createFileInfoQuery: createFileInfoQuery,
  getFileInfoCount: getFileInfoCount,
  listFileInfo: listFileInfo,
  listFileInfoOwn: listFileInfoOwn,
  listContentType: listContentType,
}
