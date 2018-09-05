import util from '../utils/util'
import axios from '../utils/axios'
import adminFileApi from './adminFileApi'

function getDriveInfo() {
  if (!axios.logined()) {
    return axios.createEmtryAxios()
  }
  return adminFileApi.getDriveInfo()
}

function removeFile(fileInfo) {
  if (!axios.logined()) {
    return axios.createEmtryAxios()
  }
  if (util.checkParameterAnd('？！？！确认【删除】文件？！？！', fileInfo, 'fileId')) {
    return adminFileApi.removeFile(fileInfo.fileId)
  }
  return axios.createEmtryAxios()
}

function removeAllLocalFile() {
  if (!axios.logined()) {
    return axios.createEmtryAxios()
  }
  return adminFileApi.removeAllLocalFile()
}

export default {
  getDriveInfo: getDriveInfo,
  removeFile: removeFile,
  removeAllLocalFile: removeAllLocalFile,
}
