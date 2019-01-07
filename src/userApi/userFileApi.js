import axios from '../utils/axios'

const url = '/user/file'


function uploadFile(file, sort, description) {
  const param = new FormData()
  param.append('file', file)
  param.append('sort', sort)
  param.append('description', description)
  return axios.fileAsyncAxiosMethod.post(url + '/uploadFile', param)
}

function submitUrl(urlString, sort, description) {
  return axios.tokenAsyncAxiosMethod.post(url + '/submitUrl', {url: urlString, sort: sort, description: description})
}

function downloadTar() {
  return axios.tokenAsyncAxiosMethod.get(url + '/downloadTar', {})
}

function removeFile(ownId, ownUuid) {
  return axios.tokenAxiosMethod.post(url + '/removeFile', {
    ownId: ownId,
    ownUuid: ownUuid,
  })
}

export default {
  uploadFile: uploadFile,
  submitUrl: submitUrl,
  downloadTar: downloadTar,
  removeFile: removeFile,
}
