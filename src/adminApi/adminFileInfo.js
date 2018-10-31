import adminFileInfoApi from './adminFileInfoApi'
import account from "../utils/account";
import util from "../utils/util";
import axios from "../utils/axios";

function createFileInfoQuery() {
  return {pageSize: 24, page: 0, fileId: 0, md5: null, contentType: null}
}

function getFileInfo(fileInfo) {
  if (!account.logined()) {
    util.errorInfo('请登录')
    return axios.createEmptyResponse()
  }
  return adminFileInfoApi.getFileInfo(fileInfo.fileId, fileInfo.md5)
}

function getFileInfoVo(fileInfo) {
  if (!account.logined()) {
    util.errorInfo('请登录')
    return axios.createEmptyResponse()
  }
  return adminFileInfoApi.getFileInfoVo(fileInfo.fileId, fileInfo.md5)
}

function listFileInfo(fileInfo) {
  if (!account.logined()) {
    util.errorInfo('请登录')
    return axios.createEmptyResponse()
  }
  return adminFileInfoApi.listFileInfo(fileInfo.pageSize, fileInfo.page, fileInfo.fileId, fileInfo.md5, fileInfo.contentType)
}

function listFileInfoVo(fileInfo) {
  if (!account.logined()) {
    util.errorInfo('请登录')
    return axios.createEmptyResponse()
  }
  return adminFileInfoApi.listFileInfoVo(fileInfo.pageSize, fileInfo.page, fileInfo.fileId, fileInfo.md5, fileInfo.contentType)
}

function getFileInfoCount(fileInfo) {
  if (!account.logined()) {
    util.errorInfo('请登录')
    return axios.createEmptyResponse()
  }
  return adminFileInfoApi.getFileInfoCount(fileInfo.pageSize, fileInfo.page, fileInfo.fileId, fileInfo.md5, fileInfo.contentType)
}

function listContentType() {
  if (!account.logined()) {
    util.errorInfo('请登录')
    return axios.createEmptyResponse()
  }
  return adminFileInfoApi.listContentType()
}

export default {
  createFileInfoQuery: createFileInfoQuery,
  getFileInfo: getFileInfo,
  getFileInfoVo: getFileInfoVo,
  listFileInfo: listFileInfo,
  listFileInfoVo: listFileInfoVo,
  getFileInfoCount: getFileInfoCount,
  listContentType: listContentType,
}
