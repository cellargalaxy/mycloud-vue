import axios from '../utils/axios'

const url = '/admin/file'

function getDriveInfo() {
  return axios.instance.get(url + '/getDriveInfo', {params: {}})
}

function removeFile(fileId) {
  return axios.instance.post(url + '/removeFile', {fileId: fileId})
}

function removeAllLocalFile() {
  return axios.instance.post(url + '/removeAllLocalFile', {})
}

export default {
  getDriveInfo: getDriveInfo,
  removeFile: removeFile,
  removeAllLocalFile: removeAllLocalFile,
}
