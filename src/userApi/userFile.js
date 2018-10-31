import util from '../utils/util'
import account from '../utils/account'
import axios from '../utils/axios'
import userFileApi from './userFileApi'

function uploadFile(file, sort, description) {
  if (!account.logined()) {
    util.errorInfo('请登录')
    return axios.createEmptyResponse()
  }
  if (util.checkParameterAnd(null, {file: file, sort: sort}, 'file', 'sort')) {
    return userFileApi.uploadFile(file, sort, description)
  }
  return axios.createEmptyResponse()
}

function submitUrl(url, sort, description) {
  if (!account.logined()) {
    util.errorInfo('请登录')
    return axios.createEmptyResponse()
  }
  if (util.checkParameterAnd(null, {url: url, sort: sort}, 'url', 'sort')) {
    return userFileApi.submitUrl(url, sort, description)
  }
  return axios.createEmptyResponse()
}

function downloadTar() {
  if (!account.logined()) {
    util.errorInfo('请登录')
    return axios.createEmptyResponse()
  }
  return userFileApi.downloadTar()
}

export default {
  uploadFile: uploadFile,
  submitUrl: submitUrl,
  downloadTar: downloadTar,
}
