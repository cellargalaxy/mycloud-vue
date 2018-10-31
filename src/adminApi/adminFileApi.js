import axios from '../utils/axios'

const url = '/admin/file'

function removeFile(fileId, md5) {
  return axios.tokenAxiosMethod.post(url + '/removeFile', {fileId: fileId, md5: md5})
}

function downloadTar() {
  return axios.tokenAxiosMethod.get(url + '/downloadTar', {})
}

export default {
  removeFile: removeFile,
  downloadTar: downloadTar,
}
