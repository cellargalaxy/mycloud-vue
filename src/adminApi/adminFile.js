import adminFileApi from './adminFileApi'
import account from "../utils/account";
import util from "../utils/util";
import axios from "../utils/axios";

function removeFile(fileInfo) {
  if (!account.logined()) {
    util.errorInfo('请登录')
    return axios.createEmptyResponse()
  }
  if (util.checkParameterOr('？？》确认删除文件（3）《？？', fileInfo, 'fileId', 'md5')) {
    if (util.checkParameterOr('？？》确认删除文件（2）《？？', fileInfo, 'fileId', 'md5')) {
      if (util.checkParameterOr('？？》确认删除文件（1）《？？', fileInfo, 'fileId', 'md5')) {
        return adminFileApi.removeFile(fileInfo.fileId, fileInfo.md5)
      }
    }
  }
  return axios.createEmptyResponse()
}

function downloadTar() {
  if (!account.logined()) {
    util.errorInfo('请登录')
    return axios.createEmptyResponse()
  }
  return adminFileApi.downloadTar()
}

export default {
  removeFile: removeFile,
  downloadTar: downloadTar,
}

