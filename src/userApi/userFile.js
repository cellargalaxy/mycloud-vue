import util from '../utils/util'
import account from '../utils/account'
import axios from '../utils/axios'
import userFileApi from './userFileApi'

function uploadFile(uploadFileForm) {
  if (!account.logined()) {
    util.errorInfo('请登录')
    return axios.createEmptyResponse()
  }
  if (util.checkParameterAnd(null, uploadFileForm, 'file', 'sort')) {
    return userFileApi.uploadFile(uploadFileForm.file, uploadFileForm.sort, uploadFileForm.description)
  }
  return axios.createEmptyResponse()
}

function submitUrl(uploadUrlForm) {
  if (!account.logined()) {
    util.errorInfo('请登录')
    return axios.createEmptyResponse()
  }
  if (util.checkParameterAnd(null, uploadUrlForm, 'url', 'sort')) {
    return userFileApi.submitUrl(uploadUrlForm.url, uploadUrlForm.sort, uploadUrlForm.description)
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
